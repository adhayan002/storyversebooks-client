import React from 'react'
import "../components/custom.css"

function Blog() {
  return (
    

<div className="max-w-[75%] mx-auto mt-16 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col lg:flex-row">
    {/* Image Section */}
    <div className='lg:w-1/3 lg:order-first'>
        <img className="rounded-t-lg lg:rounded-l-lg lg:rounded-t-none w-full lg:h-full object-cover" src="https://static01.nyt.com/images/2017/05/11/t-magazine/bookstore-slide-2MCD/bookstore-slide-2MCD-superJumbo.jpg?quality=75&auto=webp" alt="" />
    </div>

    {/* Text Section */}
    <div className="p-5 lg:w-2/3">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">A New Beginning</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Embarking on an exciting literary journey, our beloved bookstore is thrilled to announce the inauguration of a new blog, a sanctuary crafted for the celebration of our profound love for books. This digital space is a testament to our unwavering passion for the written word, aiming to create a vibrant community where fellow book enthusiasts can converge. In each carefully curated post, we delve into the magical realms of literature, share insightful reviews, and explore the diverse landscapes of storytelling. Our blog is not merely a collection of words; it is an ode to the profound impact that books have on our lives, fostering a community united by the shared joy of reading. Join us in this adventure as we traverse the endless corridors of imagination and knowledge, weaving together a tapestry of literary appreciation that mirrors our enduring commitment to the art of storytelling. Welcome to a haven where every page turned is a step into a world of endless possibilities.
        </p>
    </div>
</div>



  )
}

export default Blog