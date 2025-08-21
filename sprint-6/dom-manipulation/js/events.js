// target
// add a function to represent what happens when the user
// makes an action -> (click, onmouseove, ondrag, ondrop)

const banner = document.querySelector(".grocery__banner");
const button = document.querySelector("#alert-button");

function whenBannerIsClicked(event) {
  event.preventDefault();
  if (event.target.id === "alert-button") {
    alert("This is a cool alert!");
  } else {
    console.log(event.target);
  }
}

banner.addEventListener("click", whenBannerIsClicked);
button.addEventListener("click", () => {
  console.log("Button was clicked!");
});
