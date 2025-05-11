import { Navigate, Outlet } from "react-router-dom";

const isAuthenticated = true;

export const ProtectRoute = () => {
  return isAuthenticated ? <Outlet /> : <Navigate to="/auth/signin" />;
};
