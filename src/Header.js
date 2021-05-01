export default function Header() {
  return (
    <div className="mx-auto w-full">
      <img
        src="https://i.imgur.com/u79DTJj.png"
        className="h-32 mx-auto w-auto"
        alt="Vaccine"
      />
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Check Vaccine Availability
      </h2>
      <p className="mt-2 text-center text-sm text-gray-600">
        Visit{' '}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.cowin.gov.in/home"
          className="font-medium text-indigo-600 hover:text-indigo-500"
        >
          cowin.gov.in
        </a>{' '}
        to book your appointment
      </p>
    </div>
  );
}
