import { useEffect, useState } from "react";

export default function useFetchFn(
  url,
  body = {},
  defaultValue = [],
  method = "post"
) {
  const [data, setData] = useState(defaultValue);
  const [isLoading, setIsLoading] = useState(true);
  let deps = [];
  if (method.toUpperCase() !== "GET") {
    deps = [url, body];
  } else {
    deps = [url];
  }

  useEffect(() => {
    (async () => {
      try {
        let ignore = false;
        if (method.toUpperCase() !== "GET") {
          if (!body || Object.keys(body).length < 1 || body.length < 1) {
            return;
          }
        }

        let res = await fetch(url, {
          method: method.toUpperCase(),
          headers: { "Content-Type": "application/json" },
          body: method.toUpperCase() === "GET" ? null : JSON.stringify(body),
        });

        res = await res.json();

        if (!ignore) {
          setData(res);
          setIsLoading(false);
        }

        return () => {
          ignore = true;
        };
      } catch (e) {
        setIsLoading(false);
        console.log(e);
      }
    })();
  }, deps);
  return [data, isLoading];
}
