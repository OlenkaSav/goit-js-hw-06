// Напиши скрипт создания и очистки коллекции элементов. 
// Пользователь вводит количество элементов в input и нажимает 
// кнопку Создать, после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>
// Создай функцию createBoxes(amount), которая принимает один
// параметр - число.Функция создает столько < div >, сколько 
// указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше 
// предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. 
// Используй готовую функцию getRandomHexColor для получения цвета.

// Создай функцию destroyBoxes(), которая очищает содержимое
//  div#boxes, тем самым удаляя все созданные элементы.


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const refs = {
  inputeValue: document.querySelector("input"),
  createBtn: document.querySelector("button[data-create]"),
  destroyBtn: document.querySelector("button[data-destroy]"),
  boxesContainer: document.querySelector("#boxes"),
}
// let boxNumbers=0;
let boxSide = 20;
refs.inputeValue.addEventListener('input', onInputValue);
// refs.createBtn.addEventListener("click", createBoxes);
refs.destroyBtn.addEventListener("click", onClearBtnClick);

function onInputValue(event) {
 const boxNumbers =  Number(event.currentTarget.value);
  console.log(`это чисто квадратов ${boxNumbers}`);

  refs.createBtn.addEventListener("click", createBoxes);
  function createBoxes(event) {
  
  for (let i = 1; i <= boxNumbers; i += 1) {
    boxSide += 10;
    const box = document.createElement("div");
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${boxSide}px`;
    box.style.height = `${boxSide}px`;
    box.style.margin = "20px"
    refs.boxesContainer.append(box);
  }
}

}

 

refs.boxesContainer.style.display = "flex";
refs.boxesContainer.style.flexWrap = "wrap";

function onClearBtnClick(event) {
  refs.boxesContainer.innerHTML = '';
}
