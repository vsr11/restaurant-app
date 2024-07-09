import { createContext, useEffect, useState } from "react";
import { AUTH_COOKIE_NAME } from "../constants";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});

  useEffect(() => {
    const data = localStorage.getItem(AUTH_COOKIE_NAME);
    if (data) {
      setAuth(JSON.parse(data));
    }
  }, []);

  const values = {
    auth,
    setAuth,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContext;
