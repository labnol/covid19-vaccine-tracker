import { findCenters } from './centers';
import { getData } from './data';
import { sendEmail } from './email';
import { getLocations } from './locations';

export const app = () => {
  try {
    if (MailApp.getRemainingDailyQuota() > 1) {
      const data = getData();
      if (data) {
        const { pincode, email, ...rest } = data;
        const locations = getLocations(pincode)
          .map((centers) => findCenters(centers, rest))
          .filter((centers) => centers.length > 0);

        if (locations.length > 0) {
          sendEmail(locations, email);
        }
      }
    }
  } catch (f) {
    //
  }
};
