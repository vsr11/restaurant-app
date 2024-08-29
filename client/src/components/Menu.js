import useFetch from "../hooks/useFetch.js";
import { SERVER_URL } from "../constants.js";
import Loading from "./common/Loading.js";
import { Link } from "react-router-dom";

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
                  <div>
                    <Link to={`/menu/view/${x?._id}`}>{x?.name}</Link>
                  </div>
                  <div>Name: {x?.name}</div>
                  <div>Category: {x?.category}</div>
                  <div>Description: {x?.description}</div>
                  <div>Weight: {x?.weight}</div>
                  <div>Price: {x?.price}</div>
                  <Link to={`/admin/menu/edit/${x?._id}`}>Edit</Link>
                  <Link to={`/admin/menu/delete/${x?._id}`}>Delete</Link>
                </div>
              );
            })}
          </section>
        ))}
    </>
  );
}
