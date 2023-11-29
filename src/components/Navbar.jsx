import React, { useState } from 'react';
import { Outlet,Link } from 'react-router-dom';
import { UserContext } from "../UserContext";
import { useContext } from "react";

function Navbar() {
    const [isMenuOpen, setMenuOpen] = useState(false);
  

    const toggleMenu = () => {
      setMenuOpen(!isMenuOpen);
    };
    const handleLogout = async () => {
      try {
        // Send a POST request to the logout endpoint
        const response = await fetch('https://storyversebooks-api.vercel.app/logout', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userToken}`,
            // Include the token in the Authorization header if needed
          },
        });
  
        if (response.ok) {
          // Handle success, e.g., clear user information or redirect to login page
          setUserInfo('')
          setMenuOpen(false);
          localStorage.removeItem('sessionObject');
          sessionStorage.removeItem('userInfo');
          console.log('Logout successful');
        } else {
          // Handle error, e.g., display an error message to the user
          const errorData = await response.json();
          console.error('Logout failed:', errorData);
        }
      } catch (error) {
        console.error('Error during logout:', error);
      }
    };
  
    const {userInfo,setUserInfo}=useContext(UserContext)
    const {userToken, setUserToken}=useContext(UserContext)
  
  return (
    <div className="bg-blue-500 border-b border-gray-300">
      <nav className="relative px-4 py-4 flex justify-between items-center bg-white">
        <a className="text-xl font-bold leading-none" >
          StoryVerseBooks
        </a>
        <div className="lg:hidden ml-auto">
          <button className="navbar-burger flex items-center text-blue-600 p-3" onClick={toggleMenu}>
            <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul className={`hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6 ${isMenuOpen ? '' : 'hidden'}`}>
          <li className="text-black uppercase">
            <Link to="/" className="border-b border-gray-300">Home</Link>
          </li>
          <li className="text-black uppercase">
            <Link to="/about" className="border-b border-gray-300">About</Link>
          </li>
          <li className="text-black uppercase">
            <Link to="/shop" className="border-b border-gray-300">Shop</Link>
          </li>
          <li className="text-black uppercase">
            <Link to="/blog" className="border-b border-gray-300">Blog</Link>
          </li>
          <li className="text-black uppercase">
            {userInfo && (<Link to="/sell" className="border-b border-gray-300">Sell</Link>)}
          </li>
          
        </ul>
        <div>
      {userInfo ? (
       <>
         <Link to="/" className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold rounded-xl transition duration-200">
          Welcome, {userInfo}!
          </Link>
          <button onClick={handleLogout} className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200">Logout</button>
       </>
      ) : (
        <>
          <Link to="/login" className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold rounded-xl transition duration-200">
            Sign In
          </Link>
          <Link to="/register" className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200">
            Sign up
          </Link>
        </>
      )}
    </div>
      </nav>
      <div className={`navbar-menu relative z-50 ${isMenuOpen ? '' : 'hidden'}`}>
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" onClick={toggleMenu}></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <button className="navbar-close" onClick={toggleMenu}>
              <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div>
          <ul className="flex flex-col items-center space-y-8 mt-40">
            <li className="text-black uppercase" onClick={toggleMenu}>
            <Link to="/" className="border-b border-gray-300">Home</Link>
          </li>
          <li className="text-black uppercase" onClick={toggleMenu}>
            <Link to="/about" className="border-b border-gray-300">About</Link>
          </li>
          <li className="text-black uppercase" onClick={toggleMenu}>
            <Link to="/shop" className="border-b border-gray-300">Shop</Link>
          </li>
          <li className="text-black uppercase" onClick={toggleMenu}>
            <Link to="/blog" className="border-b border-gray-300">Blog</Link>
          </li>
          {userInfo&&(<li className="text-black uppercase" onClick={toggleMenu}>
            <Link to="/sell" className="border-b border-gray-300">Sell</Link>
          </li>)}
            </ul>
          </div>
          <div className="mt-auto">
            <div className="pt-6">
            {userInfo ? (
        // If the user is logged in, show a different set of links
        <>
          <Link to="/" onClick={toggleMenu} className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold bg-gray-50 hover:bg-gray-100 rounded-xl">
            Welcome, {userInfo}!
          </Link>
          <Link onClick={handleLogout} className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold text-white bg-blue-500 hover:bg-indigo-600 rounded-xl">
            Logout
          </Link>
        </>
      ) : (
        // If the user is not logged in, show the login and sign-up links
        <>
          <Link to="/login" onClick={toggleMenu} className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold bg-gray-50 hover:bg-gray-100 rounded-xl">
            Sign in
          </Link>
          <Link to='/register' onClick={toggleMenu} className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700 rounded-xl">
            Sign Up
          </Link>
        </>
      )}
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar