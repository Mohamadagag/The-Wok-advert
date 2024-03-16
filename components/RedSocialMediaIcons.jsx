import Tiktok from '../public/Red Social Media/tiktok.svg'
import Facebook from '../public/Red Social Media/facebook.svg'
import Youtube from '../public/Red Social Media/youtube.svg'
import Instagram from '../public/Red Social Media/instagram.svg'
import Image from 'next/image'

const RedSocialMediaIcons = () => {
  return (
    <div className='hidden xl:block'>

    <div className="absolute top-1/2">
        <Image className='mb-3' src={Facebook} alt='Facebook Icon' />
        <Image className='mb-3' src={Tiktok} alt='Tiktik Icon' />
        <Image className='mb-3' src={Instagram} alt='Instagram Icon' />
        <Image src={Youtube} alt='Youtube Icon' />
    </div>
    </div>
  )
}

export default RedSocialMediaIcons