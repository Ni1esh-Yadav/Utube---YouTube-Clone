import React, { useEffect, useState } from 'react'
import {YOUTUBE_API} from '../redux/constant'
import VideoCard from './VideoCard';
import { NavLink } from 'react-router-dom';

const VideoContainer = () => {
    const[videos,setVidoes] = useState([]);
    useEffect(() => {
        getVideo();
    },[])

    const getVideo = async () =>{
        const data = await fetch(YOUTUBE_API);
        const res = await data.json()
        setVidoes(res.items)
    }
    console.log(videos);
    

  return (
    <div className='flex flex-wrap items-center justify-center'>
        {videos.map((video) => {
            return <NavLink to = {'/watch?v='+ video.id} key={video.id}><VideoCard  info = {video} /></NavLink> 
        })}
      
    </div>
  )
}

export default VideoContainer
