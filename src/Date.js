import { getMaxDate, getMinDate } from './utils';

export default function Date({ onChange, formData }) {
  return (
    <div class="mt-6 grid gap-y-6 gap-x-4 grid-cols-6">
      <div class="col-span-3">
        <label
          for="start_date"
          class="block text-sm font-medium text-gray-700"
          title="Check availability from this date"
        >
          Start Date
        </label>
        <div class="mt-1">
          <input
            onChange={onChange}
            type="date"
            name="start_date"
            id="start_date"
            min={getMinDate()}
            value={formData.start_date}
            required
            class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div class="col-span-3">
        <label
          for="end_date"
          class="block text-sm font-medium text-gray-700"
          title="Stop checking vaccine availability from this date"
        >
          End Date
        </label>
        <div class="mt-1">
          <input
            onChange={onChange}
            type="date"
            name="end_date"
            id="end_date"
            min={formData.start_date}
            max={getMaxDate()}
            value={formData.end_date}
            required
            class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
