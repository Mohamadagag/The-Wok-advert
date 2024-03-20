'use client'

import Image from 'next/image'
import LocationIcon from '@/public/locationIcon.svg'
import LeftArrow from '@/public/leftArrow.svg'
import RightArrow from '@/public/rightArrow.svg'
import List from '@/public/List.svg'
import Mail from '@/public/mail.svg'
import { useState } from 'react'
import SocialMediaIcons from '@/components/SocialMediaIcons'
import { IoClose } from "react-icons/io5";


const locations = [
  {
    name : 'The Wok Beirut',
    location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105956.24785890234!2d35.48455460684816!3d33.911982931584824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f17884ba670df%3A0xc7852a696ba0d39b!2sThe%20Wok%20Beirut!5e0!3m2!1sen!2slb!4v1710635440748!5m2!1sen!2slb", 
    link: 'https://www.google.com/maps/dir//The+Wok+Beirut,+Armenia+Street,+Beirut/@34.4157299,35.5443191,10z/data=!4m8!4m7!1m0!1m5!1m1!1s0x151f17884ba670df:0xc7852a696ba0d39b!2m2!1d35.5271383!2d33.8974822'
  },
  {
    name : "Wok town",
    location : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105956.24785890234!2d35.48455460684816!3d33.911982931584824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f17dc20a5e01f%3A0x19f5e3f3a2146c59!2sWok%20town!5e0!3m2!1sen!2slb!4v1710639100134!5m2!1sen!2slb",
    link: ""
  },
  {
    name : 'The Wok Kaslik',
    location : 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105956.24785890234!2d35.48455460684816!3d33.911982931584824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f41ce27ea7eb5%3A0x9b1c36d0b75a4e65!2sThe%20Wok%20Kaslik!5e0!3m2!1sen!2slb!4v1710639194034!5m2!1sen!2slb',
    link: 'https://www.google.com/maps/dir//The+Wok+Kaslik,+Sea+Side+Rd/@34.4157299,35.5443191,10z/data=!4m8!4m7!1m0!1m5!1m1!1s0x151f41ce27ea7eb5:0x9b1c36d0b75a4e65!2m2!1d35.6103976!2d33.974934?authuser=0&entry=ttu'
  }
]

const LocationsPage = () => {

  const [activeLocation, setActiveLocation] = useState(locations[0])
  const [showSection, setShowSection] = useState(false);



  const changeNextLocation = () => {
    const currentIndex = locations.findIndex(location => location === activeLocation);
    const nextIndex = (currentIndex + 1) % locations.length;
    setActiveLocation(locations[nextIndex]);
  }

  const changePreviousLocation = () =>{
    const currentIndex = locations.findIndex(location => location === activeLocation);
    const prevIndex = (currentIndex - 1 + locations.length) % locations.length;
   setActiveLocation(locations[prevIndex]);
  }
  const toggleNav = () => {
    setShowSection(!showSection);
  };

  return (
    <>
    <SocialMediaIcons />
      <main className="relative h-full mt-[93px] xl:mt-[87px]">
        <div className="w-full location-height">
          <div
            className="h-full"
            dangerouslySetInnerHTML={{
              __html: `
              <iframe src="${activeLocation.location}" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              `,
            }}
            />
        </div>
        <div className="bg-[#1E1E1E] text-white lg:rounded-t-xl h-10 bottom-0 lg:absolute left-0 right-0 mx-auto my-auto min-h-[140px] lg:max-w-[70rem] font-light tracking-wide text-xl flex-col lg:flex-row">
          <div className="flex justify-between px-8 xl:py-5 flex-col md:flex-row bg-[#1E1E1E] lg:rounded-t-xl ">
            <div className='py-4 xl:py-0 '>
              <div className='flex items-center'>
                <span className='w-[1.3rem]'>
                  <Image src={LocationIcon} alt='Location Icon'/>
                  </span>
                <p className='ml-4'>{activeLocation.name}</p>
              </div>
              <div className='mt-5'>
                <button className='w-9 mr-3' onClick={changePreviousLocation}>
                  <Image src={LeftArrow} alt='Left Arrow Icon' />
                </button>
                <button className='w-9 mr-3' onClick={changeNextLocation}>
                  <Image src={RightArrow} alt='Right Arrow Icon' />
                </button>
                {/* Button to show the section */}
                <button className='w-9' onClick={toggleNav}>
                  <Image src={List} alt='List Icon' />
                </button>
              </div>
            </div>
          
          <div className='py-4 xl:py-0'>
            <div className='flex items-center'>
              <span className='w-8'>
              <Image src={Mail} alt='Mail Icon'/>
              </span>
              <p className='ml-4'>thewok@thewok.com</p>
            </div>
          </div>

          <div className='flex flex-col py-4 xl:py-0 text-center'>
            <a href={activeLocation.location} target='_blank' className='bg-[#970000] text-base rounded-3xl px-14 py-1 font-normal xl:text-xl lg:w-80'>GET DIRECTIONS</a>
            <button className='text-base mt-5 border rounded-3xl px-14 py-1 border-[#970000] border-y-2 border-x-2 xl:text-xl lg:w-80'>DELIVERY COVERAGE</button>
          </div>

          </div>
              {showSection && (
                <div className='mx-auto'>
                  <div className="animate-slide-up max-w-[70rem] h-[30rem] fixed bottom-0 left-0 right-0 mx-auto">
                      <div className="max-w-[70rem] h-[30rem]">
                      <div className={`bg-[#970000] h-full px-5 lg:px-10 pt-16 pb-4 relative grid lg:grid-cols-2 gap-5 `}>

                        <div className='absolute right-5 top-4'>
                          <div >
                          <button onClick={toggleNav}>
                            <IoClose className='text-2xl' />
                          </button>

                          </div>
                        </div>

                        <div className='flex items-center justify-between lg:w-[30rem] border-b lg:border-b-0 lg:border-r lg:p-4'>
                          <h2>Wok town</h2>
                          <div className='flex'>
                            <h2 className='mr-3'>TEL</h2>
                            <span>&nbsp;79317931</span>
                          </div>
                        </div>

                        <div className='flex items-center justify-between lg:w-[30rem] border-b lg:border-b-0 lg:border-r lg:p-4'>
                          <h2>The Wok Beirut</h2>
                          <div className='flex'>
                          <h2 className='mr-3'>TEL</h2> <span>&nbsp;70310350</span>
                          </div>
                        </div>

                        <div className='flex items-center justify-between lg:w-[30rem] border-b lg:border-b-0 lg:border-r lg:p-4'>
                          <h2>The Wok Kaslik</h2>
                          <div className='flex'>
                          <h2 className='mr-3'>TEL</h2> <span>&nbsp;70310350</span>
                          </div>
                        </div>

                        <div className='flex items-center justify-between lg:w-[30rem] border-b lg:border-b-0 lg:border-r lg:p-4'>
                          <h2>The Wok Jbeil</h2>
                          <div className='flex'>
                            <h2 className='mr-3'>TEL</h2> <span>&nbsp;70310350</span>
                          </div>

                        </div>

                        <div className='flex items-center justify-between lg:w-[30rem] lg:border-r lg:p-4'>
                          <h2>The Wok Batroun</h2>
                          <div className='flex'>
                            <h2 className='mr-3'>TEL</h2> <span>&nbsp;70310350</span>
                          </div>

                        </div>
                        
                      </div>
                    </div> 
                    </div>
          </div>

          )}


        </div>

      </main>
      </>
  )
}

export default LocationsPage
