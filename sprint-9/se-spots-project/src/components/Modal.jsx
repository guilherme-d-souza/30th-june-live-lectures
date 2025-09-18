import "../blocks/modal.css";

function Modal({ isOpen, closeModal }) {
  // const className = ["modal"];

  // if (isOpen) {
  //   className.push("modal_is-open");
  // }

  // return (
  //   <div className={className.join(" ")}>

  return (
    <div className={`modal ${isOpen ? "modal_is-open" : ""}`}>
      <div className="modal__container">
        THIS IS MY MODAL!
        <button
          className="modal__close-button"
          type="button"
          onClick={closeModal}
        >
          X
        </button>
      </div>
    </div>
  );
}

export default Modal;
