import Breadcrumb from "@/components/Breadcrumb";
import FamilyCard from "@/components/FamilyCard";
import Footer from "@/components/Footer";
import SocialMediaIcons from "@/components/SocialMediaIcons";

const Ourfamily = () => {
  return (
    // <>
    //   <SocialMediaIcons />
    //   <div className="background-img mt-[93px] xl:mt-[87px]">
    //     <main className="p-5 mb-10 2xl:mb-[7.5rem] relative">
    //       <div className="flex flex-col items-center">
    //         <div className="xl:w-[93%]">
    //           <div className="flex flex-col items-center xl:items-start my-5">
    //             <h1 className="font-bold text-[#FFFCF4] text-4xl">MEET OUR</h1>
    //             <h2 className="font-bold text-[#970000] text-6xl">FAMILY</h2>
    //           </div>

    // <div className="grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
    //   <FamilyCard />
    //   <FamilyCard />
    //   <FamilyCard />
    // </div>
    //         </div>
    //       </div>
    //     </main>

    //     <Footer />
    //   </div>
    // </>

    <>
      <SocialMediaIcons />

      <div className="background-img mt-[93px] xl:mt-[87px]">
        <main className="py-5 mb-1 lg:mb-10 2xl:mb-16 relative">
          <div className="px-6 lg:px-10 xl:px-72 mt-5">
            <Breadcrumb
              items={[
                { label: "Homepage", href: "/" },
                { label: "Our Family" },
              ]}
            />
          </div>

          <div className="px-6 lg:px-10 xl:px-72 flex flex-col items-start  my-10">
            <h1 className="font-bold text-[#191819] text-4xl">MEET OUR</h1>
            <h2 className="font-bold text-[#970000] text-6xl">FAMILY</h2>
          </div>

          <div className="px-6 lg:px-10 xl:px-72">
            <div className="grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
              <FamilyCard />
              <FamilyCard />
              <FamilyCard />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Ourfamily;
