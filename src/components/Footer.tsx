// import React from 'react'
// eslint-disable-next-line simple-import-sort/imports
import Image from 'next/image'

import Business from "../../public/images/BusinessLogo.png"
import Ustoa from "../../public/images/USTOA.png"
import textLogo from "../../public/images/textlogo.png"
import Facebook from "../../public/svg/facebook.svg"
import Instagram from "../../public/svg/instagram.svg"
import Linkedin from "../../public/svg/linkedin.svg"
import Phone from "../../public/svg/phone.svg"
import Accordion from './Accordian'

const Footer = () => {
  return (
    <div className='text-white'>
      <div className=' bg-[#212217] px-20 py-8'>
        <div className="sm:hidden md:hidden lg:flex justify-center gap-x-16">
          <div>
            <h1 className='text-body-1 font-bold'>Land Adventures</h1>
            <ul className='mt-2 font-regular'>
              <li className='font-regular my-2'>Africa & the Middle East</li>
              <li className='font-regular my-2'>Asia</li>
              <li className='font-regular my-2'>Central  & South America</li>
              <li className='font-regular my-2'>Europe</li>
              <li className='font-regular my-2'>South Pacific</li>
            </ul>
          </div>
          <div>
            <h1 className='text-body-1 font-bold'>Small Ship Adventures</h1>
            <ul className='mt-2 font-regular'>
              <li className='font-regular my-2'>Antarctica & the Arctic</li>
              <li className='font-regular my-2'>Middle East</li>
              <li className='font-regular my-2'>Italy & Mediterranean</li>
              <li className='font-regular my-2'>Scandinavia & The British Isles</li>
              <li className='font-regular my-2'>South America</li>
            </ul>
          </div>
          <div>
            <h1 className='text-body-1 font-bold'>O.A.T. Advantage</h1>
            <ul className='mt-2 font-regular'>
              <li className='font-regular my-2'>Solo Friendly Travel</li>
              <li className='font-regular my-2'>NEW O.A.T. Travelflix</li>
              <li className='font-regular my-2'>Best Price Guarantee</li>
              <li className='font-regular my-2'>Refer and Earn</li>
              <li className='font-regular my-2'>Private Groups</li>
              <li className='font-regular my-2'>Special Offers</li>
              <li className='font-regular my-2'>Sir Edmund Hillary Club</li>
              <li className='font-regular my-2'>Grand Circle Foundation</li>
              <li className='font-regular my-2'>Travel Protection Plan</li>
            </ul>
          </div>
          <div>
            <h1 className='text-body-1 font-bold'>Contact Us</h1>
            <ul className='mt-2 font-regular'>
              <li className='font-regular my-2'>People & Culture</li>
              <li className='font-regular my-2'>Reservations & Customer Service</li>
              <li className='font-regular my-2'>Frequently Asked Questions</li>
              <li className='font-regular my-2'>About Us</li>
              <li className='font-regular my-2'>Media Inquires</li>
              <li className='font-regular my-2'>Traveler Photo Contest</li>
              <li className='font-regular my-2'>Career Opportunities</li>
            </ul>
          </div>
        </div>
        <div className="block lg:hidden">
          <Accordion title="Land Adventures">
            <ul>
              <li>Africa & the Middle East</li>
              <li>Asia</li>
              <li>Central & South America</li>
              <li>Europe</li>
              <li>South Pacific</li>
            </ul>
          </Accordion>
        </div>
        <div className="mt-12 lg:flex justify-between items-center">
          <div className='flex items-center justify-center lg:justify-start gap-x-8'>
            <Image src={Business} alt='business' />
            <Image src={Ustoa} alt='USTOA' />
          </div>
          <div className='text-body-1 text-center mt-12 lg:mt-0'>
            <a href="">Terms & Conditions</a> | <a href="">Privacy Policy</a> | <a href="">Terms of Use</a> | <a href="">Medical Issues & Disabilities</a>
          </div>
        </div>
      </div>
      <div className=' bg-[#383826] text-center lg:text-left px-20 py-8 grid grid-cols-1 lg:grid-cols-4'>
        <div className='lg:col-span-2 md:order-2 lg:order-first'>
          <Image src={textLogo} alt='textLogo' className='mx-auto lg:mx-0' />
          <p className='text-body-1 mt-2'> 347 Congress St. • Boston, MA 02210</p>
          <p className='text-body-1 mt-1'> © 2024 Overseas Adventure Travel </p>
        </div>
        <div className='lg:flex justify-between lg:col-span-2 mb-8 lg:mb-0'>
          <div className='mb-8 lg:mb-0'>
            <h1 className='text-body-1 font-bold'>Family of Brands</h1>
            <ul className='mt-2'>
              <li className='mb-2'>Grand Circle Cruise Line</li>
              <li className='my-2'>Grand Circle Travel</li>
            </ul>
          </div>
          <div className='mb-8 lg:mb-0'>
            <h1 className='text-body-1 font-bold'>Regional Adventure Counselors</h1>
            <ul className='mt-2'>
              <li className='flex items-center justify-center lg:justify-start'>
                <Phone height={16} width={16} />
                <span className='ml-1 hover:underline'> 1-800-955-1925</span>
              </li>
            </ul>
          </div>
          <div className='mb-8 lg:mb-0'>
            <h1 className='text-body-1 font-bold'>Connect With Us</h1>
            <div className='flex items-center justify-center lg:justify-start gap-x-3 mt-2'>
              <Facebook height={40} width={40} className="hover:fill-[#00000040] focus:fill-[#00000040]" />
              <Instagram height={40} width={40} className="hover:fill-[#00000040] focus:fill-[#00000040]" />
              <Linkedin height={40} width={40} className="hover:fill-[#00000040] focus:fill-[#00000040]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer