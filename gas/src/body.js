/* eslint-disable camelcase */

export const getBody = (centerByPincodes) => {
  const body = [];
  let count = 0;

  centerByPincodes.forEach((pincodeCenter) =>
    pincodeCenter.forEach((center) => {
      const { name, district_name, pincode, sessions } = center;
      body.push(`${name} (${district_name} ${pincode})`);
      count += 1;
      sessions.forEach(({ date, available_capacity, min_age_limit }) => {
        body.push(
          `\t${available_capacity} doses for ${min_age_limit}+ age group available on ${date}`
        );
      });
      body.push('');
    })
  );

  return { count, body: body.join('\n') };
};
