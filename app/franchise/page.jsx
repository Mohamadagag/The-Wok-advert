'use client'
import Footer from "@/components/Footer"
import SocialMediaIcons from "@/components/SocialMediaIcons"
import Franchise from "@/public/franchise.png"
import Image from "next/image"
import { useEffect, useState } from "react"

const FranchisePage = () => {

  // PRE-QUALIFICATIONS
  const [data, setData] = []
  const [isCheckedFirst, setIsCheckedFirst] = useState(false);
  const [isCheckedSecond, setIsCheckedSecond] = useState(false);
  const [isCheckedThird, setIsCheckedThird] = useState(false);
  const [isCheckedFourth, setIsCheckedFourth] = useState(false);
  const [isCheckedFifth, setIsCheckedFifth] = useState(false);
  const [isCheckedSixth, setIsCheckedSixth] = useState(false);

  const handleCheckedFirst = () => {
    setIsCheckedFirst(!isCheckedFirst);

    if(isCheckedFirst){
      setIsCheckedFirst(!isCheckedFirst);
    }
  };

  const handleCheckedSecond = () => {
    setIsCheckedSecond(!isCheckedSecond);
  };

  const handleCheckedThird = () => {
    setIsCheckedThird(!isCheckedThird);
  };

  const handleCheckedFourth = () => {
    setIsCheckedFourth(!isCheckedFourth);
  };

  const handleCheckedFifth = () => {
    setIsCheckedFifth(!isCheckedFifth);
  };

  const handleCheckedSixth = () => {
    setIsCheckedSixth(!isCheckedSixth);
  };
  
  return (
    <>
      <SocialMediaIcons />
      <main className="flex flex-col 2xl:flex-row xl:justify-center px-5 pb-5 pt-16 mt-[93px] xl:mt-[87px]  2xl:justify-around background-img xl:pt-[100px] xl:px-24 h-full">
      <div className="mb-12 ml-4 2xl:inline-block 2xl:p-5">
        <div className="mb-10">
          <h1 className="text-4xl text-white text-font-semibold md:text-5xl">BECOME A</h1>
          <h1 className="text-5xl md:text-7xl font-bold text-[#970000]">FRANCHISE</h1>
        </div>
        <div>
          <ul className="leading-relaxed text-white">
            <li  style={{ listStyleType: "square" }}>Passion for the industry and strong belief in our concept</li>
            <li  style={{ listStyleType: "square" }}>Willingness and ability to open multiple units over a defined period of time in a specific geographical area</li>
            <li  style={{ listStyleType: "square" }}>Minimum liquidity to open and operate specified number of units over a defined period of time in a specific geographical area</li>
            <li  style={{ listStyleType: "square" }}>Willingness and ability to issue bank guarantee in case needed</li>
            <li  style={{ listStyleType: "square" }}>5 years experience in Food & Beverage services/Restaurant sector</li>
            <li  style={{ listStyleType: "square" }}>Proven record of having developed or operated multi unit concepts</li>
            <li  style={{ listStyleType: "square" }}>Ability to establish an infrastructure dedicated to the development of our brand</li>
            <li  style={{ listStyleType: "square" }}>Local knowledge and expertise in the areas of real estate, government regulations, labor law and supply chain</li>
          </ul>
        </div>
        <div className="2xl:max-w-[50rem] mt-20 hidden 2xl:inline-block">
          <Image src={Franchise} alt="Franchise Image" />
        </div>
        </div>
        
        <div className="w-full mx-auto text-white 2xl:w-[35%]">
          <div className="w-full mx-auto">
                <>
                  <form className="text-white 2xl:pt-10 2xl:max-w-[35rem] md:w-full">
                    <div className="flex flex-col flex-wrap mb-2 lg:flex-row lg:justify-between lg:max-w-[100%]">
                      <div className="mb-5 lg:w-1/2">
                        <label className="block mb-3">Full Name<span className="text-[#970000]"> *</span></label>
                        <input type="text" required placeholder="placeholder" className="bg-[#171717] pl-5 py-3 rounded-3xl w-full max-w-5xl lg:max-w-[98%] 2xl:max-w-[95%] " />
                      </div>

                      <div className="mb-5 lg:w-1/2 ">
                        <label className="block mb-3">Profession Details<span className="text-[#970000]"> *</span></label>
                        <input type="text" required placeholder="placeholder" className="bg-[#171717] pl-5 py-3 rounded-3xl w-full max-w-5xl lg:max-w-[98%] 2xl:max-w-[95%] " />
                      </div>

                    </div>
                    <div className="flex flex-col flex-wrap mb-2 lg:flex-row lg:justify-between lg:max-w-[100%]">
                      <div className="mb-5 lg:w-1/2">
                        <label className="block mb-3">Company Name<span className="text-[#970000]"> *</span></label>
                        <input type="text" required placeholder="placeholder" className="bg-[#171717] pl-5 py-3 rounded-3xl w-full max-w-5xl lg:max-w-[98%] 2xl:max-w-[95%] " />
                      </div>
                    </div>
                    <div className="flex flex-col flex-wrap mb-2 lg:flex-row lg:justify-between lg:max-w-[100%]">
                      <div className="w-full mb-5">
                        <label className="block mb-3">Company Profile (Pdf or Doc)<span className="text-[#970000]"> *</span></label>
                        <input id="uploadBtn" type="file" required placeholder="placeholder" className="hidden" />
                        <label htmlFor="uploadBtn" className="bg-[#171717] pl-5 py-3 rounded-3xl w-full max-w-5xl lg:max-w-[98%] 2xl:max-w-[95%] block">Upload File</label>
                      </div>
                    </div>
                    <div className="flex flex-col flex-wrap mb-2 lg:flex-row lg:justify-between lg:max-w-[100%]">
                      <div className="mb-5 lg:w-1/2">
                        <label className="block mb-3">Email<span className="text-[#970000]"> *</span></label>
                        <input type="text" required placeholder="placeholder" className="bg-[#171717] pl-5 py-3 rounded-3xl w-full max-w-5xl lg:max-w-[98%] 2xl:max-w-[95%] " />
                      </div>

                      <div className="mb-5 lg:w-1/2 ">
                        <label className="block mb-3">Phone Number<span className="text-[#970000]"> *</span></label>
                        <input type="text" required placeholder="placeholder" className="bg-[#171717] pl-5 py-3 rounded-3xl w-full max-w-5xl lg:max-w-[98%] 2xl:max-w-[95%] " />
                      </div>

                    </div>

                    <div className="flex flex-col flex-wrap mb-2 lg:flex-row lg:justify-between lg:max-w-[100%]">
                      <div className="mb-5 lg:w-1/2">
                        <label className="block mb-3">Type Of Franchise<span className="text-[#970000]"> *</span></label>
                        <input type="text" required placeholder="placeholder" className="bg-[#171717] pl-5 py-3 rounded-3xl w-full max-w-5xl lg:max-w-[98%] 2xl:max-w-[95%] " />
                      </div>

                      <div className="mb-5 lg:w-1/2 ">
                        <label className="block mb-3">Investment<span className="text-[#970000]"> *</span></label>
                        <input type="text" required placeholder="placeholder" className="bg-[#171717] pl-5 py-3 rounded-3xl w-full max-w-5xl lg:max-w-[98%] 2xl:max-w-[95%] " />
                      </div>
                    </div>

                    <div className="max-w-5xl lg:max-w-[100%] mb-8">
                      <label>Previous Experience With A Franchise Company<span className="text-[#970000]"> *</span></label>
                      <textarea rows="3" required className="bg-[#171717] pl-5 pt-3 mt-3 rounded-2xl block w-full" placeholder="placeholder"></textarea>
                    </div>

                    {/* PRE-QUALIFICATIONS */}
                    <div className="flex flex-col flex-wrap mb-2 lg:max-w-[100%]">
                      <h2 className="mb-6 text-2xl font-semibold">PRE-QUALIFICATIONS</h2>
                      <div onClick={handleCheckedFirst} className={`${isCheckedFirst ? 'border border-[#970000]' : ''} flex items-center justify-center w-full text-[#7A7878] bg-[#171717] p-2 rounded-full hover:cursor-pointer sm:text-text-lg mb-5`}>
                          <label className="text-sm text-center md:text-base hover:cursor-pointer">I have a current line of credit or access to capital</label>
                      </div>
                      
                      <div onClick={handleCheckedSecond} className={`${isCheckedSecond ? 'border border-[#970000]' : ''} flex items-center justify-center w-full text-[#7A7878] bg-[#171717] p-2 rounded-full hover:cursor-pointer sm:text-text-lg mb-5`}>
                          <label className="text-sm text-center md:text-base hover:cursor-pointer">I am seeking a multi-unit opportunity</label>
                      </div>

                      <div onClick={handleCheckedThird} className={`${isCheckedThird ? 'border border-[#970000]' : ''} flex items-center justify-center w-full text-[#7A7878] bg-[#171717] p-2 rounded-full hover:cursor-pointer sm:text-text-lg mb-5`}>
                          <label className="text-sm text-center md:text-base hover:cursor-pointer">I have restaurant business experience</label>
                      </div>

                      <div onClick={handleCheckedFourth} className={`${isCheckedFourth ? 'border border-[#970000]' : ''} flex items-center justify-center w-full text-[#7A7878] bg-[#171717] p-2 rounded-full hover:cursor-pointer sm:text-text-lg mb-5`}>
                          <label className="text-sm text-center md:text-base hover:cursor-pointer">I, or one of my partners, has QSR Restaurant Experience</label>
                      </div>

                      <div onClick={handleCheckedFifth} className={`${isCheckedFifth ? 'border border-[#970000]' : ''} flex items-center justify-center w-full text-[#7A7878] bg-[#171717] p-2 rounded-full hover:cursor-pointer sm:text-text-lg mb-5`}>
                          <label className="text-sm text-center md:text-base hover:cursor-pointer">I currently am (or have previously been) a business owner</label>
                      </div>

                      <div onClick={handleCheckedSixth} className={`${isCheckedSixth ? 'border border-[#970000]' : ''} flex items-center justify-center w-full text-[#7A7878] bg-[#171717] p-2 rounded-full hover:cursor-pointer sm:text-text-lg mb-5`}>
                          <label className="text-sm text-center md:text-base hover:cursor-pointer">I am currently a multi-unit franchise</label>
                      </div>
                    </div>
                    <button className="bg-[#970000] px-16 rounded-3xl py-2 text-xl mt-10 w-full max-w-5xl lg:max-w-[20rem] 2xl:max-w-[16rem]">SUBMIT</button>
                  </form>
                </>
              </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default FranchisePage