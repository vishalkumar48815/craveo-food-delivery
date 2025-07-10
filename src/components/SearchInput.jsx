export default function SearchInput() {
    return (
      <div className="flex w-full max-w-md relative">
        <input
          type="text"
          placeholder="e.g. EC4R 3TE"
          className="flex-1 px-4 py-3 text-gray-700 rounded-full pr-28 focus:outline-none"
        />
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-orange-500 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-orange-600 transition-all"
        >
          Search
        </button>
      </div>
    );
  }
  