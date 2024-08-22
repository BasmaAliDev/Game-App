import React from 'react'
import { Outlet } from 'react-router-dom';
import Sidebar from '../Navbar/Navbar';
export default function Layout() {
  return <>
   <Sidebar/>
 {
 <div className='container py-5'>
   <Outlet></Outlet>
  </div> 
 }
  </>
}


