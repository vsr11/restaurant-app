import router from "./routes.js";
import ErrorBoundary from "./components/common/ErrorBoundary.js";
import { RouterProvider } from "react-router-dom";
import { ErrorProvider } from "./contexts/ErrorContext.js";
import { AuthProvider } from "./contexts/AuthContext.js";

export default function App() {
  return (
    <div className="App">
      <ErrorBoundary fallback={<h1>Something went wrong!</h1>}>
        <AuthProvider>
          <ErrorProvider>
            <RouterProvider router={router}></RouterProvider>
          </ErrorProvider>
        </AuthProvider>
      </ErrorBoundary>
    </div>
  );
}
