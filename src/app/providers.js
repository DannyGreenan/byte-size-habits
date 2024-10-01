"use client";

import { createContext, useState } from "react";
import { fetchUser } from "./home/profile/profileAPI";

export const UserContext = createContext();

export function Providers({ children }) {
  const [currentUser, setCurrentUser] = useState("");
  const [topic, setTopic] = useState("");
  fetchUser(1, setCurrentUser, setTopic);
  return (
    <UserContext.Provider value={currentUser}>{children}</UserContext.Provider>
  );
}
