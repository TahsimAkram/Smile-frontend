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
              <p>At Smile Beauty, we believe that true beauty begins with a smile. Our passion for cosmetics is rooted in the desire to help individuals express their unique selves with confidence and grace. We are committed to creating luxurious, cruelty-free products that not only enhance your natural beauty but also align with your values.</p>
              <p>Each of our products is thoughtfully crafted with the finest ingredients to ensure a superior experience, whether you’re elevating your daily routine or creating a bold new look. With Smile Beauty, you can trust that you’re choosing quality, innovation, and a commitment to your well-being. Let us inspire you to shine from within, every day.</p>
              <b className='text-gray-800'>Our Mission</b>
              <p>At Smile Beauty, our mission is to empower you to embrace and celebrate your natural beauty with confidence. We are dedicated to crafting luxurious, cruelty-free cosmetics that elevate your daily routine and enhance your unique features. By combining quality, innovation, and ethical practices, we aim to inspire self-expression and self-love, making every smile a testament to your inner radiance and strength.</p>
          </div>
      </div>

      <div className=' text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance:</b>
            <p className=' text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience:</b>
            <p className=' text-gray-600'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service:</b>
            <p className=' text-gray-600'>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
          </div>
      </div>

      <NewsletterBox/>
      
    </div>
  )
}

export default About
