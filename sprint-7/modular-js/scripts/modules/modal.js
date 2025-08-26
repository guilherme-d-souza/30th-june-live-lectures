const modalShowClass = "modal_is-visible";

// named export
// const module = {
//   openModal: openModal,
//   closeModal: closeModal,
// };
export function openModal(element) {
  console.log("openModal");
  element.classList.add(modalShowClass);
}

export function closeModal(element) {
  console.log("closeModal");
  element.classList.remove(modalShowClass);
}

// export default modalShowClass;
