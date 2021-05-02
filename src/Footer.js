export default function Footer() {
  return (
    <div className="mt-8">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">
            Developed by&nbsp;
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.labnol.org"
              className="text-indigo-700 font-semibold"
            >
              Amit Agarwal
            </a>
            &nbsp;
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/intent/follow?region=follow_link&screen_name=labnol&tw_p=followbutton"
              className="text-indigo-600 font-semibold"
            >
              @labnol
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
