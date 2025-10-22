import "./Header.css";
import logo from "../assets/logo.svg";
import { useContext } from "react";
import { LoggedInContext } from "../context/loggedInContext";

export default function Header() {
  const { isLoggedIn } = useContext(LoggedInContext);

  return (
    <div className="header">
      <nav className="header__nav">
        <a href="/">
          <img src={logo} alt="Logo from WTWR" />
        </a>
        <ul className="header-options">
          {isLoggedIn ? (
            <>
              <li>
                <a href="/profile">Go to Profile</a>
              </li>
              <li>
                <a href="/logout">Logout</a>
              </li>
            </>
          ) : (
            <>
              <li>
                <a href="/login">Signin</a>
              </li>
              <li>
                <a href="/signup">Signup</a>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}
