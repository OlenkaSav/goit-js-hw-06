// Напиши скрипт который, при наборе текста в инпуте
//  input#name - input(событие input), подставляет
//  его текущее значение в span#name - output.Если инпут пустой,
//     в спане должна отображаться строка "Anonymous".

const refs = {
    input: document.querySelector('#name-input'),
    output: document.querySelector('#name-output'),
}

refs.input.addEventListener('input', onInputChange);

console.log(refs.input.textContent);

function onInputChange(event) {
    if (event.currentTarget.value === '') {
        return refs.output.textContent = "Anonymous";
    }
       refs.output.textContent = event.currentTarget.value;
}