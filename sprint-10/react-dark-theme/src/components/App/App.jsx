import "./App.css";
import Profile from "../Profile/Profile";
import Form from "../Form/Form";
import UserProvider from "../../providers/User/UserProvider";

function App() {
  return (
    <>
      <h1>React Form</h1>
      <UserProvider>
        <Profile />
        <Form />
      </UserProvider>
    </>
  );
}

export default App;
