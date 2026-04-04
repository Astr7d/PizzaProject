import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Profile = () => {
  const { email, getProfile, logout } = useContext(UserContext);
  const [profileEmail, setProfileEmail] = useState(email);

  useEffect(() => {
    const fetchProfile = async () => {
      const res = await getProfile();
      if (res.ok) {
        setProfileEmail(res.data.email);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="container my-5">
      <h1 className="mb-4">Perfil del Usuario</h1>

      <div className="card p-4 shadow">
        <h4>Email:</h4>
        <p>{profileEmail}</p>

        <button className="btn btn-primary mt-3" onClick={logout}>
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