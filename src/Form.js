import Age from './Age';
import Date from './Date';
export default function Form({ onSubmit, onChange, formData, sending }) {
  return (
    <div className="mt-8 mx-auto w-full px-2">
      <form className="space-y-8 max-w-2xl mx-auto" onSubmit={onSubmit}>
        <div>
          <label
            htmlFor="pincode"
            className="block text-sm font-medium text-gray-700"
          >
            Pincode(s)
          </label>
          <div className="mt-1">
            <input
              onChange={onChange}
              value={formData.pincode}
              id="pincode"
              name="pincode"
              type="text"
              placeholder="Enter one or more pincodes (comma separated)..."
              required
              maxLength={36}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email address (the alerts will be sent here)
          </label>
          <div className="mt-1">
            <input
              onChange={onChange}
              value={formData.email}
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Enter your email address here..."
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>

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
            value={formData.frequency}
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
        <Date formData={formData} onChange={onChange} />
        <Age onChange={onChange} value={formData.age} />

        <div>
          <button
            type="submit"
            disabled={sending}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {sending ? 'Working...' : 'Create Email Alert'}
          </button>
        </div>
      </form>
    </div>
  );
}
