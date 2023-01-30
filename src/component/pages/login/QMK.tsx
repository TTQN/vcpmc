import asset from '../../../assets/index';
import { Link } from 'react-router-dom';
import React, { Component,useContext,useState } from 'react'

type Props = {}

const QMK = (props: Props) => {
    
  return (
    <div className="  h-screen-login bg-[#334155]">
      <div className="flex flex-col justify-center items-center text-white">
          <div className="min-w-[500px]  p-10 border">
            <div>
                <img  className="rounded-full w-[100px] h-[100px] m-auto mb-14 " src={asset.image.logo}  />
            </div>
                <h2 className="text-center  text-2xl font-bold p-5">Khôi phục mật khẩu</h2>
                <div>Vui lòng nhập địa chỉ email đã đăng ký để yêu cầu khôi phục mật khẩu </div>
        <div className="flex flex-col mt-5 ">
          <div>Email</div>
          <input
            type="email"
            className="p-3  rounded-md  bg-[#475569] focus:outline-none focus:ring  "
          
          />
          
          
         
          
          <div className="self-center "> 
         
            <Link to="/link">
            <button
            type="button"
            className="p-3 pl-5 pr-5 mt-5 text-xl rounded-md bg-[#f97316] hover:text-black "
          >
           Đăng nhập
          </button>
            </Link>
          
          </div>
         
         
          </div>
        </div>
        <div className="underline hover:text-black text-[#f97316] text-center pt-36">
        <Link to="/" >Quay lại đăng nhập  </Link>
      </div>
      </div>

     
     
      </div>
  )
}

export default QMK