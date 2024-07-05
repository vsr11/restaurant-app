import useFetchFn from "./useFetchFn.js";

export default function useFetchGeneric(
  url,
  body = {},
  defaultValue = [],
  method = "post"
) {
  const [data, isLoading] = useFetchFn(url, body, defaultValue, method);
  return [data, isLoading];
}
