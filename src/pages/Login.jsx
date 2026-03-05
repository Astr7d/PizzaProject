// src/components/Login.jsx
import { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [submitMessage, setSubmitMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }

    if (submitMessage) setSubmitMessage(null);
  };

  const resetForm = () => {
    setFormData({
      email: '',
      password: '',
    });
    setErrors({});
    // El tiempo limitado
    setTimeout(() => setSubmitMessage(null), 4000);
  };

  const validateForm = () => {
    const newErrors = {};
    // VALIDACION
    if (!formData.email.trim()) {
      newErrors.email = 'El email es obligatorio';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Formato de email inválido';
    }

    if (!formData.password) {
      newErrors.password = 'La contraseña es obligatoria';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Mínimo 6 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);
    setSubmitMessage(null);

    // Simulación de login
    setTimeout(() => {
      const isSuccess = formData.email === 'test@ejemplo.com' && formData.password === '123456';

      if (isSuccess) {
        setSubmitMessage({ type: 'success', text: '¡Inicio de sesión exitoso!' });
        resetForm();                  
      } else {
        setSubmitMessage({
          type: 'error',
          text: 'Email o contraseña incorrectos',
        });
        
      }

      setIsLoading(false);
    }, 1200);
  };

  return (
    <div className="formulario">
      <h2>Iniciar Sesión</h2>

      {submitMessage && (
        <div
          style={{
            padding: '12px',
            marginBottom: '15px',
            borderRadius: '6px',
            textAlign: 'center',
            backgroundColor: submitMessage.type === 'success' ? '#d4edda' : '#f8d7da',
            color: submitMessage.type === 'success' ? '#155724' : '#721c24',
            border: `1px solid ${submitMessage.type === 'success' ? '#c3e6cb' : '#f5c6cb'}`,
          }}
        >
          {submitMessage.text}
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className={`form-control ${errors.email ? 'error-input' : ''}`}
            value={formData.email}
            onChange={handleChange}
            placeholder="ejemplo@correo.com"
            disabled={isLoading}
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            className={`form-control ${errors.password ? 'error-input' : ''}`}
            value={formData.password}
            onChange={handleChange}
            placeholder="Mínimo 6 caracteres"
            disabled={isLoading}
          />
          {errors.password && <div className="error">{errors.password}</div>}
        </div>

        <button
          type="submit"
          className="form-control"
          style={{
            backgroundColor: '#007bff',
            color: 'white',
            fontWeight: 600,
            cursor: isLoading ? 'not-allowed' : 'pointer',
            opacity: isLoading ? 0.7 : 1,
          }}
          disabled={isLoading}
        >
          {isLoading ? 'Iniciando...' : 'Iniciar Sesión'}
        </button>
      </form>

      <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '14px' }}>
        ¿No tienes cuenta? <a href="/registro">Regístrate</a>
      </p>
    </div>
  );
};

export default Login;