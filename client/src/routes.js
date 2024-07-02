import { createBrowserRouter } from "react-router-dom";
import Main from "./components/Main.js";
import Register from "./components/auth/Register.js";
import Login from "./components/auth/Login.js";
import NotFound from "./components/NotFound.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
