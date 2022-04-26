const categories = document.querySelector('#categories');
console.log(`Number of categories: ${categories.children.length}`);
// console.log(categories.firstElementChild);

// const first = categories.firstElementChild;
// console.log(first.querySelector("h2").textContent);
// console.log(first.querySelector("ul").children.length);

const list =[...categories.children] ;
for (const item of list) {
console.log(`Category: ${item.querySelector("h2").textContent}`);
console.log(`Elements: ${item.querySelector("ul").children.length}`);
}
