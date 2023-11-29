import React from 'react'
import { Link } from 'react-router-dom'
import "../components/custom.css"

function BookList({ data }) {
  return (
    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 mb-4 text-center">
  <div class="relative h-64 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
    <img src={data.imageURL} alt={data.bookTitle} className="w-full h-full object-cover" />
  </div>
  <div class="p-6 bg-white rounded-b-xl">
    <h2 class="mb-2 text-xs sm:text-sm md:text-base lg:text-sm xl:text-base font-bold leading-snug text-blue-gray-900 whitespace-nowrap">
      {data.bookTitle}
    </h2>
    <p class="text-xs sm:text-sm md:text-base lg:text-sm xl:text-base font-semibold leading-relaxed text-inherit whitespace-nowrap">
      {data.author}
    </p>
    <p class="text-xs sm:text-sm md:text-base lg:text-sm xl:text-base font-light leading-relaxed text-inherit whitespace-nowrap">
      {data.category}
    </p>
    <div className="mt-4">
        <Link
            to={`/book/${data._id}`}
            className="rounded-lg bg-blue-600 py-3 px-6 text-xs sm:text-sm md:text-base lg:text-sm xl:text-base font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            data-ripple-light="true"
        >
            Read More
        </Link>
    </div>
  </div>
</div>


  
  )
}

export default BookList;
