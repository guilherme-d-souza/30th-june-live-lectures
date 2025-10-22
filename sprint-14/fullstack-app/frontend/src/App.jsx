import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import ProfilePage from "./pages/Profile";
import ProtectedRoute from "./pages/routes";
import Header from "./components/Header";
import NotFoundPage from "./pages/NotFound";
import LogoutPage from "./pages/Logout";
import { LoggedInContext } from "./context/loggedInContext";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <LoggedInContext value={{ isLoggedIn, setLoggedIn }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/login" Component={LoginPage} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
          {/* IS LOGOUT PROTECTED? YES */}
          <Route
            path="/logout"
            element={
              <ProtectedRoute>
                <LogoutPage />
              </ProtectedRoute>
            }
          />
          {/* ALWAYS ON THE LAST PLACE - 404 NOT FOUND PAGE */}
          <Route path="*" Component={NotFoundPage} />
        </Routes>
      </BrowserRouter>
    </LoggedInContext>
  );
}

export default App;
