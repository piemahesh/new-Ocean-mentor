import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
  const tokenn = localStorage.getItem("tokenId");
  let auth = { token: tokenn };
  // console.log(auth);
  return auth.token ? <Outlet /> : <Navigate to="/" />;
};
export default ProtectedRoutes;
