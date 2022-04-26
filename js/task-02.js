const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const productList = document.querySelector('#ingredients');

const elements = ingredients.map(ingredient => {
  const listItem = document.createElement("li");
  listItem.classList.add("item");
  listItem.textContent = ingredient;

  return listItem;
});

productList.append(...elements);

// console.log(elements);
    






// console.log(productList);