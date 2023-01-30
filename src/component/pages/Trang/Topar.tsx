import React from 'react'
import asset from '../../../assets/index';
import {FaRegCalendarAlt} from "react-icons/fa"
import Select from "react-select";
import { Link } from 'react-router-dom';
import { FaRegHeart, FaOpencart, FaRegUser } from "react-icons/fa";


const Topar = () => {
  return (
    <div className=" ">
        <div className=" text-white flex  h-10 text-center  border pr-20 flex-row-reverse">
        <div > {/*<img className="rounded-full w-[16px] h-[16px]  " src={asset.image.covn}/> */}</div>
        
         <div className=" self-center ">
            <select className="form-control bg-black border border-white ">
                <option className="option" > Tiếng Việt  </option>
                <option className="option">Tiếng Anh</option>
            </select>
          
         </div>
    </div>
    
    
       
  </div>
  )
}

export default Topar

