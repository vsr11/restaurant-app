import useFetch from "../hooks/useFetch.js";
import { SERVER_URL } from "../constants.js";
import Loading from "./common/Loading.js";
import { Link, useParams } from "react-router-dom";
import MenuFields from "./common/MenuFields.js";

export default function ViewMenuItem() {
  const { id } = useParams();
  const [result, isLoading] = useFetch(`${SERVER_URL}/menu/view/${id}`);

  return (
    <>
      {(isLoading && <Loading />) || (
        <section id="item">
          <div>
            <Link to={`/menu/view/${result?.data?.id}`}>
              {result?.data?.name}
            </Link>
          </div>
          <MenuFields dataSet={result?.data} />
          <div>Image: {result?.data?.image}</div>
          <Link to={`/admin/menu/edit/${result?.data?.id}`}>Edit</Link>
          <Link to={`/admin/menu/delete/${result?.data?.id}`}>Delete</Link>
        </section>
      )}
    </>
  );
}
