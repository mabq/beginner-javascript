function destroyPopup(popup) {
  popup.classList.remove('open');
  setTimeout(() => {
    // Para que la animación se de, se debe remover el elemento en el siguiente ciclo.
    popup.remove(); // Remove from the DOM
    popup = null; // Remove from JavaScript's memory
  }, 50);
}

function ask(options) {
  return new Promise(resolve => {
    // Create popup element
    // We use 'document.createElement()' in order to be able to attach an event
    // listener to the element before inserting it into the DOM.
    const popup = document.createElement('form');
    popup.classList.add('popup');
    popup.insertAdjacentHTML(
      'afterbegin',
      `<fieldset>
        <label>${options.title}</label>
        <input type="text" name="input"/>
        <button type="submit">Send</button>
      </fieldset>`
    );

    // Listen for the submit event
    popup.addEventListener('submit', e => {
      e.preventDefault();
      resolve(e.target.input.value); // ◀︎--------------------------------------
      destroyPopup(popup);
    });

    // Check for cancel button
    if (options.cancel) {
      const skipButton = document.createElement('button');
      // the type must be set to button, otherwise it would default to submit
      skipButton.type = 'button';
      skipButton.textContent = 'Cancel';
      skipButton.addEventListener('click', () => {
        resolve(null); // ◀︎----------------------------------------------------
        destroyPopup(popup);
      });
      popup.firstElementChild.appendChild(skipButton);
    }

    // Append child
    document.body.appendChild(popup);
    popup.querySelector('input').focus();

    // For the animation to work, the class must be added after the element
    // has render on the page.
    setTimeout(() => {
      popup.classList.add('open');
    }, 50);
  });
}

async function askQuestion(e) {
  const button = e.currentTarget;
  const answer = await ask({
    title: button.dataset.question,
    cancel: button.hasAttribute('data-cancel'),
  });
  // this part (inside the function) wont be executed until we receive the response.
  console.log(answer);
}

const buttons = document.querySelectorAll('[data-question]');
buttons.forEach(button => button.addEventListener('click', askQuestion));
