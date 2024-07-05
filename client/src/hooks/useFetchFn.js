import { useEffect, useState } from "react";

export default function useFetchFn(
  url,
  body = {},
  defaultValue = [],
  method = "post"
) {
  const [data, setData] = useState(defaultValue);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        if (method.toUpperCase() !== "GET") {
          if (!body || Object.keys(body).length < 1 || body.length < 1) {
            return;
          }
        }

        let res = await fetch(url, {
          method: method.toUpperCase(),
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
        res = await res.json();
        setData(res);
        setIsLoading(false);
      } catch (e) {
        setIsLoading(false);
        console.log(e);
      }
    })();
  }, [url, method, body]);
  return [data, isLoading];
}
