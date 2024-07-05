import { createContext, useState } from "react";
const ErrorContext = createContext();

export const ErrorProvider = ({ children }) => {
  const [message, setMessage] = useState("");

  const values = { message, setMessage };

  return (
    <ErrorContext.Provider value={values}>{children}</ErrorContext.Provider>
  );
};

export default ErrorContext;
