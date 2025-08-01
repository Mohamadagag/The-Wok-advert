import Image from "next/image";
import Footer from "@/components/Footer";
import Image1 from "@/public/image1.png";
import Image2 from "@/public/image2.png";
import Image3 from "@/public/image3.png";
import Banner from "@/public/banner.png";
import SocialMediaIcons from "@/components/SocialMediaIcons";
import Breadcrumb from "@/components/Breadcrumb";

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
        <div className="flex w-full justify-between items-center px-6 lg:px-10 xl:px-72">
          <div>
            <h1 className="font-extrabold text-6xl uppercase max-w-[27rem] mb-10">
              think inside the box
            </h1>
            <p className="mb-10 font-medium text-[#191819] text-2xl max-w-[42rem] text-[24px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </p>
            <button className="bg-[#AA1E2E] text-[#FFFCF4] py-3 px-8 rounded-lg font-bold text-2xl">
              ORDER NOW
            </button>
          </div>
          <div>
            <Image src={Image1} alt="TheWok Image1" />
          </div>
        </div>

        {/* Secion */}
        <div className="h-[500px] bg-[#191819] flex justify-between items-center px-6 lg:px-10 xl:px-72">
          <div>
            <Image src={Image2} alt="TheWok Image2" />
          </div>
          <div className="max-w-[40rem] ">
            <h2 className="text-[#AA1E2E] font-bold text-[40px] mb-4 uppercase">
              Our Story
            </h2>
            <p className="text-[#FFFCF4] font-medium mb-4 text-xl">
              Welcome to The Wok, where we're flipping the script on Asian
              cuisine in Lebanon.
            </p>
            <p className="text-[#FFFCF4] font-medium mb-4 text-xl">
              We're not your average spot – we're the trendsetters, bringing
              that authentic street food experience straight to your taste buds.
            </p>
            <p className="text-[#FFFCF4] font-medium text-xl">
              We're all about quality and flavor, using only the freshest
              ingredients and staying true to Asian culinary traditions. Each
              bite is a burst of excitement that'll have you hooked from the
              first taste.
            </p>
          </div>
        </div>

        {/* Secion */}
        <div className="relative flex w-full justify-between items-center px-6 lg:px-10 xl:px-72 py-36">
          <div>
            <h1 className="font-extrabold text-[#AA1E2E] text-[40px] uppercase max-w-[27rem] mb-10">
              about us
            </h1>
            <p className="mb-10 font-medium text-xl max-w-[42rem] text-[#191819]">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>

            <p className="mb-10 font-medium text-xl max-w-[42rem] text-[#191819]">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
              non numquam eius modi tempora incidunt ut labore et dolore magnam
              aliquam quaerat voluptatem.
            </p>

            <p className="mb-10 font-medium text-xl max-w-[42rem] text-[#191819]">
              Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur?
            </p>

            <p className="mb-10 font-medium text-xl max-w-[42rem] text-[#191819]">
              Quis autem vel eum iure reprehenderit qui in ea voluptate velit
              esse quam nihil molestiae consequatur, vel illum qui dolorem eum
              fugiat quo voluptas nulla pariatur?
            </p>

            <p className="mb-10 font-medium text-xl max-w-[42rem] text-[#191819]">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum.
            </p>
          </div>
          <div className="absolute right-0 top-0">
            <Image src={Image3} alt="TheWok Image3" />
          </div>
        </div>

        {/* Secion */}
        <div className="relative w-full max-h-[700px] overflow-hidden flex justify-center items-center">
          {/* Image */}
          <Image
            src={Banner}
            alt="TheWok Banner"
            className="h-auto w-full object-contain"
          />

          {/* Overlayed content */}
          <div className="absolute bottom-[60px] w-full px-6 lg:px-10 xl:px-72">
            <div className="max-w-[48rem]">
              <h1 className="md:text-5xl mb-6 text-[#FFFCF4] uppercase font-extrabold text-6xl max-w-[27rem]">
                think inside the box
              </h1>
              <p className="text-[#FFFCF4] font-medium text-2xl mb-11 max-w-[40rem]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              </p>
              <button className="bg-[#AA1E2E] text-[#FFFCF4] py-3 px-8 rounded-lg font-bold text-2xl">
                ORDER NOW
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
