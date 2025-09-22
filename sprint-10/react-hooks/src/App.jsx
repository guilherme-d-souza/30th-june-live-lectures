import { useState, useEffect } from "react";
import "./App.css";
import FormError from "./FormError";

function App() {
  // useState is a hook
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  // useEffect -> also a hook
  // parameteres
  // first -> function trigger whenever any dependencies values changes
  // second -> array of dependencies
  // componentDidUpdate
  useEffect(() => {
    console.log("trigger by the useEffect");
    // Clean up the subscription
    return () => {};
  }, [name, surname]);

  return (
    <form className="form">
      <label htmlFor="name">Name *</label>
      <input
        id="name"
        name="name"
        type="text"
        value={name}
        onChange={handleNameChange}
      />
      {name.length < 3 && (
        <FormError description="The name should have more than 3 characters" />
      )}
      <label htmlFor="surname">Surname *</label>
      <input
        id="surname"
        name="surname"
        type="text"
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
      />
    </form>
  );
}

export default App;
