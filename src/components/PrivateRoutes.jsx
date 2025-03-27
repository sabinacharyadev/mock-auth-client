import { useSelector } from "react-redux";
import { Navigate } from "react-router";

const PrivateRoutes = ({ children }) => {
  const { user } = useSelector((state) => state.users);

  if (!user._id) return <Navigate to="/" />;
  return children;
};

export default PrivateRoutes;
