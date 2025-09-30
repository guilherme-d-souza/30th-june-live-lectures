import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import Achievements from "./pages/Achievements";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:userId/dashboard" element={<Dashboard />}>
          <Route path="achievements" element={<Achievements />} />
        </Route>
        <Route path="/login" element={<Login />} />
        {/* THE 404 / NOT FOUND ROUTE HAS TO BE THE LAST */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
