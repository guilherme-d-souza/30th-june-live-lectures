import "../blocks/profile.css";
import pencilSvg from "../assets/pencil.svg";

// three or lesser props, use destructuring
function Profile({ avatar, name, description, openModal }) {
  return (
    <section className="profile">
      <img className="profile__avatar" src={avatar} alt="Avatar" />
      <div className="profile__data">
        <div className="profile__information">
          <h1 className="profile__information_name">{name}</h1>
          <h3 className="profile__information_description">{description}</h3>
        </div>
        <button type="button" className="profile__button" onClick={openModal}>
          <img src={pencilSvg} alt="Pencil icon" />
          <span>Edit Profile</span>
        </button>
      </div>
    </section>
  );
}

export default Profile;
