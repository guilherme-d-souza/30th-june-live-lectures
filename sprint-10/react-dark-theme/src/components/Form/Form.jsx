import React, { useContext } from "react";
import UserContext from "../../providers/User/UserContext";

export default function Form() {
  const userContextValues = useContext(UserContext);

  function handleSubmit(event) {
    event.preventDefault();
    userContextValues.setName(event.target.elements[0].value);
  }

  function handleNameChange(event) {
    event.preventDefault();
    userContextValues.setName(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name *</label>
      <input
        type="text"
        name="name"
        value={userContextValues.name}
        onChange={handleNameChange}
      />
      {/* <button type="submit">Save</button> */}
    </form>
  );
}
