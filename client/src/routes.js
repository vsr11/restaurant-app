import { createBrowserRouter } from "react-router-dom";
import Main from "./components/Main.js";
import Register from "./components/auth/Register.js";
import Login from "./components/auth/Login.js";
import Logout from "./components/auth/Logout.js";
import NotFound from "./components/common/NotFound.js";
import Search from "./components/Search.js";
import Category from "./components/Category.js";
import Menu from "./components/Menu.js";
import View from "./components/View.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Menu />,
      },
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
      {
        path: "menu/view/:id?",
        element: <View />,
      },
    ],
  },
]);

export default router;
