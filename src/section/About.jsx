import React from 'react'

const About = () => {
  return (
    <div className=' dark:bg-black'>
        <div className=' flex flex-col gap-2 justify-center items-center dark:text-white'>
            <div className=' w-full h-px bg-black dark:bg-white '></div>
            <div className=' w-full h-1 bg-black dark:bg-white'></div>
            <p className=' text-2xl'>About Us</p>
            <p className='mx-5 text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, totam. Laudantium laborum quod repudiandae optio, officiis nesciunt aut voluptas quae repellendus.</p>
        </div>
    </div>
  )
}

export default About