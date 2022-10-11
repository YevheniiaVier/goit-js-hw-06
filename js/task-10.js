function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumberRef = document.querySelector('#controls input');
const buttonCreateRef = document.querySelector('button[data-create]');
const buttonDestroyRef = document.querySelector('button[data-destroy]');
const boxesRef = document.querySelector('#boxes');

buttonCreateRef.addEventListener('click', onCreateBtnClick);
buttonDestroyRef.addEventListener('click', onDestroyBtnClick);
inputNumberRef.addEventListener('input', onInputChange);

let inputValue = inputNumberRef.value;
const boxElements = [];

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const boxEl = document.createElement('div');
    boxEl.style.width = `${30 + 10 * i}px`;
    boxEl.style.height = `${30 + 10 * i}px`;
    boxEl.style.backgroundColor = getRandomHexColor();
    boxEl.classList.add('boxes__element');

    boxElements.push(boxEl);
    console.log(boxEl);
  }
  console.log(boxElements);
  return boxElements;
}

function onCreateBtnClick() {
  createBoxes(inputValue);
  boxesRef.append(...boxElements);
}
function onDestroyBtnClick() {
  boxesRef.innerHTML = '';
}
function onInputChange() {
  inputValue = inputNumberRef.value;
}
