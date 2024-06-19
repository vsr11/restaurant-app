import { createBrowserRouter } from "react-router-dom";
import Main from "./components/Main.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
]);

export default router;
