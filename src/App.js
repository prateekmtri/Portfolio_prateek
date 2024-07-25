import React from 'react';
import Header from './header';
import About from './about';
import Portfolio from './portfolio';
import Experience from './experience';
import Contact from './contact';
import Home from './Main';
import Footer from './footer';
import { ReactTyped } from 'react-typed';
import { Toaster } from 'react-hot-toast';





const App = () => {
  return (


    <div className='App'>

      <div>
      <Header/>
        <Home/>
        <About/>
        <Portfolio/>
        <Experience/>
        <Contact/>
       <Footer/>
       </div>
       <Toaster
  position="bottom-right"
  reverseOrder={false}
/>

      

      
       </div>
       
      


      

      

      

      
    
  )
}

export default App


