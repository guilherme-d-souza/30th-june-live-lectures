import "normalize.css";
import "../blocks/App.css";
import { useState } from "react";
import Profile from "../components/Profile";
import Modal from "../components/Modal";
import EditProfileModal from "../components/EditProfileModal";
import Cards from "../components/Cards";
import useUser from "../hooks/useUser";

function Home() {
  //     variable, special function -> triggers the react render
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { user, fetchUser } = useUser();

  const handleOpenEditProfileModal = () => {
    setModalIsOpen(true);
  };

  return (
    <>
      <Profile
        avatar={user.avatar}
        name={user.name}
        description={user.description}
        openModal={handleOpenEditProfileModal}
      />
      <Cards />
      <EditProfileModal
        isOpen={modalIsOpen}
        afterSubmit={() => fetchUser()}
        closeModal={() => setModalIsOpen(false)}
      />
      <Modal isOpen={false}>
        <h1>Hidden modal</h1>
      </Modal>
    </>
  );
}

export default Home;
