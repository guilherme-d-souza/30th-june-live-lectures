// target
const canvaElement = document.querySelector(".canva");

let count = 0;

// event listener
canvaElement.addEventListener("click", whenUserClicks);
// add event to the whole page
// document.addEventListener("click", whenUserClicks);

// action
function whenUserClicks(event) {
  count++;
  console.log("Where the user clicked?", event.clientX, event.clientY);

  const circleElement = document.createElement("div");
  circleElement.classList.add("cool-circle");
  circleElement.style.top = event.clientY + "px";
  circleElement.style.left = event.clientX + "px";

  canvaElement.appendChild(circleElement);

  if (count >= 10) {
    canvaElement.removeEventListener("click", whenUserClicks);
  }
}

// remove event listener -> remove the element that holds the event
// element.remove();
// element.removeEventListener();

// modal
// the close modal ( x ) function when modal is open
// if not, remove event listener
