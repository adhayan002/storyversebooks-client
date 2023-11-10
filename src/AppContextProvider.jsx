import React, { createContext, useState } from "react";

export const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [search, setSearch] = useState(""); // You need to define the state and its setter function

  return (
    <AppContext.Provider value={{ search, setSearch }}>
      {children}
    </AppContext.Provider>
  );
}
