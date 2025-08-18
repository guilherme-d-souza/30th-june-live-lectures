// when the user clicks -> eventListener
// a button ->
//  -> how I select an element?
//   ->  using querySelector with id, class or tag
// a modal, thats hidden, should be visible
// -> CSS class

// a button ->
//  -> how I select an element?
//   ->  using querySelector with id, class or tag
const clickMeButton = document.querySelector(".modal__button");

// when the user clicks (button) -> eventListener
clickMeButton.addEventListener("click", function () {
  console.log("Button clicked!");
  // when button was clicked
  // add a class that shows the modal background and the modal

  // block__element-modifier
  // modal-is_open
  const modalBackground = document.querySelector(".modal__background");
  modalBackground.classList.add("modal__background-visible");

  const modalPost = document.querySelector(".modal-post");
  console.log(modalPost);
  // element.classList.add("class name")
  modalPost.classList.add("modal-visible");
});

// when the user click to close the modal
// in a button
// the modal should be hidden again

// const buttonCloseModal = document.getElementById("close");
// console.log(buttonCloseModal);

// // when someone click the close button in the modal
// // make the modal and the background disappear
// buttonCloseModal.addEventListener("click", function () {
//   // remove the modal background
//   const modalBackground = document.getElementsByClassName("modal__background");
//   modalBackground[0].classList.remove("modal__background-visible");
//   // remove the modal
//   const modalPost = document.querySelector(".modal-post");
//   modalPost.classList.remove("modal-visible");
// });
