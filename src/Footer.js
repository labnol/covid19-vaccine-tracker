export default function Footer() {
  return (
    <div className="mt-6">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">
            Send me a{' '}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/labnol"
              className="text-indigo-700 font-semibold"
            >
              tweet
            </a>{' '}
            for assistance
          </span>
        </div>
      </div>
    </div>
  );
}
