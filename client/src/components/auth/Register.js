import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetchGeneric from "../../hooks/useFetchGeneric.js";
import { SERVER_URL } from "../../constants.js";
import { form2object } from "../../utils.js";

export default function Register() {
  const [reg, setReg] = useState({});
  const navigate = useNavigate();

  useFetchGeneric(SERVER_URL + "auth/register", reg);

  function onSubmitHandler(e) {
    e.preventDefault();
    const data = form2object(new FormData(e.target));
    setReg(data);
    navigate("/login");
  }

  return (
    <>
      <h1>Register</h1>
      <form method="POST" onSubmit={onSubmitHandler}>
        <div>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
        </div>
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
        <div>
          <label>
            Repeat Password:
            <input type="password" name="repeatPassword" />
          </label>
        </div>
        <input type="submit" value="Register" />
      </form>
    </>
  );
}
