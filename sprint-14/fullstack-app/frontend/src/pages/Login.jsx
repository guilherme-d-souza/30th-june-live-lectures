import "./Login.css";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = async (formData) => {
    const email = formData.get("email");
    const password = formData.get("password");
    const token = await api.login({ email, password });
    if (token) {
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
