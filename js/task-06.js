// Сколько символов должно быть в инпуте, указывается в его
// атрибуте data - length.
// Если введено подходящее количество символов,
//     то border инпута становится зелёным, если неправильное
//         - красным.
// Для добавления стилей, используй CSS - классы valid и
// invalid, которые мы уже добавили в исходные файлы задания.

const textInput = document.querySelector("#validation-input");

textInput.addEventListener('blur', onInputChange);
textInput.addEventListener('focus', onInputClear);

function onInputClear(event) {
   textInput.classList.remove('valid', 'invalid'); 
}
function onInputChange(event) {
    // console.log(event.currentTarget.value.length);
    
    
    if (event.currentTarget.value.length !== Number(textInput.dataset.length)) {
        textInput.classList.add('invalid');
    } else {
        textInput.classList.add('valid');
    }
}