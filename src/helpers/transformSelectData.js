export const transformSelectData = data =>
  data.map(item => ({
    value: item.title,
    label: item.title,
  }));
