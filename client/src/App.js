import { RouterProvider } from "react-router-dom";
import router from "./routes.js";
import { ErrorProvider } from "./contexts/ErrorContext.js";

import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

export default function App() {
  return (
    <div className="App">
      <ErrorProvider>
        <Header />
        <RouterProvider router={router} />
      </ErrorProvider>
      <Footer />
    </div>
  );
}
