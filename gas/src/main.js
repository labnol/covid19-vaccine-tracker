import { findCenters } from './centers';
import { getData } from './data';
import { sendEmail } from './email';
import { requests } from './requests';

export const app = () => {
  try {
    if (MailApp.getRemainingDailyQuota() > 1) {
      const data = getData();
      if (data) {
        const { pincode, email, ...rest } = data;
        const pincodes = pincode
          .split(/[,\s.:]/)
          .filter((e) => /^\d{6}$/.test(e));

        if (pincodes.length > 0) {
          const responses = requests(pincodes);

          const locations = responses
            .map((centers) => findCenters(centers, rest))
            .filter((centers) => centers.length > 0);

          if (locations.length > 0) {
            sendEmail(locations, email);
          }
        }
      }
    }
  } catch (f) {
    //
  }
};
