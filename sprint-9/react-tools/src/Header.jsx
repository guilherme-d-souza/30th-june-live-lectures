import "./Header.css";

function Header(props) {
  return (
    <header className="header">
      <div className="header__overlay">
        <p className="header__banner">{props.position}</p>
        <h1 className="header__title">{props.name}</h1>
      </div>
    </header>
  );
}

export default Header;
