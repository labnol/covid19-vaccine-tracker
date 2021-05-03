import { getBody } from './body';
import { footer } from './footer';

export const sendEmail = (centers, email) => {
  const { length } = centers;
  if (length > 0) {
    const { count, body } = getBody(centers);
    const cachedBody = CacheService.getScriptCache().get('body') || '';
    if (count > 0 && cachedBody !== body) {
      MailApp.sendEmail(
        email,
        `Vaccines are available in ${count} centers`,
        body + footer,
        {
          name: 'CoWIN Vaccine Tracker',
          replyTo: 'support@digitalinspiration.com',
        }
      );
      CacheService.getScriptCache().put('body', body, 21600);
    }
  }
};
