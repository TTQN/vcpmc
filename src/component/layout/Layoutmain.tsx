import React from 'react'
import Topar from '../pages/Trang/Topar'
import Mnu3 from '../pages/Trang/Mnu3'
import { Outlet } from 'react-router-dom';
type Props = {}

const Layoutmain = (props: Props) => {
  return (
    <div className=" ">
        <div className=" flex  ">
          <Mnu3/>
          <div className='border w-menu bg-[#334155] '>
            <Topar/>
            <Outlet/>
          </div>
        </div>
    </div>
  )
}

export default Layoutmain