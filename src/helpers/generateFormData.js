export const generateFormData = obj => {
  const formData = new FormData();
  const entries = Object.entries(obj);

  entries.forEach(([key, value]) => {
    formData.append(key, value);
  });

  return formData;
};
