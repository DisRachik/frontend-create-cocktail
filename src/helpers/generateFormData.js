export const generateFormData = obj => {
  const formData = new FormData();
  const entries = Object.entries(obj);

  entries.forEach(([key, value]) => {
    if (key === 'ingredients') {
      formData.append(key, JSON.stringify(value));
    } else {
      formData.append(key, value);
    }
  });

  return formData;
};
