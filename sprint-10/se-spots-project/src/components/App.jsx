import "normalize.css";
import "../blocks/App.css";
import defaultAvatar from "../assets/default_avatar.png";
import { useState } from "react";
import Header from "./Header";
import Profile from "./Profile";
import Modal from "./Modal";

function App() {
  //     variable, special function -> triggers the react render
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [avatar, setAvatar] = useState(defaultAvatar);
  const [name, setName] = useState("Placeholder Name");
  const [description, setDescription] = useState("Placeholder Description");

  const handleOpenEditProfileModal = () => {
    setModalIsOpen(true);
  };

  return (
    <>
      <Header />
      <main>
        <Profile
          avatar={avatar}
          name={name}
          description={description}
          openModal={handleOpenEditProfileModal}
        />
        {/* <Cards /> */}
      </main>
      <Modal isOpen={modalIsOpen}>
        THIS IS MY MODAL!
        <button
          className="modal__close-button"
          type="button"
          onClick={() => setModalIsOpen(false)}
        >
          X
        </button>
      </Modal>
      <Modal isOpen={false}>
        <h1>Hidden modal</h1>
      </Modal>
      {/* <Footer /> */}
    </>
  );
}

export default App;
