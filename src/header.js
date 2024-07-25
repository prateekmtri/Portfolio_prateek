import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll';

const header = () => {
  return (
    <div className='  '>

<div className='justify-between flex h-20 w-full fixed  text-white bg-[#191f36] '>



<div className='pl-20 pt-4'>

<h1 className='text-4xl font-bold'> Portfolio</h1>


</div>


<div className='pt-5 pr-20'>


<nav className=''>
<ul className=''>

  <Link
  className='pr-5  text-lg'
    activeClass="active"
    to="main"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
  >
    Home
  </Link>


  <Link
   className='pr-7 text-lg'
    activeClass="active"
    to="about"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
  >
    About
  </Link>


  <Link
   className='pr-7 text-lg'
    activeClass="active"
    to="portfolio"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
  >
    Project
  </Link>
  
  <Link
   className='pr-7 text-lg'
    activeClass="active"
    to="exp"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
  >
    Experience
  </Link>

  <Link
   className='pr-7 text-lg'
    activeClass="active"
    to="contact"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
  >
    Contact
  </Link>

</ul>
</nav>

</div>



</div>









    </div>
  )
}

export default header
