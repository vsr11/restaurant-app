import useFetchGeneric from "../../hooks/useFetchGeneric.js";
import AuthContext from "../../contexts/AuthContext.js";
import { useContext, useEffect, useState } from "react";
import { SERVER_URL, AUTH_COOKIE_NAME } from "../../constants.js";
import { form2object, isEmpty } from "restaurant-app-common";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [login, setLogin] = useState({});
  const ac = useContext(AuthContext);
  const navigate = useNavigate();

  const [d] = useFetchGeneric(`${SERVER_URL}/auth/login`, login);

  function onSubmitHandler(e) {
    e.preventDefault();
    const data = form2object(new FormData(e.target));
    setLogin(data);
  }

  useEffect(() => {
    if (!isEmpty(ac?.get())) {
      navigate("/");
    }

    if (d?.ok) {
      const { name, email } = d?.data;
      const userData = JSON.stringify({ name, email });
      ac.set(userData);
      localStorage.setItem(AUTH_COOKIE_NAME, userData);
    }
  }, [d, c, navigate]);

  return (
    <>
      <h1>Login</h1>
      <form method="POST" onSubmit={onSubmitHandler}>
        <div>
          <label>
            E-mail:
            <input type="text" name="email" />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input type="password" name="password" />
          </label>
        </div>
        <input type="submit" value="Login" />
      </form>
    </>
  );
}
