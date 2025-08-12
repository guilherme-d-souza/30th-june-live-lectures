const modalButton = document.querySelector(".modal__button");

modalButton.addEventListener("click", function () {
  console.log("Button clicked!");
  // when button was clicked
  // add a class that shows the modal background and the modal
  const modalBackground = document.getElementsByClassName("modal__background");
  console.log(modalBackground[0]);

  // ADD CLASS
  modalBackground[0].classList.add("modal__background-visible");

  const modalPost = document.querySelector(".modal-post");
  console.log(modalPost);
  // element.classList.add("class name")
  modalPost.classList.add("modal-visible");
});

const buttonCloseModal = document.getElementById("close");
console.log(buttonCloseModal);

// when someone click the close button in the modal
// make the modal and the background disappear
buttonCloseModal.addEventListener("click", function () {
  // remove the modal background
  const modalBackground = document.getElementsByClassName("modal__background");
  modalBackground[0].classList.remove("modal__background-visible");
  // remove the modal
  const modalPost = document.querySelector(".modal-post");
  modalPost.classList.remove("modal-visible");
});
