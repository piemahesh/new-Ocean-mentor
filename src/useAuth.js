import { useState } from "react";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    // Perform authentication logic (e.g., check credentials, set tokens)
    // For simplicity, we'll set isAuthenticated to true directly
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Perform logout logic (e.g., clear tokens, reset state)
    setIsAuthenticated(false);
  };

  const checkAuth = () => {
    // Check the authentication status (e.g., verify tokens, check session)
    return isAuthenticated;
  };

  return { isAuthenticated, login, logout, checkAuth };
};

export default useAuth;
