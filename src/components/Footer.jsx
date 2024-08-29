import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
            At Smile Beauty, we believe true beauty starts with a smile. Our luxurious, cruelty-free cosmetics are crafted with the finest ingredients to enhance your natural beauty, helping you feel confident and radiant. Whether for everyday elegance or a bold look, Smile Beauty is here to inspire your beauty journey.
            </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+66 064 064 3329</li>
                <li>Care@SmileBeauty.com</li>
            </ul>
        </div>

      </div>

        <div>
            <hr />
            
            <p className='py-5 text-sm text-center'>Copyright 2024 @ SmilesBeauty.com - All Right Reserved.</p>
        </div>

    </div>
  )
}

export default Footer
