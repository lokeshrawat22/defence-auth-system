import { useAuth } from "../auth/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {

  const { user, loading } = useAuth();

  if (loading) return <h2>Checking Navy clearance...</h2>;

  if (!user) {
    window.location.href = "http://localhost:5173";
    return null;
  }

  if (user.organisation?.toLowerCase() !== "navy") {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};

export default ProtectedRoute;
