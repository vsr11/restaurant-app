import useFetch from "../hooks/useFetch.js";
import { SERVER_URL } from "../constants.js";
import { useSearchParams } from "react-router-dom";
import { form2object } from "restaurant-app-common";
import Loading from "./common/Loading.js";
import MenuFields from "./common/MenuFields.js";

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
                  <MenuFields dataSet={x} />
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
