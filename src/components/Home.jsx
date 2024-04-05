import React from 'react'
import dogWalk1 from '../assets/dogWalk1.gif'
import dogWalk from '../assets/dogWalk.gif'
import { TbArrowRightTail } from 'react-icons/tb'
import { Link } from 'react-scroll'

const Home = (theme) => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-900'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          {/* <p className='text-yellow-700'>Hi, my name is</p> */}
          <h2 className='pb-2 text-2xl sm:text-4xl font-bold text-[#F2F2F2]'>
            Roxanne Zhao
            <span className='text-2xl ml-2'>🖐🏻</span>
          </h2>
          <h2 className='text-xl sm:text-2xl font-bold text-[#E1DFDF]'>
            Full-stack Developer
          </h2>
          <p className='text-gray-500 py-2 max-w-md text-base'>
            I'm a full-stack developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building responsive full-stack web applications and mini programs.
          </p>
          <div>
            <Link to="portfolio" smooth duration={500} className='group text-white w-fit px-6 py-2 my-3 flex items-center rounded-md bg-gradient-to-r from-yellow-500 to-orange-500 cursor-pointer'>
              Portfolio
              <span className='group-hover:rotate-90 duration-300'>
                <TbArrowRightTail size={25} className='ml-1' />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={ theme === 'light-theme' ? dogWalk : dogWalk1}
            alt="my profile" className='rounded-3xl mx-auto w-2/3 md:w-full'/>
        </div>
      </div>
    </div>
  )
}

export default Home
