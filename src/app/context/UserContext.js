"use client";

import { createContext, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export const UserContext = createContext({});

export function UserProvider({ children }) {
  const [loggedInUser, setLoggedInUser] = useState({});
  const router = useRouter();

  useEffect(() => {
    const savedUserStr = localStorage.getItem("user") || "{}";
    try {
      const savedUser = JSON.parse(savedUserStr);
      setLoggedInUser(savedUser);
    } catch (error) {
      console.error("Error parsing JSON:", error);
      setLoggedInUser({});
    }
  }, []);

  const pathname = usePathname();

  useEffect(() => {
    if (Object.keys(loggedInUser).length === 0) {
      router.push("/");
    }
    if (Object.keys(loggedInUser).length > 0) {
      if (pathname === "/") router.push(`/home`);
      else router.push(`${pathname}`);
    }
  }, [loggedInUser, router]);

  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      {children}
    </UserContext.Provider>
  );
}
