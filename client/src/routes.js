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
import AddMenuItem from "./components/admin/menu/AddMenuItem.js";
import EditMenuItem from "./components/admin/menu/EditMenuItem.js";
import DeleteMenuItem from "./components/admin/menu/DeleteMenuItem.js";
import ViewUser from "./components/admin/users/ViewUser.js";

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
      {
        path: "admin",
        children: [
          {
            path: "menu",
            children: [
              { path: "add", element: <AddMenuItem /> },
              { path: "edit/:id?", element: <EditMenuItem /> },
              { path: "delete/:id?", element: <DeleteMenuItem /> },
            ],
          },
          {
            path: "user",
            children: [{ index: true, element: <ViewUser /> }],
          },
        ],
      },
    ],
  },
]);

export default router;
