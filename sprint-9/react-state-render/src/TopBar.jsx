import MenuLink from "./MenuLink";
import Image from "./Image";
import "./TopBar.css";

function TopBar() {
  return (
    <div className="topbar-gray">
      <div>
        <Image
          src="https://images.unsplash.com/photo-1706571717924-934a8a7c2aa7?q=80&w=1478&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Jordan Logo"
        />
        <Image
          src="https://images.unsplash.com/photo-1533558527255-407147f3ae72?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Converse Logo"
        />
      </div>
      <nav className="nav-user">
        <ul className="nav-user__list">
          <MenuLink description="Find a Store" />
          <MenuLink description="Help" />
          <MenuLink description="Join Us" />
          <MenuLink description="Sign In" />
        </ul>
      </nav>
    </div>
  );
}

export default TopBar;
