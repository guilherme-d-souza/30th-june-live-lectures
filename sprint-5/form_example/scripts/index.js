const button = document.getElementById("formButton");

const input = document.getElementById("input");

input.value = document.getElementById("title").textContent;

button.addEventListener("click", function (event) {
  event.preventDefault();
});
