import React from 'react'

const about = () => {
  return (
      

<div id='about' className='  bg-[#262B40] md:h-[650px] w-full text-white flex justify-between '>


  <div className='pt-40 pl-72'>

     
<div className='  h-96 w-60 border-4 border-blue-400 rounded-2xl'>

<div className=' bg-[url("./ml2.png")] bg-contain bg-no-repeat h-96 rounded-2xl'></div>



</div>


  </div>

 
  <div className='md:w-[850px] pt-44 pr-48'>

  <div className='flex '>
    <h1 className=' font-bold text-5xl pr-2 pb-1 '>
      About 
    </h1>
    <h1 className=' font-bold text-5xl text-blue-400 pb-1'>Me</h1>
  </div>

  <span className='font-semibold text-3xl '>Web Developer</span>

  <p className=' font-semibold text-justify pt-3'>
  I am a dedicated web developer with a strong passion for creating dynamic websites. With experience in both front-end and back-end development, I specialize in the MERN stack—MongoDB, Express.js, React, and Node.js. My focus is on building user-friendly and efficient web applications that meet clients' needs and exceed their expectations. I stay updated with the latest technologies and trends to ensure my projects are modern and innovative. Problem-solving and attention to detail are my strengths, and I thrive in collaborative environments where I can contribute to team success.
  </p>

  <div className='pt-5'>

    
  <button className='h-10 w-28 bg-blue-400 rounded-3xl hover:bg-blue-700'>Read More</button>

  </div>


  </div>
      

  

  </div>

  )
}

export default about
