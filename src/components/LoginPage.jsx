import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importación para navegación
import { useAuth } from "../context/AuthContext"; // Importación del contexto de autenticación
import axios from "../services/api";
import "bootstrap/dist/css/bootstrap.min.css"; 

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Hook para redirigir
  const { login } = useAuth(); // Método para guardar datos del usuario en el contexto

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("/login", { username, password });
      const { token } = response.data;

      localStorage.setItem("authToken", token); // Guardar el token en localStorage

      // Simulación de obtención de datos de usuario y roles
      const userData = { username, roles: ["ROLE_ADMIN"] }; // Datos simulados

      login(userData); // Guardar usuario en el contexto
      
      // Redirigir según roles
      if (userData.roles.includes("ROLE_ADMIN")) {
        navigate("/admin/dashboard");
      } else if (userData.roles.includes("ROLE_USER")) {
        navigate("/user/home");
      } else {
        navigate("/"); // Ruta por defecto
      }
    } catch (err) {
      setError("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow-lg" style={{ width: "400px", borderRadius: "20px" }}>
        <div className="text-center">
          <img
            src="../public/images/vite.svg" // Imagen simulada, cámbiala por la tuya
            alt="Logo"
            className="img-fluid mb-4"
            style={{ borderRadius: "50%" }}
          />
        </div>
        <h3 className="text-center mb-4 text-primary">Iniciar Sesión</h3>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Nombre de Usuario
            </label>
            <input
              type="text"
              id="username"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Ingresa tu nombre de usuario"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Ingresa tu contraseña"
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 py-2">
            Iniciar Sesión
          </button>
        </form>
        {error && <p className="text-danger text-center mt-3">{error}</p>}
      </div>
    </div>
  );
}

export default LoginPage;
