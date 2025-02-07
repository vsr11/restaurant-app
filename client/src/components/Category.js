import useFetch from "../hooks/useFetch.js";
import { SERVER_URL } from "../constants.js";
import { useParams } from "react-router-dom";
import Loading from "./common/Loading.js";
import { isEmpty } from "restaurant-app-common";

export default function Category() {
  let { cat } = useParams();

  if (isEmpty(cat)) {
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
