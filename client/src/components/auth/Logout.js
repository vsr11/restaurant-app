import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext.js";

export default function Logout() {
  const navigate = useNavigate();
  const ac = useContext(AuthContext);
  useEffect(() => {
    ac.setAuth({});
    localStorage.clear();
    navigate("/");
  }, [ac, navigate]);
}
