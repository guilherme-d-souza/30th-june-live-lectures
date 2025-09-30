import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  function handleLogin() {
    navigate("/");
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input type="text" name="email" placeholder="E-mail" />
        <input type="password" name="password" placeholder="Password" />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}
