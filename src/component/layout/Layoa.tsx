import React from 'react'
import Login from '../pages/login/Login'
import Mnu3 from '../pages/Trang/Mnu3'
import Topar from '../pages/Trang/Topar'

type Props = {}

const Layoa = (props: Props) => {
  return (
    <div className="container flex ">
        <Mnu3/>
        <div >
            <Topar/>
            <Login/>
        </div>
    </div>
  )
}

export default Layoa