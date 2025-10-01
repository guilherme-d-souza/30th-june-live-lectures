import "normalize.css";
import "../blocks/App.css";
import Header from "./Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Profile from "../pages/Profile";

// ENTRYPOINT FOR THE ROUTE
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/profile" Component={Profile}>
              {/* <Route path="create" Component={CreateProfile} /> */}
            </Route>
            {/* everything that wasn`t defined before,
                its NotFound
             */}
            <Route path="*" Component={NotFound} />
          </Routes>
        </main>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
