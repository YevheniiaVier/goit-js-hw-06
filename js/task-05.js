const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');
const defaultName = outputRef.textContent;

inputRef.addEventListener('input', onInputChange);

function onInputChange(event) {
  inputRef.value.length === 0
    ? (outputRef.textContent = defaultName)
    : (outputRef.textContent = event.currentTarget.value);
}
