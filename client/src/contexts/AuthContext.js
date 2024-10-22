import { isEmpty } from "restaurant-app-common";
import { createContext, useEffect, useState } from "react";
import { AUTH_COOKIE_NAME } from "../constants";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});

  useEffect(() => {
    const data = localStorage.getItem(AUTH_COOKIE_NAME);
    if (data) {
      set(JSON.parse(data));
    } else {
      reset();
    }
  }, []);

  function set(data) {
    setAuth(data);
  }

  function get() {
    if (!isEmpty(auth)) {
      return auth;
    }
  }

  function reset() {
    setAuth({});
    localStorage.removeItem(AUTH_COOKIE_NAME);
  }

  const values = {
    set,
    get,
    reset,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContext;
