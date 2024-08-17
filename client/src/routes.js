import { createBrowserRouter } from "react-router-dom";
import Main from "./components/Main.js";
import Register from "./components/auth/Register.js";
import Login from "./components/auth/Login.js";
import Logout from "./components/auth/Logout.js";
import NotFound from "./components/NotFound.js";
import Search from "./components/Search.js";
import Category from "./components/Category.js";

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
      {
        path: "logout",
        element: <Logout />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "category/:cat?",
        element: <Category />,
      },
    ],
  },
]);

export default router;
