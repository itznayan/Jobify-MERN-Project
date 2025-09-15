import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Context } from "../../main";

const ProtectedRoute = ({ children }) => {
  const { isAuthorized } = useContext(Context);

  if (!isAuthorized) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
