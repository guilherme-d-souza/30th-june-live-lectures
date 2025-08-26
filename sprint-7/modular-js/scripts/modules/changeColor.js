const body = document.querySelector("body");

function changeBackgroundColor() {
  body.classList.toggle("bg-black");
}

// ONLY ONE THING TO EXPORT
// DEFAULT EXPORT STYLE
// const module = changeBackgroundColor;
export default changeBackgroundColor;
