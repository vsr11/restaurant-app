import useFetchGeneric from "./useFetchGeneric.js";

export default function useFetch(url, defaultValue = []) {
  const [data, isLoading] = useFetchGeneric(url, {}, defaultValue, "get");
  return [data, isLoading];
}
