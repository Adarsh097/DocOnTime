import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-xl pt-10'>
      <p className='font-medium'><span className='text-gray-600'>ABOUT</span> US</p>
      </div>

      <div className='flex flex-col my-10 md:flex-row gap-12 items-center'>
        <img className='w-full max-w-[360px] rounded-lg outline-none drop-shadow-xl' src={assets.about_image} alt="" />
        <div className='text-gray-600 tracking-wide flex flex-col gap-6 md:2/4 text-sm'>
          <p>Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
          <p>Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
        </div>
      </div>
      <div>
        <p className='text-gray-800 font-medium'>Why <span className='text-gray-500'>Choose Us</span></p>
      </div>

      {/* CARD BOTTOM */}
      <div className='flex flex-col md:flex-row gap-5 mt-10 text-center md:text-left text-gray-600'>
        <div className='border border-gray-200 rounded-xl p-3 hover:shadow-xl outline-none hover:border-none hover:bg-gradient-to-bl hover:from-white hover:to-sky-300 transition-all duration-300'>
          <p className='text-gray-800 font-medium text-lg pb-5'>Efficiency:</p>
          <p className='pb-3 tracking-wide text-sm leading-6'>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div  className='hover:bg-gradient-to-bl hover:from-white hover:to-sky-300  border border-gray-200 rounded-xl p-3 hover:shadow-xl outline-none hover:border-none transition-all duration-300'>
          <p className='text-gray-800 font-medium text-lg pb-5'>Convenience:</p>
          <p className='pb-3 tracking-wide text-sm leading-6'>Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div  className='hover:bg-gradient-to-bl hover:from-white hover:to-sky-300 border border-gray-200 rounded-xl p-3 hover:shadow-xl outline-none hover:border-none transition-all duration-300'>
          <p className='text-gray-800 font-medium text-lg pb-5'>Personalization:</p>
          <p className='pb-3 tracking-wide text-sm leading-6'>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>
    </div>

  )
}

export default About
