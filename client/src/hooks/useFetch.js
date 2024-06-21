import { useEffect, useState } from "react";

export default function useFetch(url, method = "get") {
  const [data, setData] = useState({});
  useEffect(() => {
    (async () => {
      try {
        let res = await fetch(url, {
          method: method.toUpperCase(),
          headers: { "Content-Type": "application/json" },
        });
        res = await res.json();
        setData(res);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [url, method]);
  return data;
}
