const modalButton = document.querySelector(".modal__button");

modalButton.addEventListener("click", function () {
  const modal = document.getElementById("modal-edit-profile");
  modal.classList.add("modal-is_openn");
});

function showModal(buttonElement, modalElement) {
  buttonElement.addEventListener("click", function () {
    modalElement.classList.add("modal-is_open");
  });
}

showModal(modalButton, modalPost);
