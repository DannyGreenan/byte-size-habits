"use client";

import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export const UserContext = createContext({});

export function UserProvider({ children }) {
  const [loggedInUser, setLoggedInUser] = useState({});
  const router = useRouter();

  useEffect(() => {
    const savedUserStr = localStorage.user || `{}`;
    const savedUser = JSON.parse(savedUserStr);
    setLoggedInUser(savedUser);
  }, []);

  useEffect(() => {
    if (Object.keys(loggedInUser).length === 0) {
      router.push("/");
    }
    if (Object.keys(loggedInUser).length > 0) {
      router.push("/home");
    }
  }, [loggedInUser, router]);

  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      {children}
    </UserContext.Provider>
  );
}
