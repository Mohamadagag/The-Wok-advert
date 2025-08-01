"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "../public/Logo.png";
import BurgerMenu from "../public/BurgerMenu.png";
import Link from "next/link";

const Navbar = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  useEffect(() => {
    if (isOverlayOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOverlayOpen]);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-[999999] bg-[#FFFCF4]">
        <div className="flex flex-row-reverse xl:flex-row items-center justify-between px-6 py-5 lg:px-10 xl:px-72 h-[80px] xl:h-[105px]">
          {/* Burger menu (both desktop & mobile) */}
          <button
            onClick={() => setIsOverlayOpen(true)}
            className=" xl:order-1"
          >
            <Image className="w-10" src={BurgerMenu} alt="BurgerMenu" />
          </button>

          {/* Logo center */}
          <Link href="/" className="w-28 xl:w-36 xl:order-2">
            <Image src={Logo} alt="THEWok Logo" />
          </Link>

          {/* ORDER NOW (visible on xl only) */}
          <a
            href="https://heylink.me/thewok"
            target="_blank"
            className="hidden xl:inline-block bg-[#AA1E2E] rounded-md text-[#FFFCF4] px-3 py-1 lg:tracking-[0.25px]  font-semibold xl:order-3"
          >
            ORDER NOW
          </a>
        </div>
      </nav>

      {/* Overlay */}
      {isOverlayOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-90 z-[9999999] flex flex-col items-center justify-center space-y-8 text-[#FFFCF4] text-3xl">
          <button
            onClick={() => setIsOverlayOpen(false)}
            className="absolute top-5 right-5 text-[#FFFCF4] text-2xl"
          >
            ✕
          </button>

          {/* Common navigation links */}
          <Link
            className="hover:text-[#AA1E2E]"
            href="/"
            onClick={() => setIsOverlayOpen(false)}
          >
            Home
          </Link>
          <Link
            className="hover:text-[#AA1E2E]"
            href="/franchise"
            onClick={() => setIsOverlayOpen(false)}
          >
            Franchise
          </Link>
          <Link
            className="hover:text-[#AA1E2E]"
            href="/locations"
            onClick={() => setIsOverlayOpen(false)}
          >
            Locations
          </Link>

          <Link
            className="hover:text-[#AA1E2E]"
            href="/careers/join-us"
            onClick={() => setIsOverlayOpen(false)}
          >
            Join Us
          </Link>
          {/* <Link
            className="hover:text-[#AA1E2E]"
            href="/careers/our-family"
            onClick={() => setIsOverlayOpen(false)}
          >
            Our Family
          </Link> */}

          <Link
            className="hover:text-[#AA1E2E]"
            href="/talktous"
            onClick={() => setIsOverlayOpen(false)}
          >
            Talk to us
          </Link>

          {/* ORDER NOW for mobile users */}
          <a
            href="https://heylink.me/thewok"
            target="_blank"
            onClick={() => setIsOverlayOpen(false)}
            className="xl:hidden bg-[#AA1E2E] rounded-md text-[#FFFCF4] px-6 py-3 font-semibold text-2xl"
          >
            ORDER NOW
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;

{
  /* OLD NAVBAR !!!!!!!!!!! */
}
{
  /* Desktop Navigation*/
}
{
  /* <nav className="hidden h-[105px] xl:flex items-center justify-between px-10 fixed top-0 left-0 right-0 z-[999999] bg-[#000000]">
       <div>
        <Link href="/">
          <Image src={Logo2} alt='The Wok Logo'/>
        </Link>
       </div>
       <div>
        <Link href="/about" className={pathname === "/about" ? 'lg:text-[#FFFCF4] lg:mr-10 lg:tracking-[0.25px] lg:text-xl border-b-4 border-[#970000] pb-[35px]' : `lg:text-[#FFFCF4] lg:mr-10 lg:tracking-[0.25px] lg:text-xl lg:hover:border-b-4 lg:hover:border-[#970000] lg:hover:pb-[35px]`}>About Us</Link>

        <div className={pathname === '/careers/join-us' || pathname ===  '/careers/our-family' ? 'inline lg:text-[#FFFCF4] lg:mr-10 lg:tracking-[0.25px] lg:text-xl border-b-4 border-[#970000] pb-[35px]' : 'inline lg:text-[#FFFCF4] lg:mr-10 lg:tracking-[0.25px] lg:text-xl lg:hover:border-b-4 lg:hover:border-[#970000] lg:hover:pb-[35px]'} onMouseLeave={() => setIsCareersOpen(false)}>
            <div className="relative inline">

            {isCareersOpen ? (
               <button
               onClick={() => setIsCareersOpen(!isCareersOpen)}
               className="px-4 py-2 text-[#FFFCF4] rounded"
             >
                <div className='flex items-baseline'>Careers<SlArrowUp className='ml-2 text-xs' /></div>
             </button>
                  
            ) : <button
            onClick={() => setIsCareersOpen(!isCareersOpen)}
            className="px-4 py-2 text-[#FFFCF4] rounded"
          >
             <div className='flex items-baseline'>Careers<SlArrowDown className='ml-2 text-xs' /></div>
          </button> }
            

              {isCareersOpen && (
                <div
                  className="bg-[#171717] z-10 absolute left-0 p-1 mt-2 w-44 rounded-md shadow-lg"
                  onMouseLeave={() => setIsCareersOpen(false)}
                >
                  <div className={`py-1 rounded-md bg-[#171717] shadow-xs`}>
                    <Link href="/careers/join-us" className="rounded text-[#484848] block px-4  py-2 text-sm hover:bg-[#212020] hover:text-[#FFFCF4] hover:border border-[#970000]"  onClick={() => setIsCareersOpen(false)} >Join Us</Link>
                    <Link href="/careers/our-family" className="rounded text-[#484848] block px-4  py-2 text-sm hover:bg-[#212020] hover:text-[#FFFCF4]  hover:border border-[#970000]"  onClick={() => setIsCareersOpen(false)} >Our Family</Link>
                  </div>
                </div>
              )}
            </div>
        </div>

        <Link href="/franchise" className={pathname === '/franchise' ? 'lg:text-[#FFFCF4] lg:mr-10 lg:tracking-[0.25px] lg:text-xl border-b-4 border-[#970000] pb-[35px]' :'lg:text-[#FFFCF4] lg:mr-10 lg:tracking-[0.25px] lg:text-xl lg:hover:border-b-4 lg:hover:border-[#970000] lg:hover:pb-[35px]'}>Franchise</Link>
        <Link href="/locations" className={pathname === '/locations' ? 'lg:text-[#FFFCF4] lg:mr-10 lg:tracking-[0.25px] lg:text-xl border-b-4 border-[#970000] pb-[35px]' :'lg:text-[#FFFCF4] lg:mr-10 lg:tracking-[0.25px] lg:text-xl lg:hover:border-b-4 lg:hover:border-[#970000] lg:hover:pb-[35px]'}>Locations</Link>


        <div className={pathname === "/talktous/message-us" || pathname === "/talktous/feedback" ? 'inline lg:text-[#FFFCF4] lg:mr-10 lg:tracking-[0.25px] lg:text-xl border-b-4 border-[#970000] pb-[35px]' : 'inline lg:text-[#FFFCF4] lg:mr-10 lg:tracking-[0.25px] lg:text-xl lg:hover:border-b-4 lg:hover:border-[#970000] lg:hover:pb-[35px]'} onMouseLeave={() => setIsTalkToUsOpen(false)}>
            <div className="relative inline">

            {isTalkToUsOpen ? (
               <button
               onClick={() => setIsTalkToUsOpen(!isTalkToUsOpen)}
               className="px-4 py-2 text-[#FFFCF4] rounded"
             >
                <div className='flex items-baseline'>Talk To Us<SlArrowUp className='ml-2 text-xs' /></div>
             </button>
                  
            ) : <button
            onClick={() => setIsTalkToUsOpen(!isTalkToUsOpen)}
            className="px-4 py-2 text-[#FFFCF4] rounded"
          >
             <div className='flex items-baseline'>Talk To Us<SlArrowDown className='ml-2 text-xs' /></div>
          </button> }
            

              {isTalkToUsOpen && (
                <div
                  className="bg-[#171717] z-10 absolute left-0 p-1 mt-2 w-44 rounded-md shadow-lg"
                  onMouseLeave={() => setIsTalkToUsOpen(false)}
                >
                  <div className="py-1 rounded-md bg-[#171717] shadow-xs">
                    <Link href="/talktous/message-us" className="rounded text-[#484848] block px-4 py-2 text-sm hover:bg-[#212020] hover:text-[#FFFCF4]  hover:border border-[#970000]"  onClick={() => setIsTalkToUsOpen(false)} >Message Us</Link>
                    <Link href="/talktous/feedback" className="rounded text-[#484848] block px-4 py-2 text-sm hover:bg-[#212020] hover:text-[#FFFCF4]  hover:border border-[#970000]"  onClick={() => setIsTalkToUsOpen(false)} >Feedback</Link>
                  </div>
                </div>
              )}
            </div>
        </div>
        <a href="https://heylink.me/thewok?fbclid=PAAaYSf8A7ru06PtyFji2jlUjyRlGCMm6042dVv2pJMevReWJ-uf3j0Eae6ko" target='_blank' className='lg:text-[#B61414] lg:tracking-[0.25px] lg:text-xl font-semibold'>Order Now</a>
       </div>
       <div className='lg:flex lg:items-center lg:text-[#FFFCF4]'>
        <div className='lg:flex lg:justify-center lg:items-center lg:mr-5'>
        <Image src={Phone} width={19} height={19} alt='Phone Icon'/>
        </div>
        <div className='lg:tracking-[0.25px] lg:text-xl font-bold'>70 310 350</div>
       </div>
    </nav> */
}

{
  /* Mobile SideNav */
}
{
  /* <div className='xl:hidden h-[80px] fixed top-0 left-0 right-0 z-[999999] bg-[#000000]'>
      <nav className='flex items-center justify-between p-6 py-5 bg-black  lg:px-10 xl:hidden'>
        <div className='w-24'>
          <Link href="/">
            <Image src={Logo2} alt='The Wok Logo'/>
          </Link>
        </div>
        <div onClick={toggleNav}>
          {isOpen ? <MdClose className='w-8 h-8 text-[#FFFCF4] ' /> : <MdMenu className='w-8 h-8 text-red-900 ' />}
        </div>
      </nav>
      {isOpen && (
        <div className="fixed top-0 left-0 z-50 w-full h-full bg-gray-900 bg-opacity-50" onClick={toggleNav}>
          <div className="fixed top-0 left-0 z-50 flex flex-col justify-between w-64 h-full p-6 overflow-auto bg-red-900 animate-slide-in">
              <div className='flex flex-col'>
                <Link href="/about" className='mb-5 text-[#FFFCF4] mr-10 tracking-[0.25px] text-xl'>About Us</Link>
                <Link href="/careers/join-us" className='mb-5 text-[#FFFCF4] mr-10 tracking-[0.25px] text-xl'>Join Us</Link>
                <Link href="/careers/our-family" className='mb-5 text-[#FFFCF4] mr-10 tracking-[0.25px] text-xl'>Our Family</Link>
                <Link href="/franchise" className='mb-5 text-[#FFFCF4] mr-10 tracking-[0.25px] text-xl'>Franchise</Link>
                <Link href="/locations" className='mb-5 text-[#FFFCF4] mr-10 tracking-[0.25px] text-xl'>Locations</Link>
                <Link href="/talktous/message-us" className='mb-5 text-[#FFFCF4] mr-10 tracking-[0.25px] text-xl'>Message Us</Link>
                <Link href="/talktous/feedback" className='text-[#FFFCF4] mr-10 tracking-[0.25px] text-xl'>Feedback</Link>
                <a href="https://heylink.me/thewok?fbclid=PAAaYSf8A7ru06PtyFji2jlUjyRlGCMm6042dVv2pJMevReWJ-uf3j0Eae6ko" target='_blank' className='mt-5 text-[#FFFCF4] mr-10 tracking-[0.25px] text-xl'>Order Now</a>
              </div>
              <div>
                <div className="absolute flex items-center bottom-12 left-6">
                  <a href="https://www.facebook.com/thewoklb" target='_blank' className="inline-block w-10 mr-2 2xl:mb-4">
                    <Image src={Facebook} alt="Facebook" />
                    </a>
                  <a href="https://www.tiktok.com/@thewokarabia" target='_blank' className="inline-block w-10 mr-2 2xl:mb-4">
                    <Image src={Tiktok} alt="Tiktok" />
                    </a>
                  <a href="https://www.instagram.com/thewokarabia" target='_blank' className="inline-block w-10 mr-2 2xl:mb-4">
                    <Image src={Instagram} alt="Instagram" />
                    </a>
                  <a href="http://www.youtube.com/@thewokarabia" target='_blank' className="inline-block w-10">
                    <Image src={Youtube} alt="Youtube" />
                    </a>
                </div>
              </div>
            </div>
        </div>
      )}
    </div> */
}
