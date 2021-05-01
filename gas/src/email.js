/* eslint-disable camelcase */

const getBody = (centerByPincodes) => {
  const body = [];
  centerByPincodes.forEach((pincodeCenter) =>
    pincodeCenter.forEach((center) => {
      const { name, district_name, pincode, sessions } = center;
      body.push(`${name} (${district_name} ${pincode})`);
      sessions.forEach(({ date, available_capacity, min_age_limit }) => {
        body.push(
          `\t ${available_capacity} doses for ${min_age_limit}+ age group available on ${date}`
        );
      });
      body.push('');
    })
  );
  return body.join('\n');
};

export const sendEmail = (centers, email) => {
  const { length } = centers;
  if (length > 0) {
    const body = getBody(centers);
    MailApp.sendEmail(
      email,
      `Vaccines are available in ${length} centers`,
      body
    );
  }
};
