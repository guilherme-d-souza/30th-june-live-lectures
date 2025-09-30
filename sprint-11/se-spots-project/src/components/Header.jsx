import "../blocks/header.css";
import logoSvg from "../assets/logo.svg";

function Header() {
  return (
    <header className="header">
      <img src={logoSvg} alt="Logo" />
      <h2 className="header__title">SPOTS</h2>
    </header>
  );
}

export default Header;
