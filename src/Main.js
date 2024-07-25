import React from 'react'
import { ReactTyped } from 'react-typed'


const Main = () => {

  return (
    <div>

    <div id='main' className='flex md:h-[730px] bg-[#191f36] text-white pt-20'>

<div className=' pt-28 pl-20 md:w-[900px]  float-left'>

  
<span className='font-bold text-2xl'>Hi, Myself</span>
<h1 className='font-bold text-4xl pt-2'>Prateek </h1>
<h1 className='font-bold text-2xl pt-2'>And, I'm  a 
<span className='pl-1'>

<ReactTyped className='text-blue-400 font-bold'
strings={["Developer","Programmer","Coder"]}
typeSpeed={40}
backSpeed={50}
loop={true}

/>
  </span></h1>




<p className='font-semibold pt-5 text-justify w-3/4'>

I am a passionate software developer with expertise in full-stack web development. My main skills include working with the MERN stack MongoDB, Express.js, React, and Node.js. I thrive on solving complex problems and creating efficient, scalable solutions. I am continuously learning and keeping up with the latest industry trends and technologies. I enjoy collaborating with cross-functional teams to deliver high-quality software products.


</p>

<div className='w-3/4 pt-10 '>
<div className=' float-left'>
<h1 className='font-bold pl-5'>
  Available on
</h1>

<ul className='flex justify-between w-28 gap-4 pt-3'>


<img src='https://img.icons8.com/?size=50&id=8818&format=png'  alt=''
className='w-7 h-7'></img>

<img src='https://img.icons8.com/?size=50&id=lUktdBVdL4Kb&format=png'  alt=''
className='w-7 h-7'></img>

<img src='https://img.icons8.com/?size=50&id=37326&format=png'  alt=''  className='w-7 h-7'></img>

<img src='https://img.icons8.com/?size=50&id=8808&format=png'  alt='' 
className='w-7  h-7'></img>

</ul>

</div>

<div className='float-right  '>
<h1 className='font-bold '>
  Currently working on
</h1>

<div className='flex gap-4 pt-3'>
 
<img src='https://img.icons8.com/?size=80&id=Y9VdL7V5XPIc&format=png' alt='' className='w-7 h-7'>
</img>

<img src='https://img.icons8.com/?size=50&id=kg46nzoJrmTR&format=png' alt='' className='w-7 h-7'>
</img>

<img src='https://img.icons8.com/?size=50&id=58811&format=png' alt='' className='w-7 h-7'>
</img>

<img src='https://img.icons8.com/?size=32&id=FQlr_bFSqEdG&format=png' alt='' className='w-7 h-7'>
</img>
</div>
</div>

</div>
</div>


<div class="bg-[url('./ml1.png')] bg-blue-400 rounded-full md:h-[350px] md:w-[350px] bg-contain bg-no-repeat  mr-28 mt-28 ">

</div>

</div>





    </div>
  )
}

export default Main
