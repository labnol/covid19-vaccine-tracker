export default function Vaccine({ value, onChange }) {
  return (
    <div className="flex items-center justify-start">
      <div className="flex items-center">
        <span className="block text-sm text-gray-900">Preferred Vaccine</span>
      </div>
      <div className="flex items-center ml-4">
        <input
          onChange={onChange}
          id="any"
          value="any"
          name="vaccine"
          type="radio"
          checked={value === 'any'}
          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
        />
        <label htmlFor="any" className="ml-2 block text-sm text-gray-900">
          Either
        </label>
      </div>
      <div className="flex items-center ml-4">
        <input
          onChange={onChange}
          id="COVISHIELD"
          value="COVISHIELD"
          name="vaccine"
          type="radio"
          checked={value === 'COVISHIELD'}
          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
        />
        <label
          htmlFor="COVISHIELD"
          className="ml-2 block text-sm text-gray-900"
        >
          COVISHIELD
        </label>
      </div>
      <div className="flex items-center ml-4">
        <input
          onChange={onChange}
          id="COVAXIN"
          value="COVAXIN"
          name="vaccine"
          type="radio"
          checked={value === 'COVAXIN'}
          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
        />
        <label htmlFor="COVAXIN" className="ml-2 block text-sm text-gray-900">
          COVAXIN
        </label>
      </div>
    </div>
  );
}
