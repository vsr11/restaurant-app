import { useNavigate } from "react-router-dom";
import { form2object, isEmpty } from "restaurant-app-common";
import useFetchGeneric from "../../../hooks/useFetchGeneric.js";
import { SERVER_URL } from "../../../constants.js";
import { useEffect, useState } from "react";

export default function AddMenuItem() {
  const [item, setItem] = useState({});
  const navigate = useNavigate();
  const [result] = useFetchGeneric(`${SERVER_URL}/menu/add`, item);

  function onSubmitHandler(e) {
    e.preventDefault();
    const data = form2object(new FormData(e.target));
    setItem(data);
  }

  useEffect(() => {
    if (!isEmpty(result?.data) && result?.ok) {
      navigate("/");
    }
  }, [result]);

  return (
    <>
      {!isEmpty(result?.data) && <h1>Item already exists</h1>}
      <form onSubmit={onSubmitHandler}>
        <div>
          <label>
            Name: <input type="text" name="name" />
          </label>
        </div>
        <div>
          <label>
            Category: <input type="text" name="category" />
          </label>
        </div>
        <div>
          <label>
            Description: <input type="text" name="description" />
          </label>
        </div>
        <div>
          <label>
            Weight: <input type="text" name="weight" />
          </label>
        </div>
        <div>
          <label>
            Price: <input type="text" name="price" />
          </label>
        </div>
        <div>
          <label>
            Image: <input type="text" name="image" />
          </label>
        </div>
        <div>
          <input type="submit" value="Add Menu Item" />
        </div>
      </form>
    </>
  );
}
