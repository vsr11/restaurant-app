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

export function isEmpty(data) {
  if (!data || Object.keys(data).length < 1 || data.length < 1) {
    return true;
  } else {
    return false;
  }
}
