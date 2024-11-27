
import Image from 'next/image'
import Link from 'next/link'

import Facebook from "@/assets/svg/facebook.svg"
import Instagram from "@/assets/svg/instagram.svg"
import Linkedin from "@/assets/svg/linkedin.svg"
import Phone from "@/assets/svg/phone.svg"

import Accordion from './Accordian'

const Footer = () => {
  const footerLinks = [
    {
      heading: "Land Adventures",
      links: [
        { name: "Africa & the Middle East", link: "/" },
        { name: "Asia", link: "/" },
        { name: "Central & South America", link: "/" },
        { name: "Europe", link: "/" },
        { name: "South Pacific", link: "/" }
      ]
    },
    {
      heading: "Small Ship Adventures",
      links: [
        { name: "Antarctica & the Arctic", link: "/" },
        { name: "Middle East", link: "/" },
        { name: "Italy & Mediterranean", link: "/" },
        { name: "Scandinavia & The British Isles", link: "/" },
        { name: "South America", link: "/" }
      ]
    },
    {
      heading: "O.A.T. Advantage",
      links: [
        { name: "Solo Friendly Travel", link: "/" },
        { name: "NEW O.A.T. Travelflix", link: "/" },
        { name: "Best Price Guarantee", link: "/" },
        { name: "Refer and Earn", link: "/" },
        { name: "Private Groups", link: "/" },
        { name: "Special Offers", link: "/" },
        { name: "Sir Edmund Hillary Club", link: "/" },
        { name: "Grand Circle Foundation", link: "/" },
        { name: "Travel Protection Plan", link: "/" }
      ]
    },
    {
      heading: "Contact Us",
      links: [
        { name: "People & Culture", link: "/" },
        { name: "Reservations & Customer Service", link: "/" },
        { name: "Frequently Asked Questions", link: "/" },
        { name: "About Us", link: "/" },
        { name: "Media Inquiries", link: "/" },
        { name: "Traveler Photo Contest", link: "/" },
        { name: "Career Opportunities", link: "/" }
      ]
    }
  ];
  const textLogo = "https://grandcircle.scene7.com/is/image/GrandCircle/footer_image_logo_oat?&scl=1&fmt=png-alpha"
  const Business = "https://grandcircle.scene7.com/is/image/GrandCircle/footer_image_bbb_oat?&scl=1&fmt=png-alpha"
  const Ustoa = "https://grandcircle.scene7.com/is/image/GrandCircle/footer_image_ustoa_oat?&scl=1&fmt=png-alpha"
  return (
    <div className='text-white'>
      <div className=' bg-[#212217] px-8 lg:px-20 py-8'>
        <div className="footerMain justify-center gap-x-16">
          {footerLinks.map((item, index) => {
            return (
              <div key={index}>
                <h1 className='text-body-large font-bold'>{item.heading}</h1>
                <ul className='mt-2 font-regular'>
                  {item.links.map((data, index) => {
                    return (
                      <li className='font-regular my-2 hover:underline cursor-pointer' key={index}><a href={data.link}>{data.name}</a></li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </div>
        <div className="block lg:hidden">
          {footerLinks.map((item, index) => {
            return (
              <Accordion title={item.heading} key={index}>
                <ul className='font-regular'>
                  {item.links.map((data, index) => {
                    return (
                      <li className='font-regular my-2 hover:underline cursor-pointer' key={index}><a href={data.link}>{data.name}</a></li>
                    )
                  })}
                </ul>
              </Accordion>
            )
          })}
        </div>
        <div className="mt-12 lg:flex justify-between items-center">
          <div className='flex items-center justify-center lg:justify-start gap-x-8'>
            <Link href="/" target='_blank'>
              <Image src={Business} alt='business Logo' width={122} height={46} />
            </Link>
            <Link href="/" target='_blank'>
              <Image src={Ustoa} alt='USTOA logo' width={175} height={46} />
            </Link>
          </div>
          <div className='text-body-large text-center mt-12 lg:mt-0'>
            <a href="" className='hover:underline'>Terms & Conditions</a> | <a href="" className='hover:underline'>Privacy Policy</a> | <a href="" className='hover:underline'>Terms of Use</a> | <a href="" className='hover:underline'>Medical Issues & Disabilities</a>
          </div>
        </div>
      </div>
      <div className=' bg-[#383826] text-center lg:text-left px-8 lg:px-20 py-8 grid grid-cols-1 lg:grid-cols-4'>
        <div className='lg:col-span-2 order-2 lg:order-first text-white'>
          <Link href="/">
            <Image src={textLogo} alt='text Logo' className='mx-auto lg:mx-0' width={274} height={20} />
          </Link>
          <p className='text-body-large mt-2'> 347 Congress St. • Boston, MA 02210</p>
          <p className='text-body-large mt-1'> © {new Date().getFullYear()} Overseas Adventure Travel </p>
        </div>
        <div className='lg:flex justify-between lg:col-span-2 mb-8 lg:mb-0'>
          <div className='mb-8 lg:mb-0'>
            <h1 className='text-body-large font-bold'>Family of Brands</h1>
            <ul className='mt-2'>
              <li className='mb-2'>Grand Circle Cruise Line</li>
              <li className='my-2'>Grand Circle Travel</li>
            </ul>
          </div>
          <div className='mb-8 lg:mb-0'>
            <h1 className='text-body-large font-bold'>Regional Adventure Counselors</h1>
            <ul className='mt-2'>
              <li className='flex items-center justify-center lg:justify-start'>
                <Phone height={16} width={16} />
                <span className='ml-1 hover:underline'> 1-800-955-1925</span>
              </li>
            </ul>
          </div>
          <div className='mb-8 lg:mb-0'>
            <h1 className='text-body-large font-bold'>Connect With Us</h1>
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