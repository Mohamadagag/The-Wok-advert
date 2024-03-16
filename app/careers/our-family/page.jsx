import FamilyCard from '@/components/FamilyCard'
import Footer from '@/components/Footer'
import RedSocialMediaIcons from '@/components/RedSocialMediaIcons'
import React from 'react'

const Ourfamily = () => {
  return (
    <div className='background-img'>
        <main className='p-5 mb-10 2xl:mb-[7.5rem] relative'>
          <div className='flex flex-col items-center my-5'>
              <h1 className='font-bold text-white text-4xl' >MEET OUR</h1>
              <h2 className='font-bold text-[#D87F35] text-6xl' >FAMILY</h2>
          </div>
           
          <div className='flex justify-center mt-10'>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3  xl:w-[80%]'>
              <FamilyCard/>
              <FamilyCard/>
              <FamilyCard/>
            </div>
          </div>

          <RedSocialMediaIcons />
        </main>


        <Footer />
    </div>
  )
}

export default Ourfamily