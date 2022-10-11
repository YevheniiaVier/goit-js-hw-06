const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', onInputBlur);

// function onInputBlur(event) {
//   if (event.currentTarget.value.length < event.currentTarget.dataset.length) {
//     event.currentTarget.classList.add('invalid');
//     event.currentTarget.classList.remove('valid');
//   } else {
//     event.currentTarget.classList.remove('invalid');
//     event.currentTarget.classList.add('valid');
//   }
// }

function onInputBlur(event) {
  event.currentTarget.classList.add('valid') ||
    event.currentTarget.classList.replace('invalid', 'valid');
  if (event.currentTarget.value.length < event.currentTarget.dataset.length) {
    event.currentTarget.classList.replace('valid', 'invalid');
  }
}
