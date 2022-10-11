const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  if (inputRef.value.length < event.currentTarget.getAttribute('data-length')) {
    event.currentTarget.classList.add('invalid');
    event.currentTarget.classList.remove('valid');
  } else {
    event.currentTarget.classList.remove('invalid');
    event.currentTarget.classList.add('valid');
  }
}
