"use client";
import Footer from "@/components/Footer";
import SocialMediaIcons from "@/components/SocialMediaIcons";
import Franchise from "@/public/franchise.png";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import Breadcrumb from "@/components/Breadcrumb";

const FranchisePage = () => {
  const [fullName, setFullName] = useState("");
  const [professionalDetail, setProfessionalDetail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [typeOfFranchise, setTypeOfFranchise] = useState("");
  const [investment, setInvestment] = useState("");
  const [
    previousExperienceWithAFranchiseCompany,
    setPreviousExperienceWithAFranchiseCompany,
  ] = useState("");
  const [attachment, setAttachment] = useState(null);
  const [capital, setCapital] = useState("");
  const [country, setCountry] = useState("");
  const [preQualifications, setPreQualifications] = useState([]);

  const [isCheckedFirst, setIsCheckedFirst] = useState(false);
  const [isCheckedSecond, setIsCheckedSecond] = useState(false);
  const [isCheckedThird, setIsCheckedThird] = useState(false);
  const [isCheckedFourth, setIsCheckedFourth] = useState(false);
  const [isCheckedFifth, setIsCheckedFifth] = useState(false);
  const [isCheckedSixth, setIsCheckedSixth] = useState(false);

  const handleCheckedFirst = () => {
    setIsCheckedFirst((prevIsCheckedFirst) => {
      const newpreQualifications = [...preQualifications];
      const text = "I have a current line of credit or access to capital";
      if (!prevIsCheckedFirst) {
        newpreQualifications.push(text);
      } else {
        const index = newpreQualifications.indexOf(text);
        if (index > -1) {
          newpreQualifications.splice(index, 1);
        }
      }
      setPreQualifications(newpreQualifications);
      return !prevIsCheckedFirst;
    });
  };

  const handleCheckedSecond = () => {
    setIsCheckedSecond((prevIsCheckedSecond) => {
      const newpreQualifications = [...preQualifications];
      const text = "I am seeking a multi-unit opportunity";
      if (!prevIsCheckedSecond) {
        newpreQualifications.push(text);
      } else {
        const index = newpreQualifications.indexOf(text);
        if (index > -1) {
          newpreQualifications.splice(index, 1);
        }
      }
      setPreQualifications(newpreQualifications);
      return !prevIsCheckedSecond;
    });
  };

  const handleCheckedThird = () => {
    setIsCheckedThird((prevIsCheckedThird) => {
      const newpreQualifications = [...preQualifications];
      const text = "I have restaurant business experience";
      if (!prevIsCheckedThird) {
        newpreQualifications.push(text);
      } else {
        const index = newpreQualifications.indexOf(text);
        if (index > -1) {
          newpreQualifications.splice(index, 1);
        }
      }
      setPreQualifications(newpreQualifications);
      return !prevIsCheckedThird;
    });
  };

  const handleCheckedFourth = () => {
    setIsCheckedFourth((prevIsCheckedFourth) => {
      const newpreQualifications = [...preQualifications];
      const text = "I, or one of my partners, has QSR Restaurant Experience";
      if (!prevIsCheckedFourth) {
        newpreQualifications.push(text);
      } else {
        const index = newpreQualifications.indexOf(text);
        if (index > -1) {
          newpreQualifications.splice(index, 1);
        }
      }
      setPreQualifications(newpreQualifications);
      return !prevIsCheckedFourth;
    });
  };

  const handleCheckedFifth = () => {
    setIsCheckedFifth((prevIsCheckedFifth) => {
      const newpreQualifications = [...preQualifications];
      const text = "I currently am (or have previously been) a business owner";
      if (!prevIsCheckedFifth) {
        newpreQualifications.push(text);
      } else {
        const index = newpreQualifications.indexOf(text);
        if (index > -1) {
          newpreQualifications.splice(index, 1);
        }
      }
      setPreQualifications(newpreQualifications);
      return !prevIsCheckedFifth;
    });
  };

  const handleCheckedSixth = () => {
    setIsCheckedSixth((prevIsCheckedSixth) => {
      const newpreQualifications = [...preQualifications];
      const text = "I am currently a multi-unit franchise";
      if (!prevIsCheckedSixth) {
        newpreQualifications.push(text);
      } else {
        const index = newpreQualifications.indexOf(text);
        if (index > -1) {
          newpreQualifications.splice(index, 1);
        }
      }
      setPreQualifications(newpreQualifications);
      return !prevIsCheckedSixth;
    });
  };

  const [file, setFile] = useState();
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert("Please select a File");
      return;
    }

    const formData = new FormData();
    formData.append("fullName", fullName);
    formData.append("email", email);
    formData.append("phoneNumber", phoneNumber);
    formData.append("typeOfFranchise", typeOfFranchise);
    formData.append("investment", investment);
    formData.append(
      "previousExperienceWithAFranchiseCompany",
      previousExperienceWithAFranchiseCompany
    );
    formData.append("professionalDetail", professionalDetail);
    formData.append("companyName", companyName);
    formData.append("capital", capital);
    formData.append("country", country);
    formData.append("attachment", file);

    preQualifications.forEach((qualification, index) => {
      formData.append(`preQualifications[${index}]`, qualification);
    });

    try {
      const response = await axios.post(
        "https://thewokemailservices.onrender.com/sendEmail",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("Email sent successfully");
    } catch (error) {
      alert("An Error has occurred");
    }
  };

  return (
    <>
      <SocialMediaIcons />

      <div className="px-6 lg:px-10 xl:px-72 mt-32 mb-7">
        <Breadcrumb
          items={[{ label: "Homepage", href: "/" }, { label: "Franchise" }]}
        />
      </div>
      <main className="relative px-6 lg:px-10 xl:px-72 flex flex-col xl:flex-row xl:justify-between pb-5 background-img h-full">
        {/* Left Side */}
        <div className="mb-12 2xl:inline-block">
          <div className="mb-10">
            <h1 className="text-4xl font-bold md:text-5xl text-[#191819]">
              BECOME A
            </h1>
            <h1 className="text-5xl md:text-7xl font-bold text-[#970000]">
              FRANCHISE
            </h1>
          </div>
          <div>
            <ul className="leading-relaxed text-[#191819] xl:max-w-[35rem] list-disc pl-6">
              <li className="mb-3 font-medium text-[#191819]">
                Passion for the industry and strong belief in our concept
              </li>
              <li className="mb-3 font-medium text-[#191819]">
                Willingness and ability to open multiple units over a defined
                period of time in a specific geographical area
              </li>
              <li className="mb-3 font-medium text-[#191819]">
                Minimum liquidity to open and operate specified number of units
                over a defined period of time in a specific geographical area
              </li>
              <li className="mb-3 font-medium text-[#191819]">
                Willingness and ability to issue bank guarantee in case needed
              </li>
              <li className="mb-3 font-medium text-[#191819]">
                5 years experience in Food & Beverage services/Restaurant sector
              </li>
              <li className="mb-3 font-medium text-[#191819]">
                Proven record of having developed or operated multi unit
                concepts
              </li>
              <li className="mb-3 font-medium text-[#191819]">
                Ability to establish an infrastructure dedicated to the
                development of our brand
              </li>
              <li className="font-medium text-[#191819]">
                Local knowledge and expertise in the areas of real estate,
                government regulations, labor law and supply chain
              </li>
            </ul>
          </div>
          <div className="2xl:max-w-[50rem] mt-20 hidden 2xl:inline-block absolute bottom-0 left-[200px]">
            <Image src={Franchise} alt="Franchise Image" />
          </div>
        </div>

        {/* Right Side (Form)*/}
        <div className="w-full 2xl:w-[35%]">
          <div className="w-full">
            <>
              <form
                className="text-[#FFFCF4] 2xl:pt-40 md:w-full pb-10"
                onSubmit={handleSubmit}
              >
                <div className="flex flex-col lg:flex-row lg:gap-x-5 mb-2">
                  <div className="mb-5 lg:w-1/2 2xl:w-full">
                    <label className="block mb-3 text-[#191819]">
                      Full Name<span className="text-[#970000]"> *</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      className="bg-[#171717] placeholder-[#FFFCF4] pl-5 py-3 rounded-lg w-full"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>

                  <div className="mb-5 lg:w-1/2 2xl:w-full">
                    <label className="block mb-3 text-[#191819]">
                      Profession Details
                      <span className="text-[#970000]"> *</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Profession"
                      className="bg-[#171717] placeholder-[#FFFCF4] pl-5 py-3 rounded-lg w-full"
                      value={professionalDetail}
                      onChange={(e) => setProfessionalDetail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-col flex-wrap mb-2 lg:flex-row lg:justify-between lg:max-w-[100%]">
                  <div className="mb-5 lg:w-1/2">
                    <label className="block mb-3 text-[#191819]">
                      Company Name<span className="text-[#970000]"> *</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Company Name"
                      className="bg-[#171717] placeholder-[#FFFCF4] pl-5 py-3 rounded-lg w-full max-w-5xl lg:max-w-[98%] 2xl:max-w-[95%]"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-col flex-wrap mb-2 lg:flex-row lg:justify-between lg:max-w-[100%]">
                  <div className="w-full mb-5">
                    <label className="block mb-3 text-[#191819]">
                      Company Profile (Pdf or Doc)
                      <span className="text-[#970000]"> *</span>
                    </label>
                    <input
                      id="uploadBtn"
                      name="uploadBtn"
                      type="file"
                      placeholder="placeholder"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <label
                      htmlFor="uploadBtn"
                      className="bg-[#171717] placeholder-[#FFFCF4] pl-5 py-3 rounded-lg w-full max-w-5xl block"
                    >
                      Select
                    </label>
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row lg:gap-x-5 mb-2">
                  <div className="mb-5 lg:w-1/2 2xl:w-full">
                    <label className="block mb-3 text-[#191819]">
                      Email<span className="text-[#970000]"> *</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Email"
                      className="bg-[#171717] placeholder-[#FFFCF4] pl-5 py-3 rounded-lg w-full"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="mb-5 lg:w-1/2 2xl:w-full relative">
                    <label className="block mb-3 text-[#191819]">
                      Phone Number<span className="text-[#970000]"> *</span>
                    </label>

                    {/* Wrapper for prefix and input */}
                    <div className="relative">
                      {/* Fake placeholder with colored prefix */}
                      {phoneNumber.length === 0 && (
                        <span className="absolute left-5 top-1/2 -translate-y-1/2 pointer-events-none">
                          <span className="text-gray-400">+961 |</span>
                          <span className="text-[#FFFCF4]"> 00 000 000</span>
                        </span>
                      )}

                      <input
                        type="tel"
                        required
                        className="bg-[#171717] pl-5 py-3 rounded-lg w-full text-[#FFFCF4]"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row lg:gap-x-5 mb-2">
                  <div className="mb-5 lg:w-1/2 2xl:w-full">
                    <label className="block mb-3 text-[#191819]">
                      Capital and assets NetWorth
                      <span className="text-[#970000]"> *</span>
                    </label>
                    <input
                      type="number"
                      required
                      placeholder="Capital in USD"
                      className="bg-[#171717] placeholder-[#FFFCF4] pl-5 py-3 rounded-lg w-full"
                      value={capital}
                      onChange={(e) => setCapital(e.target.value)}
                    />
                  </div>

                  <div className="mb-5 lg:w-1/2 2xl:w-full">
                    <label className="block mb-3 text-[#191819]">
                      Country<span className="text-[#970000]"> *</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Country"
                      className="bg-[#171717] placeholder-[#FFFCF4] pl-5 py-3 rounded-lg w-full"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row lg:gap-x-5 mb-2">
                  <div className="mb-5 lg:w-1/2 2xl:w-full">
                    <label className="block mb-3 text-[#191819]">
                      Type Of Franchise
                      <span className="text-[#970000]"> *</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Type Of Franchise"
                      className="bg-[#171717] placeholder-[#FFFCF4] pl-5 py-3 rounded-lg w-full"
                      value={typeOfFranchise}
                      onChange={(e) => setTypeOfFranchise(e.target.value)}
                    />
                  </div>

                  <div className="mb-5 lg:w-1/2 2xl:w-full">
                    <label className="block mb-3 text-[#191819]">
                      Investment<span className="text-[#970000]"> *</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Investment"
                      className="bg-[#171717] placeholder-[#FFFCF4] pl-5 py-3 rounded-lg w-full"
                      value={investment}
                      onChange={(e) => setInvestment(e.target.value)}
                    />
                  </div>
                </div>

                <div className="max-w-5xl lg:max-w-[100%] mb-8">
                  <label className="text-[#191819]">
                    Previous Experience With A Franchise Company
                    <span className="text-[#970000]"> *</span>
                  </label>
                  <textarea
                    rows="3"
                    required
                    className="bg-[#171717] placeholder-[#FFFCF4] pl-5 pt-3 mt-3 rounded-2xl block w-full"
                    placeholder="Type Here..."
                    value={previousExperienceWithAFranchiseCompany}
                    onChange={(e) =>
                      setPreviousExperienceWithAFranchiseCompany(e.target.value)
                    }
                  ></textarea>
                </div>

                {/* PRE-QUALIFICATIONS */}
                <div className="flex flex-col flex-wrap mb-2 lg:max-w-[100%]">
                  <h2 className="mb-6 text-2xl font-semibold text-[#191819]">
                    PRE-QUALIFICATIONS
                  </h2>

                  <div
                    onClick={handleCheckedFirst}
                    className={`${
                      isCheckedFirst ? "border-4 border-[#970000]" : ""
                    } flex items-center justify-center w-full text-[#FFFCF4] bg-[#171717] placeholder-[#FFFCF4] p-2 rounded-lg hover:cursor-pointer sm:text-text-lg mb-5 text-sm text-center md:text-base`}
                  >
                    <label>
                      I have a current line of credit or access to capital
                    </label>
                  </div>

                  <div
                    onClick={handleCheckedSecond}
                    className={`${
                      isCheckedSecond ? "border-4 border-[#970000]" : ""
                    } flex items-center justify-center w-full text-[#FFFCF4] bg-[#171717] placeholder-[#FFFCF4] p-2 rounded-lg hover:cursor-pointer sm:text-text-lg mb-5`}
                  >
                    <label className="text-sm text-center md:text-base hover:cursor-pointer">
                      I am seeking a multi-unit opportunity
                    </label>
                  </div>

                  <div
                    onClick={handleCheckedThird}
                    className={`${
                      isCheckedThird ? "border-4 border-[#970000]" : ""
                    } flex items-center justify-center w-full text-[#FFFCF4] bg-[#171717] placeholder-[#FFFCF4] p-2 rounded-lg hover:cursor-pointer sm:text-text-lg mb-5`}
                  >
                    <label className="text-sm text-center md:text-base hover:cursor-pointer">
                      I have restaurant business experience
                    </label>
                  </div>

                  <div
                    onClick={handleCheckedFourth}
                    className={`${
                      isCheckedFourth ? "border-4 border-[#970000]" : ""
                    } flex items-center justify-center w-full text-[#FFFCF4] bg-[#171717] placeholder-[#FFFCF4] p-2 rounded-lg hover:cursor-pointer sm:text-text-lg mb-5`}
                  >
                    <label className="text-sm text-center md:text-base hover:cursor-pointer">
                      I, or one of my partners, has QSR Restaurant Experience
                    </label>
                  </div>

                  <div
                    onClick={handleCheckedFifth}
                    className={`${
                      isCheckedFifth ? "border-4 border-[#970000]" : ""
                    } flex items-center justify-center w-full text-[#FFFCF4] bg-[#171717] placeholder-[#FFFCF4] p-2 rounded-lg hover:cursor-pointer sm:text-text-lg mb-5`}
                  >
                    <label className="text-sm text-center md:text-base hover:cursor-pointer">
                      I currently am (or have previously been) a business owner
                    </label>
                  </div>

                  <div
                    onClick={handleCheckedSixth}
                    className={`${
                      isCheckedSixth ? "border-4 border-[#970000]" : ""
                    } flex items-center justify-center w-full text-[#FFFCF4] bg-[#171717] placeholder-[#FFFCF4] p-2 rounded-lg hover:cursor-pointer sm:text-text-lg mb-5`}
                  >
                    <label className="text-sm text-center md:text-base hover:cursor-pointer">
                      I am currently a multi-unit franchise
                    </label>
                  </div>
                </div>
                <button
                  className="bg-[#970000] px-12 rounded-lg py-1 text-lg mt-1 w-full max-w-5xl lg:max-w-[16rem] primary-btn"
                  type="submit"
                >
                  SUBMIT
                </button>
              </form>
            </>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default FranchisePage;
