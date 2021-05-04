export default function Saved({ daily }) {
  return (
    <div className="flex flex-col justify-center max-w-lg w-full mx-auto">
      <p className="font-medium text-gray-500 mt-8">
        Awesome! We'll send an email when vaccines are available in your
        area.&nbsp;
        {daily
          ? 'The email alerts are sent once per day around 8 am.'
          : 'The availability is checked every few hours.'}
      </p>
      <p className="font-medium text-indigo-500 mt-6">
        If you find this work useful, please help spread the word! 🙏🏻
      </p>
      <p className="mt-8">
        <a
          href="https://twitter.com/intent/tweet?text=🇮🇳%20Get%20alerts%20when%20%23Covid19Vaccine%20slots%20open%20up%20near%20your%20location&url=https%3A%2F%2Fwww.labnol.org%2Fcovid19-vaccine-tracker-210501&via=labnol"
          target="_blank"
          rel="noreferrer"
          className="no-underline inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <svg
            className="-ml-0.5 mr-2 h-4 w-4"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
          </svg>
          Share on Twitter
        </a>
        <a
          href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.labnol.org%2Fcovid19-vaccine-tracker-210501"
          target="_blank"
          rel="noreferrer"
          className="ml-4 no-underline inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <svg
            className="-ml-0.5 mr-2 h-4 w-4"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
              clipRule="evenodd"
            />
          </svg>
          Share on Facebook
        </a>
      </p>
    </div>
  );
}
