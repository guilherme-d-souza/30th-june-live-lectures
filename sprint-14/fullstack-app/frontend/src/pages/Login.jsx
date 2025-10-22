import "./Login.css";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { useContext } from "react";
import { LoggedInContext } from "../context/loggedInContext";

function LoginPage() {
  const navigate = useNavigate();
  const { setLoggedIn } = useContext(LoggedInContext);

  const handleLogin = async (formData) => {
    const email = formData.get("email");
    const password = formData.get("password");
    const token = await api.login({ email, password });
    if (token) {
      setLoggedIn(true);
      navigate("/profile");
    } else {
      alert("Try again!");
    }
  };

  return (
    <div>
      <h1>Login!</h1>
      <form action={handleLogin} className="login-form">
        <input
          name="email"
          type="email"
          placeholder="example@example.com"
          required
        />
        <input name="password" type="password" required />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default LoginPage;
