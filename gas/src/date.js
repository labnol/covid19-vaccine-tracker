export const getDate = (offsetDays = 0) => {
  const date = new Date();
  if (offsetDays) {
    date.setDate(date.getDate() + offsetDays);
  }
  return Utilities.formatDate(date, 'IST', 'dd-MM-yyyy');
};

const convertDate = (ddmmyyyy) => {
  const [dd, mm, yyyy] = ddmmyyyy.split('-');
  return new Date([mm, dd, yyyy].join('-'));
};

export const compareMinDate = (apiDate, minDate) => {
  return convertDate(apiDate) >= new Date(`${minDate} 0:0:0:0`);
};

export const compareMaxDate = (apiDate, maxDate) => {
  return convertDate(apiDate) <= new Date(`${maxDate} 0:0:0:0`);
};
