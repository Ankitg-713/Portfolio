import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div>
      <div className='flex items-center justify-center gap-4 lg:mb-0 mb-10'>
        <div className='lg:text-[8vw] text-[10vw] font-[font4]'>I'm </div>
        <div className='lg:text-[5vw] text-[7vw] font-[font5] mb-3 text-orange-outline font-black'>Ankit Kumar Gupta</div>
      </div>
      <div className='font-[font4] flex items-center justify-center gap-2 uppercase'>
        <Link to='/projects'>
          <div className='lg:border-4 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-22 md:h-20 flex items-center lg:pt-1 px-5 lg:px-10 border-white rounded-full'>
            <h1 className='text-[5vw] lg:mt-3 mt-1'>Projects</h1>
          </div>
        </Link>
        <Link to='/aboutme'>
          <div className='lg:border-4 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-22 md:h-20 flex items-center lg:pt-1 px-5 lg:px-10 border-white rounded-full'>
            <h1 className='text-[5vw] lg:mt-3 mt-1'>About Me</h1>
          </div>
        </Link>
      </div>
    </div>

  )
}

export default HomeBottomText
