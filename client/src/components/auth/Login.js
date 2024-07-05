import { useState } from "react";
import useFetchGeneric from "../../hooks/useFetchGeneric.js";
import { SERVER_URL } from "../../constants.js";
import { form2object } from "../../utils.js";

export default function Login() {
  const [login, setLogin] = useState({});

  useFetchGeneric(`${SERVER_URL}/auth/login`, login);

  function onSubmitHandler(e) {
    e.preventDefault();
    const data = form2object(new FormData(e.target));
    setLogin(data);
  }

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
