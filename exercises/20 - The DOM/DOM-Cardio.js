const buttons = document.querySelectorAll('button.buy');

function handleClick(event) {
  const { action } = event.target.dataset;
  console.log(action);
  if (action === 'stop') {
    event.stopPropagation();
  }
  console.dir(event);
}

// Event listener on buttons
buttons.forEach(button => {
  button.addEventListener('click', handleClick);
});

// Event listener on window
window.addEventListener('click', () => {
  console.log('The window was clicked!');
});
