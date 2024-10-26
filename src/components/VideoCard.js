import React from 'react'

const VideoCard = ({info}) => {
    const {statistics,snippet} = info;
    const {title,thumbnails} = snippet
    const {viewCount} = statistics
  return (
    <div className='w-72'>
      <img
      className='rounded-lg shadow-lg px-3 py-3 '
      alt='vidoes'
      src={thumbnails.medium.url}
      />
      <ul>
        <li>
            {title}
        </li>
        {/* <li>{channelTitle}</li> */}
        <li></li>
        <li>{viewCount} views</li>
      </ul>
    </div>
  )
}

export default VideoCard
