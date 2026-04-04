// src/components/Register.jsx
import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const { register } = useContext(UserContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [errors, setErrors] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validateForm = () => {
    const newErrors = {};

    // Email
    if (!email.trim()) {
      newErrors.email = 'El email es obligatorio';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'El email no tiene un formato válido';
    }

    // Password
    if (!password.trim()) {
      newErrors.password = 'La contraseña es obligatoria';
    } else if (password.trim().length < 6) {
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
    }

    // Confirmar contraseña
    if (!confirmPassword.trim()) {
      newErrors.confirmPassword = 'Debes confirmar la contraseña';
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Las contraseñas no coinciden';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    setSuccessMessage('');
    setErrorMessage('');

    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // 🔥 REGISTRO REAL CON BACKEND
      const res = await register(email, password);

      if (res.ok) {
        setSuccessMessage('¡Registro exitoso!');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setErrors({ email: '', password: '', confirmPassword: '' });
        setSubmitted(false);

        setTimeout(() => setSuccessMessage(''), 4000);

        navigate('/'); // redirige al home
      } else {
        setErrorMessage(res.error || 'Error al registrarse');
      }
    }
  };

  return (
    <div className="register-container">
      <form className="formulario" onSubmit={handleSubmit}>
        <h3>Registro de Usuario</h3>

        {/* Mensaje de éxito */}
        {successMessage && (
          <div className="alert alert-success mt-3">
            {successMessage}
          </div>
        )}

        {/* Mensaje de error del backend */}
        {errorMessage && (
          <div className="alert alert-danger mt-3">
            {errorMessage}
          </div>
        )}

        {/* EMAIL */}
        <div className="form-group mb-3">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            className={`form-control ${submitted && errors.email ? 'is-invalid' : ''}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ejemplo@correo.com"
          />
          {submitted && errors.email && (
            <div className="invalid-feedback">{errors.email}</div>
          )}
        </div>

        {/* PASSWORD */}
        <div className="form-group mb-3">
          <label htmlFor="password">Contraseña</label>
          <input
            id="password"
            type="password"
            className={`form-control ${submitted && errors.password ? 'is-invalid' : ''}`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Mínimo 6 caracteres"
          />
          {submitted && errors.password && (
            <div className="invalid-feedback">{errors.password}</div>
          )}
        </div>

        {/* CONFIRM PASSWORD */}
        <div className="form-group mb-3">
          <label htmlFor="confirmPassword">Confirmar contraseña</label>
          <input
            id="confirmPassword"
            type="password"
            className={`form-control ${submitted && errors.confirmPassword ? 'is-invalid' : ''}`}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Repite la contraseña"
          />
          {submitted && errors.confirmPassword && (
            <div className="invalid-feedback">{errors.confirmPassword}</div>
          )}
        </div>

        <button 
          type="submit" 
          className="btn btn-primary mt-3 w-100"
        >
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default Register;