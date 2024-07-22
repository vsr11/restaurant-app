import router from "./routes.js";

import { RouterProvider } from "react-router-dom";
import { ErrorProvider } from "./contexts/ErrorContext.js";
import { AuthProvider } from "./contexts/AuthContext.js";

export default function App() {
  return (
    <div className="App">
      <AuthProvider>
        <ErrorProvider>
          <RouterProvider router={router}></RouterProvider>
        </ErrorProvider>
      </AuthProvider>
    </div>
  );
}
