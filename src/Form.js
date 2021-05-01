export default function Form({ onSubmit, onChange, formData }) {
  return (
    <form className="space-y-8" onSubmit={onSubmit}>
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
            placeholder="Enter one or more pincodes here..."
            required
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email address
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

      <div className="flex items-center justify-start">
        <div className="flex items-center">
          <span className="ml-2 block text-sm text-gray-900">
            Vaccination Age Group
          </span>
        </div>
        <div className="flex items-center ml-4">
          <input
            onChange={onChange}
            id="young"
            checked={formData.young}
            name="young"
            type="checkbox"
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <label htmlFor="young" className="ml-2 block text-sm text-gray-900">
            18-45 years
          </label>
        </div>

        <div className="flex items-center ml-4">
          <input
            onChange={onChange}
            checked={formData.old}
            id="old"
            name="old"
            type="checkbox"
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <label htmlFor="old" className="ml-2 block text-sm text-gray-900">
            45+ years
          </label>
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Create Email Alert
        </button>
      </div>
    </form>
  );
}
