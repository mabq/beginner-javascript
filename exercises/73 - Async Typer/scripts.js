function delay(timeout = 0) {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

function getRandomBetween(min = 20, max = 150, randomNumber = Math.random()) {
  // Tip: the random number is passed as an argument in order to make the
  // function pure for testing.
  return Math.floor(randomNumber * (max - min) + min) + 1;
}

// async for of loop
async function draw(el) {
  const text = el.textContent;
  const { typeMin, typeMax } = el.dataset;
  let soFar = '';
  for (const letter of text) {
    soFar += letter;
    el.textContent = soFar;
    if (soFar.length === 1) {
      el.classList.add('typeNow');
    }
    await delay(getRandomBetween(typeMin, typeMax));
  }
}

// parallel
document.querySelectorAll('[data-type]').forEach(draw);

// sequential
// const els = document.querySelectorAll('[data-type]');
// (async () => {
//   for (const el of els) {
//     await draw(el);
//   }
// })();
