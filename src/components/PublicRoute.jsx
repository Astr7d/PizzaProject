import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const PublicRoute = ({ children }) => {
  const { token } = useContext(UserContext);

  // Si ya hay token → redirigir al home
  if (token) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PublicRoute;