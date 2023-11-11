import { Link } from "react-router-dom"

const links = [
  { name: 'Home', href: '/' },
  { name: 'Shop', href: '/shop' },
  { name: 'Blog', href: '/blog' },

]

function About() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 h-screen">
    <div className="relative ">
      <img
        src="https://w.wallhaven.cc/full/p8/wallhaven-p8xr3e.jpg"
        alt=""
        className="absolute inset-0 h-full w-full -z-10 object-cover object-right md:object-center"
      />
      <div className="absolute inset-0 bg-black opacity-50 -z-9"></div>
    </div>
      
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl mt-7 lg:mt-32 px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">About Us</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
          Welcome to <span className="font-extrabold">StoryVerseBooks</span>, where a world of literary wonders awaits you! We are not just a bookstore; we are your gateway to the realms of imagination, knowledge, and inspiration.
          At <span className="font-extrabold">StoryVerseBooks</span>, we have a deep passion for the written word and a commitment to sharing that passion with our community. Our bookstore is more than just a place to purchase books; it's a place to discover new adventures, embark on intellectual journeys, and connect with stories that touch your heart and soul.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
          {links.map((link) => (
            <Link key={link.name} to={link.href}>
            {link.name} <span aria-hidden="true">&rarr;</span>
          </Link>
        ))}
        </div>

        </div>
      </div>
    </div>
  )
}

export default About