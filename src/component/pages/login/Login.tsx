import asset from '../../../assets/index';
import { Link , useNavigate } from 'react-router-dom';
import {useState,useEffect} from 'react';
import isEmpty from 'validator/lib/isEmpty';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [validationMsg,setValidationMsg] = useState('')
  const history = useNavigate ()


  const onChangeName =(event: any)=>{
      const value = event.target.value
      setName(value)
  }

  const onChangePas =(event: any)=>{
    const value = event.target.value
    setPassword(value)
  }
  
  const validateAll =()=>{
    const msg =''
    const msg1= 'Hãy nhập tài khoản và mật khẩu'
    const msg2 ='Sai tên đăng nhập hoặc mật khẩu'
    if(isEmpty(name) || isEmpty(password)){
      setValidationMsg(msg1)
    }else if(name==='admin'&& password==='admin'){
      //setValidationMsg(msg2)
      history('/app/thongtin')
    } else{
      setValidationMsg(msg2)
    }

    return true
  }

  const onSubmitLogin = async()=>{
    const isValid = validateAll()
    if(!isValid) return 
  }
  
  return (
    <div className=" h-screen-login bg-[#334155]">
      <div className="flex flex-col justify-center items-center text-white">
          <div className="min-w-[500px]  p-10 border">
            <div>
                <img  className="rounded-full w-[100px] h-[100px] m-auto mb-14 " src={asset.image.logo}  />
            </div>
            <h2 className="text-center  text-2xl font-bold ">Đăng nhập</h2>
          <div className="flex flex-col mt-5 ">
            <div>Tên đăng nhập</div>
              <input
                type="text"
                id='ten'
                className="p-3  rounded-md  bg-[#475569] focus:outline-none focus:ring required"
                onChange={onChangeName}
              />
          
            <div className="mt-5">Password</div>
              <input
                type="password" 
                id='pass'
                className="p-3 rounded-md  bg-[#475569] focus:outline-none focus:ring  "
                onChange={onChangePas}
              />
              <p className="text-red-400 text-xs italic">{validationMsg}</p>
            <div className="pt-5  ">
              <input type="checkbox" /> Ghi nhớ đăng nhập
            </div>
          
            <div className="self-center "> 
         
           
              <button
                type="button"
                className="p-3 pl-5 pr-5 mt-5 text-xl rounded-md bg-[#f97316] hover:text-black"
                onClick={onSubmitLogin}
                > Đăng nhập
              </button>
              
              <ToastContainer />
             
              
            </div>
          </div>
        </div >
          <div className="underline hover:text-black text-[#f97316] text-center pt-20 ">
            <Link to="/QMK" >Quên mật khẩu?  </Link>
          </div>
      </div>

     
    </div>
  )
}

export default Login