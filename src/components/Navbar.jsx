import React from "react"; // Import necesario para componentes de React
import { useAuth } from "../context/AuthContext"; // Ajusta la ruta según la ubicación de tu AuthContext

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav>
      {user ? (
        <>
          <span>Bienvenido, {user.username}</span>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <a href="/login">Login</a>
      )}
    </nav>
  );
};

export default Navbar;  

