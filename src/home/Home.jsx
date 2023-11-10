import { Link } from "react-router-dom"

function Home() {
  return (
    <>
          <div className="mx-auto max-w-2xl mt-32 md:mt-8 lg:mt-8 sm-md:mt-32 sm:mt-64 sm:py-24">
          <div className="hidden sm:mb-6 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              We are now encapsulating our journeys into a Blog Post.{' '}
              <Link to="/blog" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Welcome to StoryVerseBooks
            </h1>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 opacity-[30%] sm:text-3xl mt-2" style={{WebkitTextStroke: '0.1px black', textStroke: '0.1px black',}}>
            - Your Literary Escape
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
            At StoryVerseBooks, we're more than just a bookstore; we're your portal to the enchanting world of books. Step into our world and discover an abundance of stories waiting to captivate your heart, spark your imagination, and expand your horizons.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/shop"
                className="rounded-md bg-indigo-600 hover:animate-bounce hover:bg-blue-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Shop Now
              </Link>
              <Link to="/about" className="text-sm font-semibold leading-6 text-gray-900 ">
                <span className="hover:text-blue-600 hover:animate-pulse">
                About Us <span aria-hidden="true">→</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
          >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
    </>
  )
}

export default Home