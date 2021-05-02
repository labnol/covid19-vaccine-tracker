/* eslint-disable camelcase */

export const findCenters = (data, youngAdultsOnly) => {
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
          .filter(({ min_age_limit }) =>
            youngAdultsOnly ? min_age_limit === 18 : true
          ),
      }))
      .filter(({ sessions }) => sessions.length > 0);
  } catch (f) {
    return [];
  }
};
