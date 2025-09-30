import "../blocks/modal.css";

function Modal({ isOpen, children }) {
  // const className = ["modal"];

  // if (isOpen) {
  //   className.push("modal_is-open");
  // }

  // return (
  //   <div className={className.join(" ")}>

  return (
    <div className={`modal ${isOpen ? "modal_is-open" : ""}`}>
      <div className="modal__container">{children}</div>
    </div>
  );
}

export default Modal;
