import { Link } from "react-router-dom";
import Err from "./Err.js";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext.js";
import "./Header.css";

export default function Header() {
  const ac = useContext(AuthContext);
  const isLoggedIn = ac?.get();

  return (
    <>
      <header>
        <h1>Header</h1>
        <nav>
          <ul>
            {(!isLoggedIn && (
              <>
                <li>
                  <Link to="/register">Register</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </>
            )) || (
              <li>
                <Link to="/logout">Logout</Link>
              </li>
            )}
            <li>
              <Link to="/search">Search</Link>
            </li>
          </ul>
        </nav>
        <Err />
      </header>
    </>
  );
}
