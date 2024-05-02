import React, { useState,useEffect } from 'react';
import { UserContext } from "../UserContext";
import { useContext } from "react";
import {  Navigate,useParams } from "react-router-dom";


function Sell() {
  const { userInfo } = useContext(UserContext);
  const [redirect,setRedirect]=useState(false)
    const [formData, setFormData] = useState({
        bookTitle: '',
        seller:userInfo,
        category: '',
        author: '',
        imageURL: '',
        bookDescription: '',
        bookPDFURL: '',
      });

      useEffect(() => {
        console.log('Component re-rendered. userInfo:', userInfo);
        setFormData(prevFormData => ({
          ...prevFormData,
          seller: userInfo,
        }));
      }, [userInfo]);
   
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

 
    
    const handleSubmit = async (e) => {
  e.preventDefault();

  // Additional validation
  if (!formData.bookTitle || !formData.category || !formData.author || !formData.imageURL || !formData.bookDescription) {
    console.error('All fields must be filled.');
    return;
  }

  try {
    const response = await fetch('https://svbooks-api.vercel.app/upload-book', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      console.log('Data successfully posted!');
      setFormData({
        bookTitle: '',
        seller: '',
        category: '',
        author: '',
        imageURL: '',
        bookDescription: '',
        bookPDFURL: '',
      });
      setRedirect(true);
    } else {
      console.error('Failed to post data');
    }
  } catch (error) {
    console.error('Error posting data:', error);
  }
};

      if (redirect) {
        return <Navigate to={`/shop`} />;
      }
      
    
  return (
    <>
        <h1 className='text-4xl font-thin text-gray-900 text-center mt-4'>Sell Your Book</h1>
        <form onSubmit={handleSubmit} className="w-[90%] max-w-lg mx-auto mt-12">
      <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="bookTitle">
            Book Title
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            id="bookTitle"
            type="text"
            name="bookTitle"
            value={formData.bookTitle}
            onChange={handleChange}
            required
          />
        </div>
        <div className="w-1/2 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="category">
            Category
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            id="category"
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </div>
      </div>


      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-1/2 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="author">
            Author
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            id="author"
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
          />
        </div>
        <div className="w-1/2 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="imageURL">
            Image URL
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            id="imageURL"
            type="text"
            name="imageURL"
            value={formData.imageURL}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="bookDescription">
            Book Description
          </label>
          <textarea
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            id="bookDescription"
            name="bookDescription"
            value={formData.bookDescription}
            onChange={handleChange}
            rows="4"
            required
          ></textarea>
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="bookPDFURL">
            Book PDF URL
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            id="bookPDFURL"
            type="text"
            name="bookPDFURL"
            value={formData.bookPDFURL}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-indigo active:bg-indigo-800"
        >
          Submit
        </button>
      </div>
    </form>
    </>
  )
}

export default Sell
