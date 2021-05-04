export const getMinDate = () => {
  const date = new Date();
  return date.toISOString().slice(0, 10);
};

export const getMaxDate = () => {
  const date = new Date();
  date.setMonth(date.getMonth() + 3);
  return date.toISOString().slice(0, 10);
};
