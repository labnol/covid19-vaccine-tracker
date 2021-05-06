const https = require('https');

const getPath = (pincode, date) => {
  return `/api/v2/appointment/sessions/public/calendarByPin?pincode=${pincode}&date=${date}`;
};

const isExpired = (cacheBuster) => Math.abs(cacheBuster - Date.now()) > 15000;

const isGAS = ({ headers }) =>
  headers['user-agent'].indexOf('script.google.com') !== -1;

const isPincode = (pincode) => /^\d{6}$/.test(pincode);

const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  'User-Agent':
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36',
};

exports.handler = (event, _, callback) => {
  const { pincode, date, time } = event.pathParameters;
  if (isGAS(event) && !isExpired(time) && isPincode(pincode)) {
    var options = {
      method: 'GET',
      host: 'cdn-api.co-vin.in',
      path: getPath(pincode, date),
      headers: headers,
    };
    const req = https.request(options, (res) => {
      let body = '';
      res.setEncoding('utf8');
      res.on('data', (chunk) => (body += chunk));
      res.on('end', () => {
        callback(null, body);
      });
    });
    req.on('error', callback);
    req.end();
  }
};
