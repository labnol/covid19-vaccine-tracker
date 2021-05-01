const API =
  'https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin';

const getUrl = (pincode, date) => `${API}?pincode=${pincode}&date=${date}`;

export const requests = (pincodes) => {
  const date = Utilities.formatDate(new Date(), 'IST', 'dd-MM-yyyy');
  const urlRequests = pincodes.map((pincode) => ({
    url: getUrl(pincode, date),
    muteHttpExceptions: true,
  }));
  return UrlFetchApp.fetchAll(urlRequests);
};
