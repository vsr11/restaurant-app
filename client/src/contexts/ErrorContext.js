import { createContext, useState } from "react";
const ErrorContext = createContext();

export const ErrorProvider = ({ children }) => {
  const [message, setMessage] = useState("");

  return (
    <ErrorContext.Provider value={{ message, setMessage }}>
      {children}
    </ErrorContext.Provider>
  );
};

export default ErrorContext;
