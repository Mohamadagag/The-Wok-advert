'use client'

import Image from 'next/image'
import LocationIcon from '@/public/locationIcon.svg'
import LeftArrow from '@/public/leftArrow.svg'
import RightArrow from '@/public/rightArrow.svg'
import List from '@/public/List.svg'
import Mail from '@/public/mail.svg'
import { useState } from 'react'


const locations = [
  {
    name : 'The Wok Beirut',
    location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105956.24785890234!2d35.48455460684816!3d33.911982931584824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f17884ba670df%3A0xc7852a696ba0d39b!2sThe%20Wok%20Beirut!5e0!3m2!1sen!2slb!4v1710635440748!5m2!1sen!2slb" 
  },
  {
    name : "Wok town",
    location : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105956.24785890234!2d35.48455460684816!3d33.911982931584824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f17dc20a5e01f%3A0x19f5e3f3a2146c59!2sWok%20town!5e0!3m2!1sen!2slb!4v1710639100134!5m2!1sen!2slb"
  },
  {
    name : 'The Wok Kaslik',
    location : 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105956.24785890234!2d35.48455460684816!3d33.911982931584824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f41ce27ea7eb5%3A0x9b1c36d0b75a4e65!2sThe%20Wok%20Kaslik!5e0!3m2!1sen!2slb!4v1710639194034!5m2!1sen!2slb'
  }
]

const LocationsPage = () => {

  const [activeLocation, setActiveLocation] = useState(locations[0])


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


  return (
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
    <div className="flex justify-between px-8 lg:p-8 py-5 flex-col lg:flex-row">
      <div>
        <div className='flex items-center'>
          <span className='w-[1.3rem]'>
            <Image src={LocationIcon} alt='Location Icon'/>
            </span>
          <p className='ml-4'>{activeLocation.name}</p>
        </div>
        <div className='mt-5'>
          <button className='w-9 mr-3' onClick={changePreviousLocation}>
            <Image src={LeftArrow} />
          </button>
          <button className='w-9 mr-3' onClick={changeNextLocation}>
            <Image src={RightArrow} />
          </button>
          <button className='w-9'>
            <Image src={List} />
          </button>
        </div>
      </div>

    <div>
      <div className='flex items-center'>
        <span className='w-8'>
         <Image src={Mail} alt='Mail Icon'/>
        </span>
        <p className='ml-4'>thewok@thewok.com</p>
      </div>
    </div>
    <div className='flex flex-col'>
      <button className='bg-[#970000] rounded-3xl px-14 py-1 font-normal'>GET DIRECTIONS</button>
      <button className='mt-5 border rounded-3xl px-14 py-1 border-[#970000] border-y-2 border-x-2'>DELIVERY COVERAGE</button>
    </div>
    </div>
  </div>

</main>
  )
}

export default LocationsPage
