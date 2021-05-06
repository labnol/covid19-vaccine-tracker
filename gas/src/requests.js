const API =
  'https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin';

const getUrl = (pincode, date) => `${API}?pincode=${pincode}&date=${date}`;

export const apiRequests = (pincodes, date) => {
  const urlRequests = pincodes.map((pincode) => ({
    url: getUrl(pincode, date),
    muteHttpExceptions: false,
  }));
  return UrlFetchApp.fetchAll(urlRequests);
};
