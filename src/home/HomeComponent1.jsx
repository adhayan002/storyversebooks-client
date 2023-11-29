import { Link } from "react-router-dom"
import { UserContext } from "../UserContext";
import { useContext } from "react";

function HomeComponent1() {
  
  return (
    <>
   
   <div class="bg-white py-6 sm:py-8 lg:py-12 md:mt-12 mb-12 h-[90vh]">
   <div class="bg-white py-6 sm:py-8 lg:py-12 md:mb-12">
  <div class="mx-auto max-w-screen-xl px-4 md:px-8">
    <div class="grid gap-8 md:grid-cols-2 lg:gap-12">
      <div>
        <div class="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
          <img src="https://images.unsplash.com/photo-1573592371950-348a8f1d9f38?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&q=75&fit=crop&w=600&h=750" loading="lazy" alt="Photo by Martin Sanchez" class="h-full w-full object-cover object-center" />
        </div>
      </div>

      <div>
        <p class="text-center font-bold text-indigo-500 md:text-left">Who we are</p>

        <h1 class="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">Our competitive advantage</h1>

        <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
        As a bookstore application, we offer several competitive advantages over other e-commerce sellers. Firstly, we specialize in books, offering a wide selection of titles, including those from independent authors. This allows us to cater to a range of tastes and interests, providing a personalized shopping experience for book lovers. 
        Secondly, we operate 24/7, which is a significant advantage over traditional brick-and-mortar stores. Customers can browse and purchase books at their convenience, without being restricted by store opening hours. 
        Additionally, we have the ability to reach a global audience. As an e-commerce platform, we can serve customers from all over the world, further expanding our market reach. 
        Furthermore, we support emerging independent authors by offering them the chance to have their books displayed and host book signing events. This not only helps these authors gain visibility but also enriches our selection and draws in customers looking for unique, lesser-known titles.
        </p>

       
      </div>
    </div>
  </div>
</div>
  <div class="mx-auto max-w-screen-xl px-4 md:px-8">

    <div class="mb-10 mt-24 md:mb-16 h-[50%]">
      <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">What we provide</h2>

      <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">We are a bookstore who want to provide a safe and good space for all the book lovers out there.</p>
    </div>


    <div class="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
   

      <div class="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
        <a class="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
          <img src="https://images.pexels.com/photos/1907785/pexels-photo-1907785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" loading="lazy" alt="Photo by Minh Pham" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </a>

        <div class="flex flex-col gap-2">
        

          <h2 class="text-xl font-bold text-gray-800">
            <a class="transition duration-100 hover:text-indigo-500 active:text-indigo-600">Helping Independent Authors</a>
          </h2>

          <p class="text-gray-500">We plan to help independent authors by putting their books into Recommendations.</p>
        </div>
      </div>
     
      <div class="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
        <a class="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
          <img src="https://c1.wallpaperflare.com/preview/49/216/933/coffee-glasses-book-spoon.jpg" loading="lazy" alt="Book and Coffee" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </a>

        <div class="flex flex-col gap-2">

          <h2 class="text-xl font-bold text-gray-800">
            <a href="#" class="transition duration-100 hover:text-indigo-500 active:text-indigo-600">Providing Atmosphere</a>
          </h2>

          <p class="text-gray-500">We also have a little cafe and next to bookstore where you can read the books in daily section for free and also order yourself some treats :)</p>

         
        </div>
      </div>

      <div class="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
        <a class="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
          <img src="https://w0.peakpx.com/wallpaper/258/94/HD-wallpaper-the-greatest-bookstore-in-the-world-shop-books-painting-flowers-bicycle-store.jpg" loading="lazy" alt="Photo by Magicle" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </a>

        <div class="flex flex-col gap-2">

          <h2 class="text-xl font-bold text-gray-800">
            <a class="transition duration-100 hover:text-indigo-500 active:text-indigo-600">Instantly Available Titles</a>
          </h2>

          <p class="text-gray-500">All the new releases are available at earliest date possible!</p>

          
        </div>
      </div>

      
      <div class="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
        <a class="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
          <img src="https://i.pinimg.com/564x/9f/4b/9b/9f4b9b13548e042db4f0361978f088dc.jpg" loading="lazy" alt="Photo by Martin Sanchez" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </a>

        <div class="flex flex-col gap-2">

          <h2 class="text-xl font-bold text-gray-800">
            <a href="#" class="transition duration-100 hover:text-indigo-500 active:text-indigo-600">24/7 Availability</a>
          </h2>

          <p class="text-gray-500">This gives customers the flexibility to shop anytime, anywhere, which can be a significant advantage for those with unconventional work schedules or those who prefer shopping late at night</p>

        
        </div>
      </div>
      
    </div>
    <div className="bg-white pt-4 sm:pt-10 lg:pt-12 mt-12">
      <footer className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="flex flex-col items-center border-t pt-6">

          <nav className="mb-4 flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-start md:gap-6">
            <Link to="/about" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">About</Link>
            <Link className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Jobs</Link>
            <Link className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Press</Link>
            <Link to="/blog" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Blog</Link>
          </nav>
      
        </div>

        <div className="py-8 text-center text-sm text-gray-400">© 2023 - Present StoryVerseBooks. Crafted with the love of Books.</div>
      </footer>
    </div>
  </div>
</div>

    </>
  )
}

export default HomeComponent1