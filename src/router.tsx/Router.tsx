import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Login from '../component/pages/login/Login';
import Layoutlogin from '../component/layout/Layoutlogin';
import QMK from '../component/pages/login/QMK';
import Layoutmain from '../component/layout/Layoutmain';
import Thongtin from '../component/pages/thongtin/Thongtin';
import Slink from '../component/pages/login/Slink';
import Khobanghi from '../component/pages/Kho/Khobanghi';


type Props = {}

const Router = (props: Props) => {
  return (
    <div>
    <Routes>
   
        <Route path='/' element={<Layoutlogin/>}>
          <Route path='' element={<Login/>}/>
          <Route path='QMK' element={<QMK/>}/>
          <Route path='link' element={<Slink/>}/>
        </Route>
        <Route path='app' element={<Layoutmain/>}>   
          <Route path='thongtin' element={<Thongtin/>}></Route>
          <Route path='1' element={<Khobanghi/>}></Route>
        </Route>
    </Routes>
    
    </div>
  )
}

export default Router