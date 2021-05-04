export default function Age({ value, onChange }) {
  return (
    <div className="flex items-center justify-start">
      <div className="flex items-center">
        <span className="block text-sm text-gray-900">Age group</span>
      </div>
      <div className="flex items-center ml-4">
        <input
          onChange={onChange}
          id="any"
          value="any"
          name="age"
          type="radio"
          checked={value === 'any'}
          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
        />
        <label htmlFor="any" className="ml-2 block text-sm text-gray-900">
          Any age group
        </label>
      </div>
      <div className="flex items-center ml-4">
        <input
          onChange={onChange}
          id="young"
          value="18"
          name="age"
          type="radio"
          checked={value === '18'}
          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
        />
        <label htmlFor="young" className="ml-2 block text-sm text-gray-900">
          18-45 years
        </label>
      </div>
      <div className="flex items-center ml-4">
        <input
          onChange={onChange}
          id="old"
          value="45"
          name="age"
          type="radio"
          checked={value === '45'}
          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
        />
        <label htmlFor="old" className="ml-2 block text-sm text-gray-900">
          45+ years
        </label>
      </div>
    </div>
  );
}
