import React from 'react'
import asset from '../../../assets/index';
import { Link } from 'react-router-dom';

type Props = {}

const Slink = (props: Props) => {
  return (
    <div>
        <div className="  h-screen-login bg-[#334155]">
      <div className="flex flex-col justify-center items-center text-white">
          <div className="min-w-[500px]  p-10 border">
            <div>
                <img  className="rounded-full w-[100px] h-[100px] m-auto mb-14 " src={asset.image.logo}  />
            </div>
            <div className="text-center">
                <h2 className="  text-2xl font-bold p-5">Khôi phục mật khẩu</h2>
                <div>Link khôi phục mật khẩu đã được gửi vào mail của bạn. Vui lòng kiểm tra mail.</div>
                <div>    Click vào đường link được đính kèm trong mail để chuyển đến trang đặt lại mật khẩu </div>
            </div>
        
        </div>
        <div className="underline hover:text-black text-[#f97316] text-center pt-72">
        <Link to="/" >Quay lại đăng nhập  </Link>
      </div>
      </div>

     
     
      </div>
    </div>
  )
}

export default Slink