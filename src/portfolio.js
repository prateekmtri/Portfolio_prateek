import React from 'react'

const portfolio = () => {
  return (

    <div id='portfolio' class='bg-[#191f36] text-white'>

      <h1 className='font-bold text-3xl pl-20 pt-10 underline'>Project</h1>
    <div className='p-20 flex justify-between'>
       <div className='md:h-[630px] md:w-[600px]  bg-[#262B40]'>

        <div className=' flex'>
          <div class="bg-[url('./p1.png')] h-40 w-60 bg-contain bg-no-repeat m-5 hover:scale-150 duration-700 "></div>
          <div class="bg-[url('./mttripathi.png')] h-40 w-60 bg-contain bg-no-repeat m-5 hover:scale-150 duration-700 "></div>
        </div>

        
        <div className=' flex'>
          <div class="bg-[url('./p2.png')] h-40 w-60 bg-contain bg-no-repeat m-5 hover:scale-150 duration-700 "></div>
          <div class="bg-[url('./p3.png')] h-40 w-60 bg-contain bg-no-repeat m-5 hover:scale-150 duration-700 "></div>

        </div>

        <div className='font-bold text-xl pl-4'>Duo Studio</div>
        <p className='text-lg p-4'>Welcome to our Duo Studio, where creativity meets collaboration! Explore your potential in a space designed for inspiration and productivity</p>

        <div className='flex gap-4 pl-6 '>
          <button className='h-12 w-24 rounded-md bg-blue-500 text-white hover:bg-blue-800'>Video</button>
          <button className='h-12 w-32 rounded-md bg-green-500 text-white hover:bg-green-700 '>Source code</button>
        </div>
      </div>





      <div className='md:h-[630px] md:w-[600px]  bg-[#262B40]'>

        <div className=' flex'>
          <div class="bg-[url('./p8.png')] h-40 w-60 bg-contain bg-no-repeat m-5 hover:scale-150 duration-700"></div>
          <div class="bg-[url('./p6.png')] h-40 w-60 bg-contain bg-no-repeat m-5 hover:scale-150 duration-700"></div>
        </div>

        
        <div className=' flex'>
          <div class="bg-[url('./p7.png')] h-40 w-60 bg-contain bg-no-repeat m-5 hover:scale-150 duration-700"></div>
          <div class="bg-[url('./p5.png')] h-40 w-60 bg-contain bg-no-repeat m-5 hover:scale-150 duration-700"></div>
        </div>


        <div className='font-bold text-xl pl-4'>Sweet Shop</div>
        <p className='text-lg p-4'>Experience the sweetness that brings smiles to every face.Savor the joy of freshly made sweets in every bite.
Let our sweets be a part of your sweetest moments.</p>

        <div className='flex gap-4 pl-6 '>
          <button className='h-12 w-24 rounded-md bg-blue-500 text-white hover:bg-blue-800'>Video</button>
          <button className='h-12 w-32 rounded-md bg-green-500 text-white hover:bg-green-700 '>Source code</button>
        </div>
      </div>




    </div>


    </div>
  )
}

export default portfolio
