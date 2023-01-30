import React from 'react'
import Topar from '../pages/Trang/Topar'
import Login from '../pages/login/Login'
import Mnu3 from '../pages/Trang/Mnu3'
import {  Outlet} from 'react-router-dom';

const Layoutlogin = () => {
  return (
    <div className="main bg-[#334155]  ">
       
      <div className=" h-screen ">
       <Topar/>
       <Outlet/>
      
       </div>
      
    </div>
  )
}

export default Layoutlogin