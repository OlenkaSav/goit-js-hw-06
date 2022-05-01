// Напиши скрипт, который изменяет цвета фона элемента < body >
//   через инлайн стиль при клике на button.change - color и 
// выводит значение цвета в span.color.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  changeColorBtn: document.querySelector(".change-color"),
  body: document.querySelector("body"),
  spanText: document.querySelector(".color"),
}

refs.changeColorBtn.addEventListener("click", onBtnClick);

function onBtnClick(event) {
  const colorBg = getRandomHexColor();
  refs.body.style.backgroundColor = colorBg;
  refs.spanText.textContent = colorBg;
}