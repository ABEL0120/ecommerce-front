import { Navigate } from "react-router-dom";
import useAuthStore from "../../store/useAuthStore";

const UnprotectedRoute = ({ children }) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default UnprotectedRoute;
