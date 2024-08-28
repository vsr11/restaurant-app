import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetchGeneric from "../../hooks/useFetchGeneric.js";
import { SERVER_URL } from "../../constants.js";
import { form2object, isEmpty } from "restaurant-app-common";
import ErrorContext from "../../contexts/ErrorContext.js";
import AuthContext from "../../contexts/AuthContext.js";

export default function Register() {
  const c = useContext(ErrorContext);
  const navigate = useNavigate();
  const [reg, setReg] = useState({});
  const ac = useContext(AuthContext);

  const [d] = useFetchGeneric(`${SERVER_URL}/auth/register`, reg);

  function onSubmitHandler(e) {
    e.preventDefault();
    const data = form2object(new FormData(e.target));
    setReg(data);
  }

  useEffect(() => {
    if (!isEmpty(ac?.auth)) {
      navigate("/");
    }

    if (d?.ok) {
      navigate("/login");
    } else {
      c?.setMessage(d?.data);
    }
  }, [d, c, ac, navigate]);

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
