import router from "./routes.js";

import { RouterProvider } from "react-router-dom";
import { ErrorProvider } from "./contexts/ErrorContext.js";
import { AuthProvider } from "./contexts/AuthContext.js";

import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

export default function App() {
  return (
    <div className="App">
      <AuthProvider>
        <ErrorProvider>
          <Header />
          <RouterProvider router={router} />
          <Footer />
        </ErrorProvider>
      </AuthProvider>
    </div>
  );
}
