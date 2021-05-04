export default function Header() {
  return (
    <div className="mx-auto w-full">
      <img
        src="https://i.imgur.com/u79DTJj.png"
        className="h-32 mx-auto w-auto"
        alt="Vaccine"
      />
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Monitor Vaccine Availability
      </h2>
      <p className="mt-2 text-center text-sm text-gray-600">
        Developed by{' '}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.labnol.org/about"
          className="font-medium text-indigo-600 hover:text-indigo-500"
        >
          Amit Agarwal
        </a>
        &nbsp;for&nbsp;
        <a
          target="_blank"
          rel="noreferrer"
          href="https://digitalinspiration.com/"
          className="font-medium text-indigo-600 hover:text-indigo-500"
        >
          Digital Inspiration
        </a>
      </p>
    </div>
  );
}
