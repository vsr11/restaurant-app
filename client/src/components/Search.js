import useFetch from "../hooks/useFetch.js";
import { SERVER_URL } from "../constants.js";
import { useSearchParams } from "react-router-dom";
import { form2object } from "../utils.js";
import Loading from "./Loading.js";

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleSearch(e) {
    e.preventDefault();
    setSearchParams(form2object(e.target));
  }

  const [result, isLoading] = useFetch(
    `${SERVER_URL}/menu/search?${searchParams}`
  );

  return (
    <>
      <form onSubmit={handleSearch}>
        <input
          type="search"
          name="query"
          defaultValue={Object.fromEntries(searchParams)?.query}
        />
        <input type="submit" value="Search" />
      </form>
      {(isLoading && <Loading />) ||
        (result?.ok && result?.data?.length && (
          <section id="results">
            {result?.data?.map((x, i) => {
              return (
                <div key={i}>
                  <div>Name: {x?.name}</div>
                  <div>Category: {x?.category}</div>
                  <div>Description: {x?.description}</div>
                  <div>Weight: {x?.weight}</div>
                  <div>Price: {x?.price}</div>
                </div>
              );
            })}
          </section>
        )) ||
        (Object.fromEntries(searchParams.entries())?.query && (
          <h2>Nothing found!</h2>
        ))}
    </>
  );
}
