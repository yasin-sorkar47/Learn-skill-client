import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import LoaderPage from "../pages/LoaderPage";

export default function PrivateRoutes({ children }) {
  const { user, loader } = useAuth();

  if (loader) {
    return <LoaderPage />;
  }

  if (user) {
    return children;
  }
  return <Navigate to={"/login"} />;
}
