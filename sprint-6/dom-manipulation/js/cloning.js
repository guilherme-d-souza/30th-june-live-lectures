const title = document.querySelector("h1");
const titleCopy = title.cloneNode(false);
titleCopy.id = "title-copy";
const titleCopyWithText = title.cloneNode(true);
titleCopyWithText.textContent += ". This was added in JS";

const body = document.querySelector("body");

body.appendChild(titleCopy);
body.appendChild(titleCopyWithText);
