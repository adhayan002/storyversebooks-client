import React from 'react'

function Footer() {
  return (
<div className="bg-white pt-4 sm:pt-10 lg:pt-12">
      <footer className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="flex flex-col items-center border-t pt-6">

          <nav className="mb-4 flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-start md:gap-6">
            <Link to="/about" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">About</Link>
            <Link className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Jobs</Link>
            <Link className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Press</Link>
            <Link to="/blog" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Blog</Link>
          </nav>
      
        </div>

        <div className="py-8 text-center text-sm text-gray-400">© 2023 - Present StoryVerseBooks. All rights reserved.</div>
      </footer>
    </div>
  )
}

export default Footer