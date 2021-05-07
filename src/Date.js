import { getMaxDate, getMinDate } from './utils';

export default function Date({ onChange, formData }) {
  return (
    <div className="mt-6 grid gap-y-6 gap-x-4 grid-cols-6">
      <div className="col-span-3">
        <label
          htmlFor="start_date"
          className="block text-sm font-medium text-gray-700"
          title="Check availability from this date"
        >
          Start Date
        </label>
        <div className="mt-1">
          <input
            onChange={onChange}
            type="date"
            name="start_date"
            id="start_date"
            min={getMinDate()}
            value={formData.start_date}
            required
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div className="col-span-3">
        <label
          htmlFor="end_date"
          className="block text-sm font-medium text-gray-700"
          title="Stop checking vaccine availability from this date"
        >
          End Date
        </label>
        <div className="mt-1">
          <input
            onChange={onChange}
            type="date"
            name="end_date"
            id="end_date"
            min={formData.start_date}
            max={getMaxDate()}
            value={formData.end_date}
            required
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
