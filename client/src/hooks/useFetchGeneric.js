import { useEffect, useState } from "react";

export default function useFetchGeneric(
  url,
  defaultValue = [],
  method = "post",
  body = {}
) {
  const [data, setData] = useState(defaultValue);

  useEffect(() => {
    (async () => {
      try {
        let res = await fetch(url, {
          method: method.toUpperCase(),
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
        res = await res.json();
        setData(res);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [url, method, body]);
  return data;
}
