import React, { useState } from "react";
import UserContext from "./UserContext";

// 2. Create component
// Export default -> ONLY ONE IN THE WHOLE FILE
export default function UserProvider({ children }) {
  const [name, setName] = useState("Guilherme");
  const [avatar, _setAvatar] = useState(
    "https://media.istockphoto.com/id/1356636078/pt/foto/portrait-of-a-teacher-in-the-classroom.jpg?s=2048x2048&w=is&k=20&c=DHbtZDWcRDji8zMHM9PQfUPXfjsdThGC7bpPIw7OjrY="
  );
  return (
    // 3. Create the Provider Element
    <UserContext.Provider
      // 4. Add the variables and functions to the value
      value={{ name, setName, avatar }}
    >
      {children}
    </UserContext.Provider>
  );
}
