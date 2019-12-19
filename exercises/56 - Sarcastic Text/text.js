const textInput = document.querySelector('.typer textarea[name="text"]');
const textOutput = document.querySelector('.typer .result');

const filterInputs = document.querySelectorAll('.typer input[name="filter"]');
const filterInputsArray = Array.from(filterInputs);
let filter = filterInputsArray.find(input => input.checked).value;

const funkyLetters = {
  '-': '₋',
  '!': 'ᵎ',
  '?': 'ˀ',
  '(': '⁽',
  ')': '₎',
  '+': '⁺',
  '=': '₌',
  '0': '⁰',
  '1': '₁',
  '2': '²',
  '4': '₄',
  '5': '₅',
  '6': '₆',
  '7': '⁷',
  '8': '⁸',
  '9': '⁹',
  a: 'ᵃ',
  A: 'ᴬ',
  B: 'ᴮ',
  b: 'ᵦ',
  C: '𝒸',
  d: 'ᵈ',
  D: 'ᴰ',
  e: 'ₑ',
  E: 'ᴱ',
  f: '𝒻',
  F: 'ᶠ',
  g: 'ᵍ',
  G: 'ᴳ',
  h: 'ʰ',
  H: 'ₕ',
  I: 'ᵢ',
  i: 'ᵢ',
  j: 'ʲ',
  J: 'ᴶ',
  K: 'ₖ',
  k: 'ₖ',
  l: 'ˡ',
  L: 'ᴸ',
  m: 'ᵐ',
  M: 'ₘ',
  n: 'ₙ',
  N: 'ᴺ',
  o: 'ᵒ',
  O: 'ᴼ',
  p: 'ᵖ',
  P: 'ᴾ',
  Q: 'ᵠ',
  q: 'ᑫ',
  r: 'ʳ',
  R: 'ᵣ',
  S: 'ˢ',
  s: 'ˢ',
  t: 'ᵗ',
  T: 'ₜ',
  u: 'ᵘ',
  U: 'ᵤ',
  v: 'ᵛ',
  V: 'ᵥ',
  w: '𝓌',
  W: 'ʷ',
  x: 'ˣ',
  X: 'ˣ',
  y: 'y',
  Y: 'Y',
  z: '𝓏',
  Z: 'ᶻ',
};

const filters = {
  sarcastic(letter, index) {
    return index % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase();
  },
  funky(letter) {
    return funkyLetters[letter] || letter;
  },
  unable(letter) {
    return letter === ' ' && Math.floor(Math.random() * 3) === 2
      ? '...'
      : letter;
  },
};

function transformText() {
  const result = Array.from(textInput.value)
    .map(filters[filter])
    .join('');
  textOutput.textContent = result;
}

textInput.addEventListener('input', transformText);

filterInputs.forEach(option =>
  option.addEventListener('input', e => {
    filter = e.currentTarget.value;
    transformText();
  })
);
