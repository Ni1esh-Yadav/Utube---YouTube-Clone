import React from 'react'
import Buttonlist from './Buttonlist'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    <div className='overflow-hidden flex flex-col items-center justify-center'>
      <Buttonlist />
      <VideoContainer/>
    </div>
  )
}

export default MainContainer
