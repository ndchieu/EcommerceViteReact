import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {


  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolor expedita, corporis magni aperiam asperiores tempore corrupti veniam. Deserunt, esse.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis optio inventore unde enim! Esse perferendis nobis eligendi consequatur, quisquam debitis.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo corporis quidem culpa perferendis est magni nobis animi et. Eaque, debitis ipsa. Ex odio deserunt nisi animi illo vero, repellat molestias?</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE USE'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quantity Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero aspernatur eius, suscipit possimus deleniti nam voluptatibus error quas quibusdam minus!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero aspernatur eius, suscipit possimus deleniti nam voluptatibus error quas quibusdam minus!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero aspernatur eius, suscipit possimus deleniti nam voluptatibus error quas quibusdam minus!</p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default About
