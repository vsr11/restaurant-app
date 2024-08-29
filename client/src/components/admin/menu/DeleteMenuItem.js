import { SERVER_URL } from "../../../constants.js";
import { useEffect, useState } from "react";
import useFetchGeneric from "../../../hooks/useFetchGeneric.js";
import useFetch from "../../../hooks/useFetch.js";
import { useParams, useNavigate } from "react-router-dom";
import { isEmpty } from "restaurant-app-common";

export default function DeleteMenuItem() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [result, isLoading] = useFetch(`${SERVER_URL}/menu/view/${id}`);

  function handleDelete(e) {
    e.preventDefault();
    setItem(result?.data);
  }

  const [deletedItem] = useFetchGeneric(
    `${SERVER_URL}/menu/delete/${id}`,
    item,
    [],
    "delete"
  );

  useEffect(() => {
    if (!isEmpty(deletedItem)) navigate("/");
  }, [deletedItem]);

  return (
    <>
      <h2>Delete {result?.data?.name}?</h2>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={() => navigate(`/menu/view/${id}`)}>Go back</button>
    </>
  );
}
