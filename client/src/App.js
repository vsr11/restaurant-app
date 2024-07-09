import { RouterProvider } from "react-router-dom";
import router from "./routes.js";
import { ErrorProvider } from "./contexts/ErrorContext.js";
import { AuthProvider } from "./contexts/AuthContext.js";

import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

export default function App() {
  return (
    <div className="App">
      <ErrorProvider>
        <AuthProvider>
          <Header />
          <RouterProvider router={router} />
          <Footer />
        </AuthProvider>
      </ErrorProvider>
    </div>
  );
}
