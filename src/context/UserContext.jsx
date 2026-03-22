import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // token simulado
  const [token, setToken] = useState(true); 
  // ↑ Aquí decides si el usuario está logueado o no

  // método logout
  const logout = () => {
    setToken(false); 
    // ↑ Cuando llamas a logout, el usuario queda deslogueado
  };

  return (
    <UserContext.Provider value={{ token, logout }}>
      {children}
    </UserContext.Provider>
  );
};