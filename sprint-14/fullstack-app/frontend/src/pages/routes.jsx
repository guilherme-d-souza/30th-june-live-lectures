import { Navigate } from "react-router-dom";
import { getToken } from "../utils/storage";
import api from "../services/api";
import { useState } from "react";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  async function checkToken() {
    const token = getToken();
    // if the token is not valid?
    // right now, im only validating if token is there in the localStorage
    const isValid = await api.isValidToken(token);
    setIsLoggedIn(isValid);
    setLoading(false);
  }

  useEffect(() => {
    checkToken();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (!isLoggedIn) {
    return <Navigate to="/"></Navigate>;
  }

  return children;
};

export default ProtectedRoute;
