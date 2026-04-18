import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const user = useSelector((store) => store.user?.data);

  if (user) {
    if (user.role === "admin") {
      return <Navigate to="/adminDashbaord" replace />;
    }
    if (user.role === "user") {
      return <Navigate to="/userDashboard" replace />;
    }
  }

  return children;
};

export default PublicRoute;