import React from 'react'
import Buttons from './Buttons';
import { useSelector } from 'react-redux';

const Sidebar = () => {

    const {close} = useSelector((store)=>store.youtube);
    
    const button1 = ["Home","Shorts","Subscription"];
    const buttons2 = ["Your channel","History","Playlist","Your Vidoes","Watch later","Liked vidoes"];
    const buttons3 = ["Trending","Shopping","Music","Movies","Live","Gaming","News0","Sports","Courses","Podccast"];

    //early return
   if(!close) return null;

   return (
    <div className='hidden md:block w-44 h-screen bg-gray-300 bg-opacity-50 mt-14 fixed'>
        <div className='flex flex-col items-start gap-2 p-2 m-auto w-44'>
        {button1.map((button1) => {
        return <Buttons button1 = {button1}/>
        })}
        </div>

        <div className='w-1/1 p-[0.5px] bg-gray-300'/>

        <div className='flex flex-col items-start gap-2 p-2 m-auto w-44'>
        {buttons2.map((button1) => {
        return <Buttons button1 = {button1}/>
        })}
        </div>

        <div className='w-1/1 p-[0.5px] bg-gray-300'/>
        
        <div className='flex flex-col items-start gap-2 p-2 m-auto w-44'>
        {buttons3.map((button1) => {
        return <Buttons button1 = {button1}/>
        })}
        </div>

    </div>
  )
}

export default Sidebar
