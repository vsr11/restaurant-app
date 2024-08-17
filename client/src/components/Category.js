import useFetch from "../hooks/useFetch.js";
import { SERVER_URL } from "../constants.js";
import { useParams } from "react-router-dom";
import Loading from "./Loading.js";

export default function Category() {
  let { cat } = useParams();

  if (!cat || cat === "undefined") {
    cat = "all";
  }

  const [result, isLoading] = useFetch(`${SERVER_URL}/category/${cat}`, {});

  return (
    <>
      {(isLoading && <Loading />) ||
        (result?.ok &&
          result?.data?.length &&
          result?.data?.map((x, i) => <h1 key={i}>{x?.name}</h1>)) || (
          <h2>Nothing found!</h2>
        )}
    </>
  );
}
