import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { UserContext } from "../UserContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
function Book() {
  const [redirect,setRedirect]=useState(false)
  const { id } = useParams();
  const [productData, setProductData] = useState(null);
  const {userInfo}=useContext(UserContext)


  useEffect(() => {
    fetch(`https://storyversebooks-api.vercel.app/book/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProductData(data)})
      .catch((error) => console.error('Error fetching product data:', error));
  }, [id]);
  
  const handleDelete=()=>{
    fetch(`https://storyversebooks-api.vercel.app/book/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        console.log('Resource deleted successfully');
        setRedirect(true)
      })
      .catch(error => {
        console.error('Error deleting resource:', error);
      });
  }

  if(redirect){
    return (
      <div>
        <Navigate to={"/"} />
      </div>
    );
  }

  if (!productData) {
    return <div class="text-center mt-64">
    <div role="status">
        <svg aria-hidden="true" class="inline w-32 h-32 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        <span class="sr-only">Loading...</span>
    </div>
</div>
  }

  return (
    <section className="text-gray-600 body-font overflow-hidden w-[80%] mx-auto">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
    <img
        alt={productData.bookTitle}
        className="lg:w-1/3 h-96 w-full object-contain object-center rounded"
        src={productData.imageURL}
      />
      <div className="lg:w-2/3 w-full lg:pl-10 lg:py-6 mt-3 lg:mt-0"> {/* Adjusted margin-top (mt-3) */}
      <h2 className="text-sm title-font text-gray-500 tracking-widest">
        Sold By {productData.seller}
      </h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
          {productData.bookTitle}
        </h1>
        <h2 className="text-sm title-font text-gray-500 tracking-widest">
          By {productData.author}
        </h2>
        <p className="leading-relaxed">{productData.bookDescription}</p>
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
        </div>
       
        <div className="flex justify-between mt-6 items-center pb-5 mb-5">
        {productData.bookPDFURL && (
          <Link
            to={productData.bookPDFURL}
            className="flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read PDF
          </Link>
        )}
        {userInfo === productData.seller && (
          <Link
            className="flex text-white bg-black py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
            to={`/editbook/${id}`}
          >
            Edit
          </Link>
        )}
        {userInfo === productData.seller && (
          <button
            className="flex text-white bg-red-500 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
            onClick={handleDelete}
          >
            Delete
          </button>
        )}
      </div>
      </div>
    </div>
  </div>
</section>

  );
}

export default Book;
