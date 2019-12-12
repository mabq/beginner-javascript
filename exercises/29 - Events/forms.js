const wes = document.querySelector('.wes');

wes.addEventListener('click', e => {
  e.preventDefault();
  console.log(e);
});

const btn = document.querySelector('.ent');

const btnHandler = e => {
  if (e.type === 'click' || e.key === 'enter') {
    console.log('Hey! whats up?');
  }
  e.preventDefault();
};

btn.addEventListener('click', btnHandler);
btn.addEventListener('keyup', btnHandler);
