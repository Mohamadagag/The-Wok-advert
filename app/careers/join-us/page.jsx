import Footer from '@/components/Footer'
import RedSocialMediaIcons from '@/components/RedSocialMediaIcons'
import TeamCard from '@/components/TeamCard'

const JoinUs = () => {
  return (
    <div className='background-img'>
      <main className='p-5 mb-10 2xl:mb-16 relative'>
        <div className='flex flex-col items-center my-5'>
            <h1 className='font-bold text-white text-4xl' >JOIN OUR</h1>
            <h2 className='font-bold text-[#D87F35] text-5xl' >TEAM</h2>
        </div>

        <div className='flex justify-center xl:px-16'>
        <div className='grid grid-cols-1 justify-center my-12 gap-6 lg:grid-cols-2 xl:grid-cols-3 xl:gap-5'>
          <div><TeamCard /></div>
          <div><TeamCard /></div>
          <div><TeamCard /></div>
          <div><TeamCard /></div>
          <div><TeamCard /></div>
          <div><TeamCard /></div>   
        </div>
        </div>

        <RedSocialMediaIcons />
      </main>

        <Footer />
    </div>
  )
}

export default JoinUs