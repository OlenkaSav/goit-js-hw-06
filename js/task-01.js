const categories = document.querySelector('#categories');
console.log(`Number of categories: ${categories.children.length}`);

const list =[...categories.children] ;
for (const item of list) {
console.log(`Category: ${item.querySelector("h2").textContent}`);
console.log(`Elements: ${item.querySelector("ul").children.length}`);
}
