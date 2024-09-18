import { SERVER_URL } from "../../../constants.js";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { isEmpty, form2object } from "restaurant-app-common";
import Loading from "../../common/Loading.js";
import useFetch from "../../../hooks/useFetch.js";
import useFetchGeneric from "../../../hooks/useFetchGeneric.js";

export default function EditMenuItem() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [result, isLoading] = useFetch(`${SERVER_URL}/menu/edit/${id}`);
  const [item, setItem] = useState({});
  const [newItem] = useFetchGeneric(
    `${SERVER_URL}/menu/edit/${id}`,
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
      navigate("/");
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
                Category:{" "}
                <input
                  type="text"
                  name="category"
                  defaultValue={result?.data?.category}
                />
              </div>
              <div>
                Description:{" "}
                <input
                  type="text"
                  name="description"
                  defaultValue={result?.data?.description}
                />
              </div>
              <div>
                Weight:{" "}
                <input
                  type="text"
                  name="weight"
                  defaultValue={result?.data?.weight}
                />
              </div>
              <div>
                Price:{" "}
                <input
                  type="text"
                  name="price"
                  defaultValue={result?.data?.price}
                />
              </div>
              <div>
                Image:{" "}
                <input
                  type="text"
                  name="image"
                  defaultValue={result?.data?.image}
                />
              </div>
              <div>
                <input type="submit" value="Edit" />
              </div>
            </form>
          </section>
        )) || <h1>Specify ID</h1>}
    </>
  );
}
