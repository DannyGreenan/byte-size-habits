"use client";

import { createContext, useState } from "react";
import { fetchUser } from "./models/profile.model";

export const UserContext = createContext();

export function Providers({ children }) {
  // const [currentUser, setCurrentUser] = useState("");
  // const [topic, setTopic] = useState("");
  // fetchUser(1, setCurrentUser, setTopic);
  const [newUser, setNewUser] = useState({});
  return (
    <UserContext.Provider value={{ newUser, setNewUser }}>
      {children}
    </UserContext.Provider>
  );
}
