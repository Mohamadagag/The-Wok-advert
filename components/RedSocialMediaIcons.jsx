import Tiktok from '../public/Red Social Media/tiktok.svg'
import Facebook from '../public/Red Social Media/facebook.svg'
import Youtube from '../public/Red Social Media/youtube.svg'
import Instagram from '../public/Red Social Media/instagram.svg'
import Image from 'next/image'

const RedSocialMediaIcons = () => {
  return (
    <div className='hidden xl:block'>

    <div className="absolute top-1/2">
      <a href="https://www.facebook.com/thewoklb" target='_blank'>
        <Image className='mb-3' src={Facebook} alt='Facebook Icon' />
      </a>
      <a href="https://www.tiktok.com/@thewokarabia" target='_blank'>
        <Image className='mb-3' src={Tiktok} alt='Tiktik Icon' />
      </a>
      <a href="https://www.instagram.com/thewokarabia" target='_blank'>
        <Image className='mb-3' src={Instagram} alt='Instagram Icon' />
      </a>
      <a href="http://www.youtube.com/@thewokarabia" target='_blank'>
        <Image src={Youtube} alt='Youtube Icon' />
      </a>
    </div>
    </div>
  )
}

export default RedSocialMediaIcons