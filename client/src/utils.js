export function form2object(formData) {
  if (!formData || !(formData instanceof FormData)) {
    return;
  }
  return Object.fromEntries(
    Array.from(formData.keys()).map((key) => [
      key,
      formData.getAll(key).length > 1
        ? formData.getAll(key)
        : formData.get(key),
    ])
  );
}
