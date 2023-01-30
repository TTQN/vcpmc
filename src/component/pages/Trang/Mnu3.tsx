import {BsChevronCompactLeft,BsFillCollectionPlayFill } from "react-icons/bs";
import React, { Component,useContext,useState } from 'react'
import { AiOutlineSetting,AiOutlineMore } from "react-icons/ai";
import {FaRegCalendarAlt} from "react-icons/fa"
import {BsFillFileEarmarkTextFill,BsCoin} from "react-icons/bs"
import {MdOutlineContactSupport, MdPlaylistPlay} from "react-icons/md"
import asset from '../../../assets/index';
import { Link } from 'react-router-dom';

const Mnu3 = () => {
    const Menu =[
        {
            id:1,
            title: "Kho bản ghi",
            icon: <BsFillCollectionPlayFill/>,
            
        },
        {
            id:2,
            title: "Playlist",
            icon: <MdPlaylistPlay/>,
           
        },
        {
            id:3,
            title: "Lập lịch phát",
            icon: <FaRegCalendarAlt/>,
           
        },
        {
            id:4,
            title: "Quản lý",
            icon: <BsFillFileEarmarkTextFill/>,
            submenu: true,
            submenuItems:[
                { title: "Quản lý"},
                { title: "Quản lý"},
                { title: "Quản lý"},
            ]
        },
        {
            id:5,
            title: "Doanh thu",
            icon: <BsCoin/>,
            submenu: true,
            submenuItems:[
                { title: "Doanh thu"},
                { title: "Doanh thu"},
                { title: "Doanh thu"},
            ]
        },
        {
            id:6,
            title: "Cài đặt",
            icon: < AiOutlineSetting/>,
            submenu: true,
            submenuItems:[
                { title: "Cài đặt"},
                { title: "Cài đặt"},
                { title: "Cài đặt"},
            ]
        },
        {
            id:7,
            title: "Hỗ trợ",
            icon: <MdOutlineContactSupport/>,
            submenu: true,
            submenuItems:[
                { title: "Hỗ trợ"},
                { title: "Hỗ trợ"},
                { title: "Hỗ trợ"},
            ]
        },
    ]
    

    const[open,setOpen]= useState(true);

    const[submenuOpen,setsubmenuOpen]= useState(false);
    
   
    const [idTitle,setidTitle] = useState(0);
    const handleHover = (idTitle: number)=>{
        setidTitle(idTitle); 
       
    }   

  return (
    <div className=" bg-[#0f172a]  ">
        <div className={`  h-screen p-5 pt-8 rounded-r-xl l-10 ${ open ? "w-42": "w-1"}  relative `}>
                <BsChevronCompactLeft className={`text-[#f97316] text-3xl  absolute -right-1 top-2/4 cursor-poiter  ${!open &&  "rotate-180"} ${open &&  "text-black"}`} 
                onClick={()=> setOpen(!open)}/>
            <div>
                <img  className="rounded-full w-[60px] h-[60px] m-auto mb-14 " src={asset.image.logo}  />
            </div>

            <ul className="pt-2 text-white">
                {Menu.map((menu,index)=>(
                    <>
                        <li key={index} className={`   hover:border-l-2 border-amber-600 hover:text-[#f97316] p-3 text-center  ${!open && "hidden"} ${idTitle===menu.id && "text-[#f97316]"} `} onClick={()=>handleHover(menu.id)} >
                            <span className="block ml-7 text-2xl ">
                                {menu.icon} 
                            </span>
                            <Link to={`/app/${menu.id}`}> <span className={``}> {menu.title}  </span></Link>
                            
                            <div className={` inline-block absolute right-2 `} >
                                    {menu.submenu && (
                                        <AiOutlineMore className={` text-3xl  `}  onClick={()=> setsubmenuOpen(!submenuOpen)}/>
                                    )}
                            </div>
                           
                        </li>
                        {menu.submenu && submenuOpen && open &&(
                            <ul>
                                {menu.submenuItems.map((submenuOpen,index)=>
        
                                    <li key={index} className={` text-white  hover:border-l-4 border-amber-600 hover:text-[#f97316] p-3 text-center `}>
                                    {submenuOpen.title}

                                </li>
                                
                                
                                )}
                            </ul>
                            )}
                    </>
                )) }
            </ul>

        </div>

       
    </div>
  )
}

export default Mnu3