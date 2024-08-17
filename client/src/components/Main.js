import { Outlet } from "react-router-dom";
import Header from "./common/Header.js";
import Footer from "./common/Footer.js";

export default function Main() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
