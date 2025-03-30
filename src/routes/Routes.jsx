import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
const App = () => {
  return (
    <Routes>
      {" "}
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute roles={["ROLE_ADMIN"]}>
            {" "}
            <AdminDashboard />{" "}
          </ProtectedRoute>
        }
      />{" "}
      <Route
        path="/user/home"
        element={
          <ProtectedRoute roles={["ROLE_USER"]}>
            {" "}
            <UserHome />{" "}
          </ProtectedRoute>
        }
      />{" "}
      <Route path="/login" element={<Login />} />{" "}
    </Routes>
  );
};
