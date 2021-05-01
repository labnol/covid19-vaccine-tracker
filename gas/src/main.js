import { findCenters } from './centers';
import { getData } from './data';
import { sendEmail } from './email';
import { requests } from './requests';

export const app = () => {
  try {
    const data = getData();
    if (data) {
      const { pincode, email, young, old } = data;
      const pincodes = pincode
        .split(/[,\s.:]/)
        .filter((e) => /^\d{6}$/.test(e));

      if (pincodes.length > 0) {
        const youngAdultsOnly = young && !old;
        const responses = requests(pincodes);

        const locations = responses
          .map((response) => findCenters(response, youngAdultsOnly))
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
