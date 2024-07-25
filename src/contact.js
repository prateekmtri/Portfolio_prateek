import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_4nn3tdn', 'template_vwpjs8d', form.current, 'QBj8nR4xBGyk0NqLu')
      .then(
        () => {
          toast.success('Email sent successfully!');
        },
        (error) => {
          toast.error('Failed to send email. Please try again.');
          console.error('FAILED...', error.text);
        },
      );
  };

  return (
    <div id='contact' className='w-full md:h-[750px] bg-[#262B40] text-white'>
     
      <h1 className='font-bold text-3xl pt-24 underline pl-20 pb-5'>Contact Me</h1>
      <p className='pl-20 font-bold text-xl'>Please fill out the form below to contact me</p>

      <div className='pt-20 md:pl-[550px]'>
        <form ref={form} onSubmit={sendEmail} className='md:h-[450px] w-96 bg-[#262B40] border-4 border-blue-400 rounded-2xl p-14'>
          <div>
            <h1 className='font-bold text-xl'>Name</h1>
            <input type="text" placeholder='Enter Your name' name="to_name" className='text-black w-52 rounded-md h-8 p-5'/>
          </div>
          <div className='pt-10 pb-10'>
            <h1 className='font-bold text-xl'>Email</h1>
            <input type="email" placeholder='Enter Your Email' name="from_name" className='text-black w-52 rounded-md h-8 p-5'/>
          </div>
          <div className='pb-6'>
            <h1 className='font-bold text-xl'>Message</h1>
            <textarea name="message" placeholder='Message' className='text-black w-52 rounded-md h-14 pt-2 pl-4'/>
          </div>
          <button className='bg-blue-400 hover:bg-blue-800 h-10 w-20 rounded-2xl'>
            <input type="submit" value="Send"/>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
