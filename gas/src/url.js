import { token } from './token';
import { getAPI } from './utils';

export const getUrl = (pincode, date) =>
  `${getAPI(token)}/${pincode}/${date}/${Date.now()}`;
