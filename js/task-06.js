const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('focus', onInputFocus);
inputRef.addEventListener('input', onInputChange);

function onInputFocus() {
  inputRef.style.outline = 'none';
  event.currentTarget.classList.add('invalid');
}

function onInputChange(event) {
  event.currentTarget.classList.add('invalid') ||
    event.currentTarget.classList.replace('valid', 'invalid');
  if (event.currentTarget.value.length >= event.currentTarget.dataset.length) {
    event.currentTarget.classList.replace('invalid', 'valid');
  }
}

// inputRef.addEventListener('blur', onInputBlur);

// function onInputBlur(event) {
//   event.currentTarget.classList.add('valid') ||
//     event.currentTarget.classList.replace('invalid', 'valid');
//   if (event.currentTarget.value.length < event.currentTarget.dataset.length) {
//     event.currentTarget.classList.replace('valid', 'invalid');
//   }
// }
