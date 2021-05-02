export const getDate = (offsetDays = 0) => {
  const date = new Date();
  if (offsetDays) {
    date.setDate(date.getDate() + offsetDays);
  }
  return Utilities.formatDate(date, 'IST', 'dd-MM-yyyy');
};
