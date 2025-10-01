import React, { useState, useEffect } from "react";
import { getUserInfo } from "../services/TripleTenAPI";
import defaultAvatar from "../assets/default_avatar.png";

// const data
export default function useUser() {
  // 1. states
  const [avatar, setAvatar] = useState(defaultAvatar);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  async function fetchUser() {
    const user = await getUserInfo();
    setName(user.name);
    setDescription(user.about);
    setAvatar(user.avatar);
  }

  // 2. useEffect
  useEffect(() => {
    fetchUser();
  }, []);

  // 3. main idea - return the data
  return { avatar, description, name };
}
