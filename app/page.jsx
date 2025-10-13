import Image from "next/image";
import Footer from "@/components/Footer";
import Image1 from "@/public/image1.png";
import Image3 from "@/public/image3.png";
import Banner from "@/public/banner2.png";
import MobileBanner from "@/public/banner3.png";
import SocialMediaIcons from "@/components/SocialMediaIcons";
import Breadcrumb from "@/components/Breadcrumb";

import Wings from "@/public/wings.png";
import Shrimp from "@/public/shrimp.png";
import Burger from "@/public/burger.png";
import Crab from "@/public/crab.png";

import Banner2 from "@/public/homepagebanner2.png";
import Whatsnew from "@/public/whatsnew.png";

import { FaApple } from "react-icons/fa6";
import { FaAndroid } from "react-icons/fa";



export default function Home() {
  return (
    <>
      <main className="relative background-img mt-[85px] xl:mt-[105px]">
        {/* Breadcrumb */}
        <div className="px-6 lg:px-10 xl:px-72 mt-32 mb-7">
          <Breadcrumb items={[{ label: "Homepage", href: "/" }]} />
        </div>
        <SocialMediaIcons />

        {/* Secion */}
        <div className="custom2:h-[400px] xl:h-[400px] 2xl:h-[600px] flex w-full justify-between items-center px-6 lg:px-10 xl:px-72">
          <div className="pb-5">
            <h1 className="font-extrabold text-4xl md:text-6xl uppercase max-w-96 md:max-w-[27rem] mb-10">
              download the app
            </h1>
            <p className="mb-10 font-medium text-[#191819] text-xl md:text-2xl lg:max-w-[33rem] xl:max-w-[42rem] text-[24px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex flex-col md:flex-row max-w-60 md:max-w-full">
            <a
              href="https://apps.apple.com/app/id6749677711"
              target="_blank"
              className="mb-5 md:mb-0 md:mr-5 flex items-center bg-[#AA1E2E] text-[#FFFCF4] py-3 px-12 rounded-lg font-bold  text-lg md:text-2xl"
            >
              GET APP <FaApple className="ml-4 text-4xl" />
            </a>

               <a
              href="https://play.google.com/store/apps/details?id=com.weevi.thewok"
              target="_blank"
              className="flex items-center bg-[#AA1E2E] text-[#FFFCF4] py-3 px-12 rounded-lg font-bold  text-lg md:text-2xl"
            >
              GET APP <FaAndroid className="ml-4 text-4xl" />
            </a>

            </div>
          </div>
          <div className="absolute right-0 2xl:-top-3 lg:-top-4 custom2:top-1 lg:max-w-[30rem] custom2:max-w-[30rem] 2xl:max-w-[45rem]">
            <Image
              className="hidden lg:block"
              src={Image1}
              alt="TheWok Image1"
            />
          </div>
        </div>


      <div className="flex items-center justify-center px-6 lg:px-10 xl:px-72 pt-60 pb-32">
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-40 lg:gap-8 custom3:gap-36 text-center "> 
          <div className="relative bg-[#191819] rounded-2xl py-8 px-6 flex flex-col items-center text-[#FFFCF4]">
            <div className="absolute -top-36">
              <Image
                src={Shrimp}
                alt="Wings"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>

            <div className="mt-14">
              <h3 className="text-2xl md:text-3xl font-extrabold mb-2 uppercase">Noodles</h3>
              <p className="text-base mb-8 font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <a target="_blank" href="https://thewoklb.com/" className="block w-full text-center bg-[#AA1E2E] text-[#FFFCF4] py-2 rounded-md hover:opacity-90 text-xl md:text-2xl font-bold uppercase">Order Now </a>
            </div>
          </div>

                <div className="relative bg-[#191819] rounded-2xl py-8 px-6 flex flex-col items-center text-[#FFFCF4]">
            <div className="absolute -top-[7.5rem]">
              <Image
                src={Crab}
                alt="Wings"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>

           <div className="mt-14">
              <h3 className="text-2xl md:text-3xl font-extrabold mb-2 uppercase">bowls</h3>
              <p className="text-base mb-8 font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <a target="_blank" href="https://thewoklb.com/" className="block w-full text-center bg-[#AA1E2E] text-[#FFFCF4]  py-2 rounded-md hover:opacity-90 text-xl md:text-2xl font-bold uppercase">Order Now </a>

            </div>
          </div>

                <div className="relative bg-[#191819] rounded-2xl py-8 px-6 flex flex-col items-center text-[#FFFCF4]">
            <div className="absolute -top-[5.5rem]">
              <Image
                src={Burger}
                alt="Wings"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>

           <div className="mt-14">
              <h3 className="text-2xl md:text-3xl font-extrabold mb-2 uppercase">sliders</h3>
              <p className="text-base mb-8 font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <a target="_blank" href="https://thewoklb.com/" className="block w-full text-center bg-[#AA1E2E] text-[#FFFCF4]  py-2 rounded-md hover:opacity-90 text-xl md:text-2xl font-bold uppercase">Order Now </a>

            </div>
          </div>

                <div className="relative bg-[#191819] rounded-2xl py-8 px-6 flex flex-col items-center text-[#FFFCF4]">
            <div className="absolute -top-32">
              <Image
                src={Wings}
                alt="Wings"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>

             <div className="mt-14">
              <h3 className="text-2xl md:text-3xl font-extrabold mb-2 uppercase">appetizers</h3>
              <p className="text-base mb-8 font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <a target="_blank" href="https://thewoklb.com/" className="block w-full text-center bg-[#AA1E2E] text-[#FFFCF4]  py-2 rounded-md hover:opacity-90 text-xl md:text-2xl font-bold uppercase">Order Now </a>

            </div>
          </div>
      </div>
    </div>


    <div className="max-w-[100rem] mx-auto px-10 mb-40">
      <Image src={Banner2} alt="TheWok Banner2" className="w-full h-auto object-cover"/>
    </div>

    <div className="relative flex flex-col lg:flex-row items-center justify-between px-6 lg:px-10 xl:px-72 py-16 bg-[#AA1E2E]">
          <div className="lg:max-w-lg z-10">
            <h2 className="text-3xl md:text-4xl font-black uppercase mb-4 text-[#FFFCF4]">
              whats new
            </h2>
            <p className="text-base text-justify font-medium mb-6 text-[#FFFCF4]">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
             <p className="text-base text-justify font-medium mb-10 text-[#FFFCF4]">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.             
              </p>
            <a  href="https://thewoklb.com/" 
            target="_blank"
             className="py-3 px-8 rounded-lg font-bold  text-xl md:text-2xl bg-[#191819] text-[#FFFCF4] hover:opacity-90 transition">
              ORDER NOW
            </a>
          </div>


           {/* xl:right-56 */}

          {/* Image shown only on large screens */}
         <div className="hidden lg:block absolute -top-14 lg:right-8 2xl:right-56 ">
          <div className="w-56 md:w-72 lg:w-[500px] xl:w-[550px] 2xl:w-[650px]">
            <Image
              src={Whatsnew}
              alt="Dish"
              className="w-full h-auto object-contain"
            />
          </div>
         </div>
    </div>

        {/* Desktop Banner */}
        <div className="hidden relative w-full max-h-[700px] overflow-hidden lg:flex justify-center items-center">
          <Image
            src={Banner}
            alt="TheWok Banner"
            className="h-auto w-full object-contain"
          />

          <div className="absolute top-1/2 w-full px-6 lg:px-10 xl:px-72 -translate-y-1/2">
            <div className="max-w-[48rem]">
              <h1 className="text-5xl md:text-6xl mb-6 text-[#FFFCF4] uppercase font-extrabold max-w-[27rem]">
                think inside the box
              </h1>
              {/* md:text-2xl lg:max-w-[33rem] xl:max-w-[42rem] text-[24px] */}
              <p className="md: lg:max-w-[33rem] xl:max-w-[42rem] text-[24px] text-[#FFFCF4] font-medium mb-11 max-w-[40rem]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a
                href="https://thewoklb.com/"
                target="_blank"
                className="bg-[#AA1E2E] text-[#FFFCF4] py-3 px-8 rounded-lg font-bold text-2xl"
              >
                ORDER NOW
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Banner */}
        <div className="lg:hidden relative w-full max-h-[700px] overflow-hidden flex justify-center items-center">
          <div className="w-full h-full">
            <Image
              src={MobileBanner}
              alt="TheWok Banner"
              className="object-cover"
            />
          </div>

          <div className="absolute top-1/2 w-full px-6 lg:px-10  -translate-y-1/2">
            <div className="max-w-[48rem]">
              <h1 className="text-2xl max-w-52 sm:text-2xl md:max-w-[25rem] md:text-5xl mb-2 md:mb-6 text-[#FFFCF4] uppercase font-extrabold">
                think inside the box
              </h1>
              <p className="text-[#FFFCF4] font-medium text-xs sm:text-base sm:max-w-80 md:text-lg mb-5 max-w-56 md:max-w- md:max-w-[27rem]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a
                href="https://thewoklb.com/"
                target="_blank"
                className="bg-[#AA1E2E] text-[#FFFCF4] py-2 px-4 md:py-3 md:px-8 md:text-base rounded-lg font-bold"
              >
                ORDER NOW
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer bgColor="bg-[#191819]" />
    </>
  );
}
