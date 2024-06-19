import { RouterProvider } from "react-router-dom";
import router from "./routes.js";

import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

export default function App() {
  return (
    <div className="App">
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}
