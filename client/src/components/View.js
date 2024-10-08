import useFetch from "../hooks/useFetch.js";
import { SERVER_URL } from "../constants.js";
import Loading from "./common/Loading.js";
import { Link, useParams } from "react-router-dom";

export default function ViewMenuItem() {
  const { id } = useParams();
  const [result, isLoading] = useFetch(`${SERVER_URL}/menu/view/${id}`);

  return (
    <>
      {(isLoading && <Loading />) || (
        <section id="item">
          <div>
            <Link to={`/menu/view/${result?.data?._id}`}>
              {result?.data?.name}
            </Link>
          </div>
          <div>Name: {result?.data?.name}</div>
          <div>Category: {result?.data?.category}</div>
          <div>Description: {result?.data?.description}</div>
          <div>Weight: {result?.data?.weight}</div>
          <div>Price: {result?.data?.price}</div>
          <div>Image: {result?.data?.image}</div>
          <Link to={`/admin/menu/edit/${result?.data?._id}`}>Edit</Link>
          <Link to={`/admin/menu/delete/${result?.data?._id}`}>Delete</Link>
        </section>
      )}
    </>
  );
}
