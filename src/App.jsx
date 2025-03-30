//import { useState } from "react";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import { AuthProvider } from "./context/AuthContext";
//import { BrowserRouter as Router } from "react-router-dom";
//import AdminDashboard from "./components/AdminDashboard"; // Ruta correcta del componente
//import UserHome from "./components/UserHome"; // Ruta correcta del componente
//import Unauthorized from "./components/Unauthorized"; // Página para usuarios no autorizados
import Navbar from "./components/Navbar";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar>
          <Routes>
            {/* Ruta para la página de inicio de sesión */}
            <Route path="/login" element={<LoginPage />} />

            {/* Ruta protegida para administradores */}
            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute roles={["ROLE_ADMIN"]}>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />

            {/* Ruta protegida para usuarios */}
            <Route
              path="/user/home"
              element={
                <ProtectedRoute roles={["ROLE_USER"]}>
                  <UserHome />
                </ProtectedRoute>
              }
            />

            {/* Ruta en caso de acceso no autorizado */}
            <Route path="/unauthorized" element={<Unauthorized />} />

            {/* Ruta por defecto */}
            <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
          </Routes>
        </Navbar>
      </Router>
    </AuthProvider>
  );
}

export default App;
