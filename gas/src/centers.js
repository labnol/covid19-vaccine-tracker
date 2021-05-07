/* eslint-disable camelcase */

import { compareMaxDate, compareMinDate } from './date';

export const findCenters = (response, formData) => {
  try {
    if (response.getResponseCode() === 200) {
      const { centers = [] } = JSON.parse(response);
      return centers
        .map(({ name, district_name, pincode, sessions }) => ({
          name,
          district_name,
          pincode,
          sessions: sessions
            .map(({ date, available_capacity, min_age_limit, vaccine }) => {
              return {
                date,
                available_capacity,
                min_age_limit,
                vaccine,
              };
            })
            .filter(
              ({ available_capacity }) =>
                available_capacity !== 0 &&
                /^\d+$/.test(String(available_capacity))
            )
            .filter(({ min_age_limit }) => {
              if (formData.age === '18') return min_age_limit === 18;
              if (formData.age === '45') return min_age_limit === 45;
              return true;
            })
            .filter(({ vaccine }) => {
              if (!vaccine || formData.vaccine === 'any') return true;
              return formData.vaccine.toLowerCase() === vaccine.toLowerCase();
            })
            .filter(
              ({ date }) =>
                compareMinDate(date, formData.start_date) &&
                compareMaxDate(date, formData.end_date)
            ),
        }))
        .filter(({ sessions }) => sessions.length > 0);
    }
  } catch (f) {
    // do nothing
  }
  return [];
};
