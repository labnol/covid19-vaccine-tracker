import { getBody } from './body';

export const sendEmail = (centers, email) => {
  const { length } = centers;
  if (length > 0) {
    const { count, body } = getBody(centers);
    const cachedBody = CacheService.getScriptCache().get('body') || '';
    if (count > 0 && cachedBody !== body) {
      MailApp.sendEmail(
        email,
        `Vaccines are available in ${count} centers`,
        body
      );
      CacheService.getScriptCache().put('body', body, 21600);
    }
  }
};
