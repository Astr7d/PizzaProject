import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const ProtectedRoute = ({ children }) => {
  const { token } = useContext(UserContext);

  // Si NO hay token → redirigir a login
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Si hay token → mostrar la página protegida
  return children;
};

export default ProtectedRoute;