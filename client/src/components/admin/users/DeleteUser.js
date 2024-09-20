import { SERVER_URL } from "../../../constants.js";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { isEmpty, form2object } from "restaurant-app-common";
import Loading from "../../common/Loading.js";
import useFetchGeneric from "../../../hooks/useFetchGeneric";
import useFetch from "../../../hooks/useFetch.js";

export default function DeleteUser() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [result, isLoading] = useFetch(`${SERVER_URL}/auth/edit/${id}`);
  const [item, setItem] = useState({});

  const [newItem] = useFetchGeneric(
    `${SERVER_URL}/auth/delete/${id}`,
    item,
    [],
    "delete"
  );

  function onSubmitHandler(e) {
    e.preventDefault();
    // let data = form2object(new FormData(e.target));
    let data = result?.data?.id;
    setItem({ id: data });
  }

  useEffect(() => {
    if (!isEmpty(newItem)) {
      navigate("/admin/user");
    }
  }, [newItem]);

  return (
    <>
      {(isLoading && <Loading />) ||
        (!isEmpty(result?.data) && (
          <section id="delete">
            {`Delete user ${result?.data?.name} (${result?.data?.email})?`}
            <button onClick={onSubmitHandler}>Yes</button>
            <button
              onClick={() => navigate(`/admin/user/edit/${result?.data?.id}`)}
            >
              No
            </button>
          </section>
        )) || <h1>Specify ID</h1>}
    </>
  );
}
