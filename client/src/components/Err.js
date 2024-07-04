import { useContext } from "react";
import ErrorContext from "../contexts/ErrorContext.js";

export default function Err() {
  const error = useContext(ErrorContext);
  return <>{error?.message && <h2>{error?.message}</h2>}</>;
}
