"use client";

import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export const UserContext = createContext({});

export function UserProvider({ children }) {
  const savedUserStr = localStorage.getItem("user");
  const savedUser = savedUserStr ? JSON.parse(savedUserStr) : {};
  const [loggedInUser, setLoggedInUser] = useState(savedUser);

  const router = useRouter();

  useEffect(() => {
    if (Object.keys(loggedInUser).length === 0) {
      router.push("/");
    }
  }, [loggedInUser, router]);

  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      {children}
    </UserContext.Provider>
  );
}
