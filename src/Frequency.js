export default function Frequency({ onChange, value }) {
  return (
    <div>
      <label
        htmlFor="frequency"
        className="block text-sm font-medium text-gray-700"
      >
        Run availability checks
      </label>
      <select
        id="frequency"
        name="frequency"
        value={value}
        onChange={onChange}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
      >
        <option value="day">Every day</option>
        <option value="12">Every 12 hours</option>
        <option value="6">Every 6 hours</option>
        <option value="4">Every 4 hours</option>
        <option value="2">Every 2 hours</option>
        <option value="1">Every hour</option>
        <option value="30">Every 30 minutes</option>
        <option value="15">Every 15 minutes</option>
      </select>
    </div>
  );
}
