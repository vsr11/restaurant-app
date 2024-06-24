import { useEffect, useState } from "react";

export default function useFetch(url, defaultValue = []) {
  const [data, setData] = useState(defaultValue);
  useEffect(() => {
    (async () => {
      try {
        let res = await fetch(url, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        res = await res.json();
        setData(res);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [url]);
  return data;
}
