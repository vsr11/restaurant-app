import useFetch from "../hooks/useFetch.js";
import { SERVER_URL } from "../constants.js";
import Loading from "./common/Loading.js";
import { Link } from "react-router-dom";
import MenuFields from "./common/MenuFields.js";

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
                    <Link to={`/menu/view/${x?.id}`}>{x?.name}</Link>
                  </div>
                  <MenuFields dataSet={x} />
                  <Link to={`/admin/menu/edit/${x?.id}`}>Edit</Link>
                  <Link to={`/admin/menu/delete/${x?.id}`}>Delete</Link>
                </div>
              );
            })}
          </section>
        )) || <h1>No food found</h1>}
    </>
  );
}
