import {BsChevronCompactLeft,BsFillCollectionPlayFill } from "react-icons/bs";
import { AiOutlineSetting,AiOutlineMore } from "react-icons/ai";
import {FaRegCalendarAlt} from "react-icons/fa"
import {BsFillFileEarmarkTextFill,BsCoin} from "react-icons/bs"
import {MdOutlineContactSupport, MdPlaylistPlay} from "react-icons/md"
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

export default Menu;