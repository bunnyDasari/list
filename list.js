let groceryList = ["Apples", "Boost Drink", "Butterscotch Ice Cream", "Tomato Ketchup", "Dairy Milk Chocolates", "Pasta"];

let container = document.getElementById("groceryListContainer");
container.classList.add("bg-container");

let head_ing = document.createElement("h1");
head_ing.classList.add("heading");
head_ing.textContent = "GroceryList";
container.appendChild(head_ing);

let listItem = document.createElement("ul");
listItem.classList.add("list-container");
container.appendChild(listItem);


for (let i of groceryList) {
    let listI = document.createElement("li");
    listI.textContent = i;
    listItem.appendChild(listI);

}