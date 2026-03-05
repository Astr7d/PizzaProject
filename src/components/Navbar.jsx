import { Link } from "react-router-dom";

const Navbar = () => {
  const total = 0;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <div className="container-fluid">

        {/* Logo / Home */}
        <Link className="navbar-brand" to="/">
          🍕 Pizzería Mamma Mia!
        </Link>

        {/* Menú */}
        <div className="collapse navbar-collapse show">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <Link className="btn btn-outline-light me-2" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="btn btn-outline-light me-2" to="/login">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link className="btn btn-outline-light me-2" to="/register">
                Register
              </Link>
            </li>

            <li className="nav-item">
              <Link className="btn btn-outline-light me-2" to="/profile">
                Profile
              </Link>
            </li>
          </ul>

          {/* Botón del carrito */}
          <Link to="/cart" className="btn btn-outline-primary">
            🛒 Total: ${total}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;