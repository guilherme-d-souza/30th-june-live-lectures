const title = document.querySelector("h2");

// title.remove(); // USE THIS

// const banner = document.querySelector(".grocery__banner");

// banner.removeChild(title);

const groceryArea = document.querySelector(".grocery__area");

console.log(title.parentNode);

groceryArea.appendChild(title);

console.log(title.parentNode);
