import { SERVER_URL } from "../../../constants.js";
import useFetch from "../../../hooks/useFetch.js";
import Loading from "../../common/Loading.js";
import { isEmpty } from "restaurant-app-common";
import { Link } from "react-router-dom";

export default function ViewUser() {
  const [result, isLoading] = useFetch(`${SERVER_URL}/auth/view/`);

  return (
    <>
      {(isLoading && <Loading />) ||
        (!isEmpty(result?.data) && (
          <section id="users">
            <ul>
              {result?.data?.map((x) => {
                return (
                  <li key={x?.id}>
                    <Link to={`/admin/user/edit/${x?.id}`}>{x?.name}</Link>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
    </>
  );
}
