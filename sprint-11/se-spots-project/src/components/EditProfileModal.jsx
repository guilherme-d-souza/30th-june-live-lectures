import React, { useRef, useState } from "react";
import { updateUserInfo } from "../services/TripleTenAPI";
import Modal from "./Modal";

export default function EditProfileModal({ isOpen, closeModal, afterSubmit }) {
  const [buttonText, setButtonText] = useState("Save");
  const inputNameRef = useRef();

  async function handleSubmit(formData) {
    const name = inputNameRef.current.value;
    const description = formData.get("description");
    setButtonText("Saving...");
    const result = await updateUserInfo({ name, description });

    if (result === null) {
      alert("Error!!!");
    } else {
      setButtonText("Save");
      afterSubmit();
      closeModal();
    }
  }

  return (
    <Modal isOpen={isOpen}>
      <div className="modal__header">
        <h1 className="modal__title">Edit Profile</h1>
        <button
          className="modal__close-button"
          type="button"
          onClick={() => closeModal()}
        >
          X
        </button>
      </div>
      <form className="form" action={handleSubmit}>
        <input
          className="form__input"
          type="text"
          name="name"
          ref={inputNameRef}
        />
        <input className="form__input" type="text" name="description" />
        <input className="form__submit" type="submit" value={buttonText} />
      </form>
    </Modal>
  );
}
