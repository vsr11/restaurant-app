import useFetch from "../hooks/useFetch.js";
import { SERVER_URL } from "../constants.js";
import Loading from "./common/Loading.js";

export default function Menu() {
  const [result, isLoading] = useFetch(`${SERVER_URL}/menu/`);

  return (
    <>
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
        ))}
    </>
  );
}
