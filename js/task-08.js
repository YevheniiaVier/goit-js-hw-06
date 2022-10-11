const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const mail = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  const formData = {
    mail,
    password,
  };

  for (const value of Object.values(formData)) {
    if (!value) {
      alert('Please fill all fields');
      return;
    }
  }
  console.log(formData);
  formRef.reset();
}

//   const formData = new FormData(event.currentTarget);

//   const formProps = Object.fromEntries(formData); // створюємо реальний обєкт з даними форми, щоб була можливість перервати ітерацію по ньому і не виводити алерт двічі, якщо обидва інпута пусті

//   for (const value of Object.values(formProps)) {
//     if (!value) {
//       alert('Please fill all fields');
//       return;
//     }
//   }
