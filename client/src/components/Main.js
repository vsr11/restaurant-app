import { Outlet } from "react-router-dom";
import Header from "./Header.js";
import Footer from "./Footer.js";

export default function Main() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
