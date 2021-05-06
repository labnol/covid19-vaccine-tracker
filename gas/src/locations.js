import { getDate } from './date';
import { proxyRequests } from './proxy';
import { apiRequests } from './requests';

export const getLocations = (pincode) => {
  let data = [];
  const pincodes = pincode
    .split(/[,\s.:]/)
    .filter((e) => /^\d{6}$/.test(e))
    .slice(0, 5);
  if (pincodes.length === 0) return data;
  const date = getDate();
  try {
    data = apiRequests(pincodes, date);
  } catch (f) {
    data = proxyRequests(pincodes, date);
  }
  return data;
};
