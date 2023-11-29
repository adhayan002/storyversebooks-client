import React, { useState } from 'react';
import { Outlet,Link } from 'react-router-dom';
import { UserContext } from "../UserContext";
import { useContext } from "react";
import Navbar from '../components/Navbar';
const Layout = () => {
 
  return (
   <>
     <div className='min-h-screen'>
      <Navbar />
      <Outlet />
    </div>
    
   </>
  );
};

export default Layout;
