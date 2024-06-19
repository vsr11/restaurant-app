import { createBrowserRouter } from "react-router-dom";
import Main from "./components/Main.js";
import NotFound from "./components/NotFound.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFound />,
  },
]);

export default router;
