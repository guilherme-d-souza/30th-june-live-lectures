import React, { useContext } from "react";
import UserContext from "../../providers/User/UserContext";

export default function Profile() {
  // in useContext -> variable that is storing the createContext
  const userContextValues = useContext(UserContext);
  return (
    <div>
      <h1>{userContextValues.name}</h1>
      <img src={userContextValues.avatar} alt="Teacher pciture" width="50" />
    </div>
  );
}
