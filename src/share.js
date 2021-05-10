const TEXT =
  'This COVID-19 vaccine tracker will notify you when vaccine slots become available near your location 🇮🇳';
const URL = 'https://www.labnol.org/covid19-vaccine-tracker-210501';
const TWITTER_API = 'https://twitter.com/intent/tweet';
const FACEBOOK_API = 'https://www.facebook.com/sharer/sharer.php';

export const getTweet = () =>
  `${TWITTER_API}?text=${encodeURIComponent(TEXT)}&url=${encodeURIComponent(
    URL
  )}&via=labnol`;

export const getFBUrl = () => `${FACEBOOK_API}?u=${encodeURIComponent(URL)}`;
