import { Link } from "react-router-dom";
import Err from "./Err.js";

export default function Header() {
  return (
    <>
      <header>
        <h1>Header</h1>
        <nav>
          <ul>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
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
