// Напиши скрипт, который реагирует на изменение значения
// input#font-size-control(событие input) и изменяет
// инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться
// размер текста.

const refs = {
    inputRange: document.querySelector('#font-size-control'),
    spanText: document.querySelector('#text'),
}

refs.inputRange.addEventListener('input', onDrag);

function onDrag(event) {
    let fontSizeValue = Number(event.currentTarget.value);
    refs.spanText.style.fontSize = `${fontSizeValue}px`;
}