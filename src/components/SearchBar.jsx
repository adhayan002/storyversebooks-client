import React from 'react'

function SearchBar() {
  return (
    <div className="flex mt-8 items-center justify-center">
    <div className="flex space-x-1">
        <input
            type="text"
            className="block w-full px-4 py-2 text-black bg-white border rounded-full focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Search..."
        />
        <button className="px-4 text-white bg-blue-600 hover:animate-pulse rounded-full hover:bg-sky-700">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
            </svg>
        </button>
        </div>
</div>

  )
}

export default SearchBar