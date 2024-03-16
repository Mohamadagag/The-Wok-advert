'use client'

import { useState } from 'react'
import Image from 'next/image'
import Logo from '../public/TheWokNavbarLogo.svg'
import Phone from '../public/Phone.svg'
import Link from 'next/link'
import { MdMenu, MdClose } from "react-icons/md";
import Facebook from '../public/social media/facebook.svg'
import Tiktok from '../public/social media/tiktok.svg'
import Instagram from '../public/social media/instagram.svg'
import Youtube from '../public/social media/youtube.svg'
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";





const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isCareersOpen, setIsCareersOpen] = useState(false);
  const [isTalkToUsOpen, setIsTalkToUsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
    {/* Desktop Navigation*/}
    <nav className="hidden h-[87px] xl:flex items-center justify-between px-24 bg-black">
       <div>
        <Link href="/">
          <Image src={Logo} alt='The Wok Logo'/>
        </Link>
       </div>
       <div>
        <Link href="/about" className='lg:text-white lg:mr-10 lg:tracking-[0.25px] lg:text-xl lg:hover:border-b-4 lg:hover:border-[#970000] lg:hover:pb-[26px]'>About Us</Link>

        <div className='inline lg:text-white lg:mr-10 lg:tracking-[0.25px] lg:text-xl lg:hover:border-b-4 lg:hover:border-[#970000] lg:hover:pb-[26px]' onMouseLeave={() => setIsCareersOpen(false)}>
            <div className="relative inline">

            {isCareersOpen ? (
               <button
               onClick={() => setIsCareersOpen(!isCareersOpen)}
               className="text-white px-4 py-2 rounded"
             >
                <div className='flex items-baseline'>Careers<SlArrowUp className='text-xs ml-2' /></div>
             </button>
                  
            ) : <button
            onClick={() => setIsCareersOpen(!isCareersOpen)}
            className="text-white px-4 py-2 rounded"
          >
             <div className='flex items-baseline'>Careers<SlArrowDown className='text-xs ml-2' /></div>
          </button> }
            

              {isCareersOpen && (
                <div
                  className="bg-[#171717] z-10 absolute left-0 p-1 mt-2 w-32 rounded-md shadow-lg"
                  onMouseLeave={() => setIsCareersOpen(false)}
                >
                  <div className="py-1 rounded-md bg-[#171717] shadow-xs">
                    <Link href="/careers/join-us" className="rounded text-[#484848] block px-4 py-2 text-sm hover:bg-[#212020] hover:text-white"  onClick={() => setIsCareersOpen(false)} >Join Us</Link>
                    <Link href="/careers/our-family" className="rounded text-[#484848] block px-4 py-2 text-sm hover:bg-[#212020] hover:text-white"  onClick={() => setIsCareersOpen(false)} >Our Family</Link>
                  </div>
                </div>
              )}
            </div>
        </div>

        <Link href="/franchise" className='lg:text-white lg:mr-10 lg:tracking-[0.25px] lg:text-xl lg:hover:border-b-4 lg:hover:border-[#970000] lg:hover:pb-[26px]'>Franchise</Link>
        <Link href="/locations" className='lg:text-white lg:mr-10 lg:tracking-[0.25px] lg:text-xl lg:hover:border-b-4 lg:hover:border-[#970000] lg:hover:pb-[26px]'>Locations</Link>


                {/* Hereeeeeeeeeeeeeeeee */}

        <div className='inline lg:text-white lg:mr-10 lg:tracking-[0.25px] lg:text-xl lg:hover:border-b-4 lg:hover:border-[#970000] lg:hover:pb-[26px]' onMouseLeave={() => setIsTalkToUsOpen(false)}>
            <div className="relative inline">

            {isTalkToUsOpen ? (
               <button
               onClick={() => setIsTalkToUsOpen(!isTalkToUsOpen)}
               className="text-white px-4 py-2 rounded"
             >
                <div className='flex items-baseline'>Talk To Us<SlArrowUp className='text-xs ml-2' /></div>
             </button>
                  
            ) : <button
            onClick={() => setIsTalkToUsOpen(!isTalkToUsOpen)}
            className="text-white px-4 py-2 rounded"
          >
             <div className='flex items-baseline'>Talk To Us<SlArrowDown className='text-xs ml-2' /></div>
          </button> }
            

              {isTalkToUsOpen && (
                <div
                  className="bg-[#171717] z-10 absolute left-0 p-1 mt-2 w-36 rounded-md shadow-lg"
                  onMouseLeave={() => setIsTalkToUsOpen(false)}
                >
                  <div className="py-1 rounded-md bg-[#171717] shadow-xs">
                    <Link href="/talktous/message-us" className="rounded text-[#484848] block px-4 py-2 text-sm hover:bg-[#212020] hover:text-white"  onClick={() => setIsTalkToUsOpen(false)} >Message Us</Link>
                    <Link href="/talktous/feedback" className="rounded text-[#484848] block px-4 py-2 text-sm hover:bg-[#212020] hover:text-white"  onClick={() => setIsTalkToUsOpen(false)} >Feedback</Link>
                  </div>
                </div>
              )}
            </div>
        </div>

        
        {/* <Link href="/talktous" className='lg:text-white lg:mr-10 lg:tracking-[0.25px] lg:text-xl lg:hover:border-b-4 lg:hover:border-[#970000] lg:hover:pb-[26px]'>Talk To Us</Link> */}
        <a href="https://heylink.me/thewok?fbclid=PAAaYSf8A7ru06PtyFji2jlUjyRlGCMm6042dVv2pJMevReWJ-uf3j0Eae6ko" target='_blank' className='lg:text-[#B61414] lg:tracking-[0.25px] lg:text-xl font-semibold'>Order Now</a>
       </div>
       <div className='lg:flex lg:items-center lg:text-white'>
        <div className='lg:flex lg:justify-center lg:items-center lg:mr-5'>
        <Image src={Phone} width={19} height={19} alt='Phone Icon'/>
        </div>
        <div className='lg:tracking-[0.25px] lg:text-xl font-bold'>70 310 350</div>
       </div>
    </nav>

    {/* Mobile SideNav */}
    <div className='xl:hidden'>
      <nav className=' bg-black flex justify-between items-center px-10 py-5 xl:hidden'>
        <div className='w-24'>
          <Link href="/">
            <Image src={Logo} alt='The Wok Logo'/>
          </Link>
        </div>
        <div onClick={toggleNav}>
          {isOpen ? <MdClose className=' h-8 w-8 text-white' /> : <MdMenu className=' h-8 w-8 text-red-900' />}
        </div>
      </nav>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 z-50" onClick={toggleNav}>
          <div className="bg-red-900 w-64 h-full fixed left-0 top-0 overflow-auto z-50 p-6 flex flex-col justify-between">
              <div className='flex flex-col'>
                <Link href="/about" className='mb-5 text-white mr-10 tracking-[0.25px] text-xl'>About Us</Link>
                <Link href="/careers" className='mb-5 text-white mr-10 tracking-[0.25px] text-xl'>Careers</Link>
                <Link href="/franchise" className='mb-5 text-white mr-10 tracking-[0.25px] text-xl'>Franchise</Link>
                <Link href="/locations" className='mb-5 text-white mr-10 tracking-[0.25px] text-xl'>Locations</Link>
                <Link href="/talktous" className='text-white mr-10 tracking-[0.25px] text-xl'>Talk To Us</Link>
                <a href="https://heylink.me/thewok?fbclid=PAAaYSf8A7ru06PtyFji2jlUjyRlGCMm6042dVv2pJMevReWJ-uf3j0Eae6ko" target='_blank' className='mt-5 text-white mr-10 tracking-[0.25px] text-xl'>Order Now</a>
              </div>
              <div>
                <div className="2xl:flex 2xl:flex-col 2xl:absolute 2xl:bottom-12 2xl:left-6">
                  <a href="https://www.facebook.com/thewoklb" target='_blank' className="mr-2 w-10 inline-block 2xl:mb-4"><Image src={Facebook} alt="Facebook" /></a>
                  <a href="https://www.tiktok.com/@thewokarabia" target='_blank' className="mr-2 w-10 inline-block 2xl:mb-4"><Image src={Tiktok} alt="Tiktok" /></a>
                  <a href="https://www.instagram.com/thewokarabia" target='_blank' className="mr-2 w-10 inline-block 2xl:mb-4"><Image src={Instagram} alt="Instagram" /></a>
                  <a href="http://www.youtube.com/@thewokarabia" target='_blank' className="inline-block"><Image src={Youtube} alt="Youtube" /></a>
                </div>
              </div>
            </div>

        </div>
      )}
    </div>
    
    </>
  )
}

export default Navbar