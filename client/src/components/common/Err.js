import { useContext } from "react";
import ErrorContext from "../../contexts/ErrorContext.js";

export default function Err() {
  const ec = useContext(ErrorContext);
  return <>{ec?.message && <h2>{ec?.message}</h2>}</>;
}
