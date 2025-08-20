// TARGET ->  THIS IS ESSENCIAL

// insertAdjacentHTML
const paragraph = document.getElementById("reference");

// beforestart
// <p>
// afterstart
// ---- content
// beforeend
// </p>
// afterend
// XSS attacks -> tricky to handle -> avoid innerHTML and insertAdjacentHTML
paragraph.insertAdjacentHTML("beforeend", "<b>this is from the JS</b>");

// create an element with JS
// its a function
// document.createElement(tag);
const image = document.createElement("img");
image.src =
  "https://images.unsplash.com/photo-1626803186025-b308cae6f37e?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
image.alt = "Passion Fruit";
image.classList.add("passion_fruit");
// create an element does NOTTTTTT ADDED to the DOM

// this will not work because HTML can only have body has a child
// document.appendChild(image);

const body = document.getElementsByTagName("body")[0];
console.log(body);
body.appendChild(image);

// i want to add a image list inside the ul tag
// 1 - target -> ul tag with the class image__list
const ulList = document.querySelector(".image__list");
// 2 - create the element(s)
const groceryList = [
  {
    imageSrc:
      "https://images.unsplash.com/photo-1626803186025-b308cae6f37e?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alternativeText: "Passion Fruit",
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alternativeText: "Mango",
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alternativeText: "Pineapple",
  },
];

function createGroceryImageElement(groceryItem) {
  const groceryImage = document.createElement("img");
  groceryImage.src = groceryItem.imageSrc;
  groceryImage.alt = groceryItem.alternativeText;
  groceryImage.classList.add("grocery__image");
  return groceryImage;
}

const thirdListItem = document.getElementById("third-element");

groceryList.forEach((groceryItem) => {
  const listItem = document.createElement("li");
  const image = createGroceryImageElement(groceryItem);
  listItem.appendChild(image); // widely used method/function
  // 3 - add the element(s) to the target
  ulList.insertBefore(listItem, thirdListItem);
});
