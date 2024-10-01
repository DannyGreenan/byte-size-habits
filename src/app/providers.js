"use client";

import { createContext } from "react";

export const UserContext = createContext();

export function Providers({ children }) {
  return <UserContext.Provider value={1}>{children}</UserContext.Provider>;
}
