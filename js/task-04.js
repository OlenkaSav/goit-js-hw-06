// Создай переменную counterValue в которой будет храниться
//  текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

let counterValue = 0;
const refs ={
    decBtn: document.querySelector('button[data-action="decrement"]'),
    value: document.querySelector('#value'),
    incBtn: document.querySelector('button[data-action="increment"]'),
}
refs.decBtn.addEventListener('click', minusDecrement);
refs.incBtn.addEventListener('click', plusIncrement);

function minusDecrement() {
    counterValue -= 1;
    refs.value.textContent = counterValue;
}

function plusIncrement() {
    counterValue += 1;
    refs.value.textContent = counterValue;
}