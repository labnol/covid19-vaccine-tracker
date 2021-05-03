export default function Error() {
  return (
    <div className="min-h-screen flex flex-col justify-center px-4">
      <div className="flex flex-col justify-center max-w-lg w-full mx-auto">
        <p className="">
          Are you logged into multiple Google accounts? Please&nbsp;
          <a
            target="_blank"
            rel="noreferrer"
            href="https://accounts.google.com/logout"
            className="text-red-600 font-semibold"
          >
            click here
          </a>
          &nbsp;to sign-out and then sign-in with a single Google account.
        </p>
        <p className="mt-6">
          Alternatively, you may open this Google Sheet in Chrome's incognito
          mode and try again!
        </p>
        <p className="mt-8">
          For assistance, please tweet the developer&nbsp;
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/labnol"
            className="text-indigo-600 font-semibold"
          >
            @labnol
          </a>
        </p>
      </div>
    </div>
  );
}
