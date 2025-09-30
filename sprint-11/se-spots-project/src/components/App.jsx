import "normalize.css";
import "../blocks/App.css";
import { useState, useEffect } from "react";
import defaultAvatar from "../assets/default_avatar.png";
import Header from "./Header";
import Profile from "./Profile";
import Modal from "./Modal";
import { getUserInfo } from "../services/TripleTenAPI";
import EditProfileModal from "./EditProfileModal";
import Cards from "./Cards";

function App() {
  //     variable, special function -> triggers the react render
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [avatar, setAvatar] = useState(defaultAvatar);
  const [name, setName] = useState("Guilherme");
  const [description, setDescription] = useState("Software Engineer");

  async function fetchUser() {
    const user = await getUserInfo();
    setName(user.name);
    setDescription(user.about);
    setAvatar(user.avatar);
  }

  // useEffect
  useEffect(() => {
    fetchUser();
  }, []);

  const handleOpenEditProfileModal = () => {
    setModalIsOpen(true);
  };

  return (
    <>
      <Header />
      <main className="main">
        <Profile
          avatar={avatar}
          name={name}
          description={description}
          openModal={handleOpenEditProfileModal}
        />
        <Cards />
      </main>
      <EditProfileModal
        isOpen={modalIsOpen}
        afterSubmit={() => fetchUser()}
        closeModal={() => setModalIsOpen(false)}
      />
      <Modal isOpen={false}>
        <h1>Hidden modal</h1>
      </Modal>
      {/* <Footer /> */}
    </>
  );
}

export default App;
