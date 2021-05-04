/* eslint-disable camelcase */

import { compareMaxDate, compareMinDate } from './date';

export const findCenters = (data, formData) => {
  try {
    const { centers = [] } = JSON.parse(data);
    return centers
      .map(({ name, district_name, pincode, sessions }) => ({
        name,
        district_name,
        pincode,
        sessions: sessions
          .map(({ date, available_capacity, min_age_limit }) => {
            return {
              date,
              available_capacity,
              min_age_limit,
            };
          })
          .filter(({ available_capacity }) => available_capacity !== 0)
          .filter(({ available_capacity }) =>
            /^\d+$/.test(String(available_capacity))
          )
          .filter(({ min_age_limit }) => {
            if (formData.age === '18') return min_age_limit === 18;
            if (formData.age === '45') return min_age_limit === 45;
            return true;
          })
          .filter(
            ({ date }) =>
              compareMinDate(date, formData.start_date) &&
              compareMaxDate(date, formData.end_date)
          ),
      }))
      .filter(({ sessions }) => sessions.length > 0);
  } catch (f) {
    return [];
  }
};
