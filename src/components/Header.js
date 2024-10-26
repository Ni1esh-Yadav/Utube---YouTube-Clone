import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { FaYoutube } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { IoMic } from "react-icons/io5";
import { MdOutlineEmergencyRecording } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoNotifications } from "react-icons/io5";
import { useDispatch} from 'react-redux';
import {hide} from '../redux/slice'
import { useNavigate } from 'react-router-dom';


const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    // let close = useSelector((store)=>store.youtube.close);

    const handleHamburg = ()=>{
        dispatch(hide())
    }

    const handleUtube =()=>{
        dispatch(hide());
        navigate('/')
    }

  return (
    <div>
        <nav className='flex justify-between bg-white p-3 w-full fixed '>
            <div >
                <ul className='flex gap-3 px-1 py-1'>
                    <li>
                    <button onClick={handleHamburg}><RxHamburgerMenu size={25} /></button>
                     </li>
                     <li>
                     <button onClick={handleUtube}><FaYoutube size={25} /></button>
                     </li>
                 </ul>
              </div>
            <div className='gap-3 flex' >
                <ul className='flex p-1'>
                    <li>
                        <input className=" w-20 md:w-96 px-1 py-1 focus:outline-none focus:ring-0 focus:ring-gray-200 rounded-l-full bg-[rgba(204,204,206,0.6)]"
                            type='text'
                            placeholder=' Search'
                        />
                    </li>
                    <li>
                        <button className="w-12 px-1 py-1 bg-gray-200 rounded-r-full"><IoSearchOutline size={25}/></button>
                    </li>
                </ul>
                <button className='px-1 py-1'><IoMic size={25} /></button>
            </div>
            <div>
                <ul className='flex gap-3 '>
                    <li>
                        <button className=' px-1 py-1 hidden md:block'><MdOutlineEmergencyRecording size={25}/></button>
                    </li>
                    <li>
                        <button className='px-1 py-1 hidden md:block'><IoNotifications size={25}/></button>
                    </li>
                    <li>
                        <button className='px-1 py-1 md:block'><CgProfile size={25}/></button>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Header
