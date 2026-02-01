import React from 'react'

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
        <a className="navbar-brand" href="#">Pizzería Mamma Mia!</a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
        </button>


      <div className="d-flex gap-2">
        <button className="btn btn-outline-light">🍕 Home</button>
        {/*<button className="btn btn-outline-light">🔓 Profile</button>
        <button className="btn btn-outline-light">🔒 Logout</button>*/}
        <button className="btn btn-outline-light">🔐 Login</button>
        <button className="btn btn-outline-light">🔐 Register</button>
      </div>

        <button className="btn total-btn ms-auto">🛒 Total: ${total}</button>
      
    </nav>
  );
}

export default Navbar;