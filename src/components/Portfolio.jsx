import React from 'react'
import synapse from '../assets/portfolio/synapse.png'
import furryfun from '../assets/portfolio/furryfun.png'
import mengcupcake from '../assets/portfolio/mengcupcake.png'
import musicPlayer from '../assets/portfolio/musicPlayer.png'
import { SiRubyonrails } from "react-icons/si"
import { SiReact } from "react-icons/si"
import { DiJavascript1 } from "react-icons/di"


const Portfolio = () => {

  const portfolio = [
    {
      id: 1,
      src: synapse,
      title: "Synapse - Wechat MP",
      icon: <> <SiRubyonrails size={30} /> <DiJavascript1 size={20} /> </>,
      demoLink: "https://synapse.roxannezhao.com",
      codeLink: "https://github.com/RoxanneZhao199/Synapse_frontend"
    },
    {
      id: 2,
      src: furryfun,
      title: "FurryFun - Wechat MP",
      icon: <> <SiRubyonrails size={30} /> <DiJavascript1 size={20} /> </>,
      demoLink: "https://furryfun.roxannezhao.com",
      codeLink: "https://github.com/SueLuoHang/Furryfunbackend"
    },
    {
      id: 3,
      src: mengcupcake,
      title: "Meng's Cupcake",
      icon: <SiReact size={25}/>,
      demoLink: "https://mengcupcake.roxannezhao.com",
      codeLink: "https://github.com/RoxanneZhao199/cake-store"
    },
    {
      id: 4,
      src: musicPlayer,
      title: "Customize Music Player",
      icon: <DiJavascript1 size={25} />,
      demoLink: "https://custom-music-player.pages.dev/",
      codeLink: "https://github.com/RoxanneZhao199/Custom-Music-Player"
    }
  ]

  return (
    <div name='portfolio' className='bg-gradient-to-b from-black via-black to-gray-800 w-full text-[#E1DFDF] md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-3xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
          <p className='py-2'>Check out some of my recent work</p>
        </div>

        <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-8'>
        {
          portfolio.map(({ id, src, title, icon, demoLink, codeLink }) => (
            <div key={id} style={{ backgroundImage: `url(${src})` }} className='shadow-md shadow-gray-600 rounded-lg group container flex justify-center items-center mx-auto content-div'>

              {/* Hover Effects */}
              <div className='opacity-0 group-hover:opacity-100 px-10'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  {title}
                  <p className='flex items-center justify-evenly text-yellow-700'>{icon}</p>
                </span>
                <div className='pt-8 text-center'>
                  <a href={demoLink} target='_blank' rel="noreferrer">
                    <button className='text-center rounded-md px-4 py-2 m-2 bg-[#E1DFDF] text-gray-700 font-bold text-lg duration-200 hover:scale-105'>Demo</button>
                  </a>
                  <a href={codeLink} target='_blank' rel="noreferrer">
                    <button className='text-center rounded-md px-4 py-2 m-2 bg-[#E1DFDF] text-gray-700 font-bold text-lg duration-200 hover:scale-105'>Code</button>
                  </a>

                </div>
              </div>
            </div>
        ))
          }

        </div>
      </div>
    </div>
  )
}

export default Portfolio
