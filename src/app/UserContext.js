"use client";

import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export const UserContext = createContext({});

export function UserProvider({ children }) {
  const [newUser, setNewUser] = useState({});
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted && Object.keys(newUser).length === 0) {
      router.push("/");
    }
  }, [newUser, router, isMounted]);

  if (!isMounted) {
    return null;
  }

  return (
    <UserContext.Provider value={{ newUser, setNewUser }}>
      {children}
    </UserContext.Provider>
  );
}
