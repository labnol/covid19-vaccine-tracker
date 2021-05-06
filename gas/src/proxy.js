import { getUrl } from './url';

export const proxyRequests = (pincodes, date) => {
  const urlRequests = pincodes.map((pincode) => ({
    url: getUrl(pincode, date),
    method: 'PATCH',
    muteHttpExceptions: true,
  }));
  return UrlFetchApp.fetchAll(urlRequests);
};
