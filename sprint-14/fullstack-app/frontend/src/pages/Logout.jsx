import { useContext, useEffect } from "react";
import { setToken } from "../utils/storage";
import { useNavigate } from "react-router-dom";
import { LoggedInContext } from "../context/loggedInContext";

function LogoutPage() {
  const navigate = useNavigate();
  const { setLoggedIn } = useContext(LoggedInContext);

  useEffect(() => {
    setToken("");
    setLoggedIn(false);
    navigate("/");
  }, []);

  return (
    <div>
      <h1>Logging out...</h1>
    </div>
  );
}

export default LogoutPage;
