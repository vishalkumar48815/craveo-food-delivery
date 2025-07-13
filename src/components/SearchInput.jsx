export default function SearchInput() {
    return (
      <div className="flex md:w-full max-w-md relative">
        <input
          type="text"
          placeholder="e.g. EC4R 3TE"
          className="flex-1 p-2 ps-3 md:px-4 md:py-3 text-gray-700 rounded-full pr-10 sm:pr-20 md:pr-28 focus:outline-none"
        />
        <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-orange-500 text-white font-semibold p-2 px-3 md:px-6 md:py-3 rounded-full shadow-md hover:bg-orange-600 transition-all"
        >
          <span className="hidden sm:block">Search</span><i class="fa fa-chevron-circle-right text-black sm:hidden" aria-hidden="true"></i>
        </button>
      </div>
    );
  }
  