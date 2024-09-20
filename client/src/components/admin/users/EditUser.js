import { SERVER_URL } from "../../../constants.js";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { isEmpty, form2object } from "restaurant-app-common";
import Loading from "../../common/Loading.js";
import useFetchGeneric from "../../../hooks/useFetchGeneric.js";
import useFetch from "../../../hooks/useFetch.js";

export default function EditUser() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [result, isLoading] = useFetch(`${SERVER_URL}/auth/edit/${id}`);
  const [item, setItem] = useState({});

  const [newItem] = useFetchGeneric(
    `${SERVER_URL}/auth/edit/${id}`,
    item,
    [],
    "patch"
  );

  function onSubmitHandler(e) {
    e.preventDefault();
    let data = form2object(new FormData(e.target));
    setItem(data);
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
          <section id="edit">
            <form onSubmit={onSubmitHandler}>
              <div>
                Name:{" "}
                <input
                  type="text"
                  name="name"
                  defaultValue={result?.data?.name}
                />
              </div>
              <div>
                Email:{" "}
                <input
                  type="text"
                  name="email"
                  defaultValue={result?.data?.email}
                />
              </div>
              <div>
                Password:{" "}
                <input
                  type="password"
                  name="password"
                  defaultValue={result?.data?.password}
                />
              </div>
              <div>
                Role:{" "}
                <input
                  type="text"
                  name="role"
                  defaultValue={result?.data?.role}
                />
              </div>
              <div>
                <input type="submit" value="Edit" />
                <input
                  type="button"
                  onClick={() =>
                    navigate(`/admin/user/delete/${result?.data?.id}`)
                  }
                  value="Delete"
                />
              </div>
            </form>
          </section>
        )) || <h1>Specify ID</h1>}
    </>
  );
}
