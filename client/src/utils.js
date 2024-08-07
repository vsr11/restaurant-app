export function form2object(formData) {
  if (!formData || !(formData instanceof Object)) {
    return;
  }

  if (!(formData instanceof FormData)) {
    formData = new FormData(formData);
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
  if (
    !data ||
    Object.keys(data).length < 1 ||
    data.length < 1 ||
    isServerError(data)
  ) {
    return true;
  } else {
    return false;
  }
}

export function isServerError(data) {
  if (data.hasOwnProperty("type") && data.type === "error") {
    return true;
  } else {
    return false;
  }
}
