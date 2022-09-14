import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-gradient-to-b from-black via-black to-gray-800 p-4 text-[#E1DFDF]'>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
          <p className='text-3xl font-bold border-b-4 inline border-gray-500'>Contact</p>
          <p className='py-2'>Submit the form below to get in touch with me</p>
        </div>

        <div className='flex justify-center items-center'>
          <form action="https://getform.io/f/b2fd2813-5153-4ddf-bcc0-15a627073502" method="POST" className='flex flex-col w-full md:w-1/2'>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className='p-2 bg-transparent border-2 rounded-md text-[#E1DFDF] focus:outline-none'
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className='my-4 p-2 bg-transparent border-2 rounded-md text-[#E1DFDF] focus:outline-none'
            />
            <textarea
              name="message"
              rows="10"
              placeholder="Enter your message"
              className='p-2 bg-transparent border-2 rounded-md text-[#E1DFDF] focus:outline-none'>
            </textarea>
            <button className='text-white bg-gradient-to-b from-yellow-500 to-orange-500 px-4 py-3 my-6 mx-auto flex items-center rounded-md hover:scale-105 duration-300'>Let&apos;s Collaborate</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
