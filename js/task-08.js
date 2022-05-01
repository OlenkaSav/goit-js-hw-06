//  Обработка отправки формы form.login-form должна быть по 
// событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с 
// предупреждением о том, что все поля должны быть заполнены.
//  Если пользователь заполнил все поля и отправил форму,
//  собери значения полей в обьект, где имя поля будет именем
// свойства, а значение поля - значением свойства.Для доступа 
// к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти 
// значения полей формы методом reset.


const loginForm = document.querySelector(".login-form");
const emailForm = loginForm.elements.email;
const passwordForm = loginForm.elements.password;
const submitBtn = loginForm.elements[2];

loginForm.addEventListener("submit", onSubmitBtn);

function onSubmitBtn(event) {
    event.preventDefault();
//     const {
//     email, password
//   } = event.currentTarget;

  if (emailForm.value === "" || passwordForm.value === "") {
    return alert("Уважніше будь-ласка! Потрібно заповнити всі поля :)");
  }
    
    const objForm = {
        [emailForm.name]: emailForm.value,
        [passwordForm.name]: passwordForm.value,
    };
    console.log(objForm);
    console.dir();

    event.currentTarget.reset();
}

// const formData = new FormData(event.currentTarget);


