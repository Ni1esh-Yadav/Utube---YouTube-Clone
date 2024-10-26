import React from 'react'
import MainContainer from './MainContainer'
import Sidebar from './Sidebar'

const Home = () => {
  return (
    <div className='flex overflow-hidden'>
      <Sidebar />
      <div className='md:ml-44 flex-1 overflow-auto'>
          <MainContainer />
      </div>
    </div>
  )
}

export default Home
