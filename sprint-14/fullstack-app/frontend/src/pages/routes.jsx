import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = false;

  if (!token) {
    return <Navigate to="/login"></Navigate>;
  }

  return children;
};

export default ProtectedRoute;
