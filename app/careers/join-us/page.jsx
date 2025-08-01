import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import SocialMediaIcons from "@/components/SocialMediaIcons";
import TeamCard from "@/components/TeamCard";

const JoinUs = () => {
  return (
    <>
      <SocialMediaIcons />

      <div className="background-img mt-[93px] xl:mt-[87px]">
        <main className="py-5 mb-1 lg:mb-10 2xl:mb-16 relative">
          <div className="px-6 lg:px-10 xl:px-72 mt-5">
            <Breadcrumb
              items={[{ label: "Homepage", href: "/" }, { label: "Careers" }]}
            />
          </div>

          <div className="px-6 lg:px-10 xl:px-72 flex flex-col items-start  mt-10">
            <h1 className="font-bold text-[#191819] text-4xl">JOIN OUR</h1>
            <h2 className="font-bold text-[#970000] text-6xl">TEAM</h2>
          </div>

          <div className="px-6 lg:px-10 xl:px-72">
            <div className="grid grid-cols-1 md:grid-cols-2 justify-center my-12 gap-6 xl:gap-5">
              <div>
                <TeamCard />
              </div>
              <div>
                <TeamCard />
              </div>
              <div>
                <TeamCard />
              </div>
              <div>
                <TeamCard />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default JoinUs;
