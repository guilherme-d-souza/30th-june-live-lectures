const groceries = [
  {
    imageSrc:
      "https://images.unsplash.com/photo-1626803186025-b308cae6f37e?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Passion Fruit",
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Mango",
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Pineapple",
  },
];

// 1 - have a target
const groceryList = document.getElementById("grocery__list");
// 2 - create the element

//    2.1 - have a template
const groceryItemTemplate = document.getElementById("grocery-template");

//    2.2 - import the template
function createGroceryElement(groceryItem) {
  // create the element
  //                                              template.content
  const groceryElement = document.importNode(groceryItemTemplate.content, true);
  // add the title
  const groceryTitle = groceryElement.querySelector(".grocery__item-title");
  groceryTitle.textContent = groceryItem.description;
  // add the image src
  const groceryImage = groceryElement.querySelector(".grocery__item-image");
  groceryImage.src = groceryItem.imageSrc;
  // add the alternative text
  groceryImage.alt = groceryItem.description;
  return groceryElement; // RETURN THE DATA
}

groceries.forEach((element) => {
  const groceryItem = createGroceryElement(element);
  // 3 - append the element to the target
  groceryList.appendChild(groceryItem);
});
