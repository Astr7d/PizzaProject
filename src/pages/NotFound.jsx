import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container text-center my-5">
      <h1 className="display-1 fw-bold">404</h1>
      <p className="lead">Ups... la página que buscas no existe.</p>

      <img
        src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
        alt="Not Found"
        style={{ width: "180px", margin: "20px 0" }}
      />

      <p className="mb-4">Pero no te preocupes, puedes volver al inicio.</p>

      <Link to="/" className="btn btn-primary">
        Volver al Home
      </Link>
    </div>
  );
};

export default NotFound;