import useFetchFn from "./useFetchFn.js";

export default function useFetch(url, defaultValue = []) {
  const [data, isLoading] = useFetchFn(url, {}, defaultValue, "get");
  return [data, isLoading];
}
