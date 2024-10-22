"use client";

import { createContext, useContext, useState } from "react";

export const EnergyContext = createContext();

export const EnergyProvider = ({ children }) => {
  const [energy, setEnergy] = useState(null);

  return (
    <EnergyContext.Provider value={{ energy, setEnergy }}>
      {children}
    </EnergyContext.Provider>
  );
};
