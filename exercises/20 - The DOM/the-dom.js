const pic = document.querySelector('.pic');

function toogleRotate() {
  pic.classList.toggle('rotate');
}

pic.addEventListener('mouseenter', toogleRotate);
pic.addEventListener('mouseout', toogleRotate);

// create list

function createAndAppendListElement(conten t, appendTo) {
  const e = document.createElement('li');
  e.innerHTML = content;

  appendTo.insertAdjacentElement('beforeend', e);
}

const list = document.createElement('ul');
createAndAppendListElement('One', list);
createAndAppendListElement('Two', list);
createAndAppendListElement('Three', list);
createAndAppendListElement('Four', list);
createAndAppendListElement('Five', list);

document.body.insertAdjacentElement('afterbegin', list);
