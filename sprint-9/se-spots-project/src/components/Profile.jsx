import "../blocks/profile.css";
import pencilSvg from "../assets/pencil.svg";

// three or lesser props, use destructuring
function Profile({ avatar, name, description, openModal }) {
  return (
    <div className="profile">
      <img src={avatar} alt="Avatar" />
      <div className="profile__data">
        <div className="profile__information">
          <h1>{name}</h1>
          <h3>{description}</h3>
        </div>
        <button type="button" className="profile__button" onClick={openModal}>
          <img src={pencilSvg} alt="Pencil icon" />
          <span>Edit Profile</span>
        </button>
      </div>
    </div>
  );
}

export default Profile;
