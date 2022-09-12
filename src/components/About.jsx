import React from 'react'
import profileImg from '../assets/profile.jpeg'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black text-[#E1DFDF]'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
        <div className='about__img mt-1 flex justify-center items-center'>
          <img src={profileImg} alt="" />
        </div>
        <p className='text-xl mt-6 font-bold flex justify-center items-center'>
          Front-end Developer | Full-stack Developer | Freelancer
        </p>

        <br />

        <p className='text-xl'>
          I am a junior web developer with a passion for building beautiful and functional web pages and mini-programs. I am also a lifelong learner
          and I love exploring new technologies. Matcha and durian are my favourites, and I hope I can explore South America soon.🦙

          I am passionate about building software that improves the lives of those around me.
        </p>
      </div>
    </div>
  )
}

export default About
