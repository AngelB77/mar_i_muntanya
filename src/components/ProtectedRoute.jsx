import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
const ProtectedRoute = ({ children, roles }) => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" />;
  }
  const hasRole = roles.some((role) => user.roles.includes(role));
  if (!hasRole) {
    return <Navigate to="/unauthorized" />;
  }
  return children;
};
export default ProtectedRoute;
