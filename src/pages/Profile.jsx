import { Link } from "react-router-dom";

const Profile = () => {
  const email = "ejemplo@ejemplo.com";

  const handleLogout = () => {
    alert("Sesión cerrada (simulado)");
  };

  return (
    <div className="container my-5">
      <h1 className="mb-4">Perfil del Usuario</h1>

      <div className="card p-4 shadow">
        <h4>Email:</h4>
        <p>{email}</p>

        <button className="btn btn-primary mt-3" onClick={handleLogout}>
          Cerrar sesión
        </button>

        <Link to="/" className="btn btn-link mt-3">
          Volver al Home
        </Link>
      </div>
    </div>
  );
};

export default Profile;