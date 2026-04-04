import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // Estados reales
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [email, setEmail] = useState(localStorage.getItem("email") || null);

  // LOGIN
  const login = async (email, password) => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Error al iniciar sesión");

      setToken(data.token);
      setEmail(data.email);

      localStorage.setItem("token", data.token);
      localStorage.setItem("email", data.email);

      return { ok: true };
    } catch (error) {
      return { ok: false, error: error.message };
    }
  };

  // REGISTER
  const register = async (email, password) => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Error al registrarse");

      setToken(data.token);
      setEmail(data.email);

      localStorage.setItem("token", data.token);
      localStorage.setItem("email", data.email);

      return { ok: true };
    } catch (error) {
      return { ok: false, error: error.message };
    }
  };

  // LOGOUT (Requerimiento 2)
  const logout = () => {
    setToken(null);
    setEmail(null);
    localStorage.removeItem("token");
    localStorage.removeItem("email");
  };

  // GET PROFILE (Requerimiento 3)
  const getProfile = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Error al obtener perfil");

      return { ok: true, data };
    } catch (error) {
      return { ok: false, error: error.message };
    }
  };

  return (
    <UserContext.Provider
      value={{
        token,
        email,
        login,
        register,
        logout,
        getProfile,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};