"use client";

import Footer from "@/components/Footer";
import Image from "next/image";
import Feedback from "@/public/feedback.png";
import SocialMediaIcons from "@/components/SocialMediaIcons";
import { useState } from "react";
import axios from "axios";
import Breadcrumb from "@/components/Breadcrumb";
import FeedbackGroup from "@/public/FeedbackGroup.png";

const feedback = () => {
  // Feedback Form State
  const [fullName, setFullName] = useState("");
  const [professionalDetail, setprofessionalDetail] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [recommendation, setRecommendation] = useState("");
  const [yourExperience, setYourExperience] = useState("");

  // Message Us Form State
  const [msgFullName, setMsgFullName] = useState("");
  const [msgEmail, setMsgEmail] = useState("");
  const [msgPhoneNumber, setMsgPhoneNumber] = useState("");
  const [msgRecommendation, setMsgRecommendation] = useState("");

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://thewokemailservices.onrender.com/sendEmail", {
        fullName,
        professionalDetail,
        email,
        phoneNumber,
        recommendation,
        yourExperience,
      })
      .then(() => alert("Feedback sent successfully"))
      .catch(() => alert("An error occurred while sending feedback."));
  };

  const handleMessageUsSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://thewokemailservices.onrender.com/sendEmail", {
        fullName: msgFullName,
        email: msgEmail,
        phoneNumber: msgPhoneNumber,
        recommendation: msgRecommendation,
      })
      .then(() => alert("Message sent successfully"))
      .catch(() => alert("An error occurred while sending message."));
  };

  return (
    <>
      <SocialMediaIcons />
      <main>
        {/* Breadcrumbs */}
        <div className="px-6 lg:px-10 xl:px-72 mt-32 mb-6">
          <Breadcrumb
            items={[{ label: "Homepage", href: "/" }, { label: "Talk To Us" }]}
          />
        </div>
        {/* FeedBack section */}
        <div className="px-6 lg:px-10 xl:px-72 xl:justify-between pb-5 2xl:flex items-stretch">
          {/* Form */}
          <div className="w-full text-[#FFFCF4] 2xl:w-1/2">
            <div className="font-bold tracking-wide ">
              <h1 className="text-4xl lg:text-5xl text-[#191819]">
                SHARE YOUR
              </h1>
              <h2 className="text-6xl  lg:text-7xl text-[#970000]">FEEDBACK</h2>
            </div>
            <p className="mt-10 text-xl font-light max-w-[55ch] mb-5 text-[#191819]">
              Our aim is to grant you an outstanding your Experience! Let us
              know how we're doing.
            </p>
            <div className="w-full mx-auto">
              <>
                <form
                  className="text-[#FFFCF4] 2xl:pt-10 2xl:max-w-[40rem] 2xl:pr-10 md:w-full"
                  onSubmit={handleFeedbackSubmit}
                >
                  <div className="flex flex-col flex-wrap mb-2 lg:flex-row lg:justify-between lg:max-w-[100%]">
                    <div className="mb-5 lg:w-1/2">
                      <label className="block mb-3 text-[#191819]">
                        Full Name<span className="text-[#970000]"> *</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="placeholder"
                        className="bg-[#171717] placeholder-[#FFFCF4] pl-5 py-3 rounded-lg w-full max-w-5xl lg:max-w-[99%]"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                      />
                    </div>

                    <div className="mb-5 lg:w-1/2 ">
                      <label className="block mb-3 text-[#191819]">
                        Profession Details
                        <span className="text-[#970000]"> *</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="placeholder"
                        className="bg-[#171717] placeholder-[#FFFCF4] pl-5 py-3 rounded-lg w-full max-w-5xl lg:max-w-[98%] 2xl:max-w-[95%]"
                        value={professionalDetail}
                        onChange={(e) => setprofessionalDetail(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col flex-wrap mb-2 lg:flex-row lg:justify-between lg:max-w-[100%]">
                    <div className="mb-5 lg:w-1/2">
                      <label className="block mb-3 text-[#191819]">
                        Email<span className="text-[#970000]"> *</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="placeholder"
                        className="bg-[#171717] placeholder-[#FFFCF4] pl-5 py-3 rounded-lg w-full max-w-5xl lg:max-w-[98%] 2xl:max-w-[95%]"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                    <div className="mb-5 lg:w-1/2 ">
                      <label className="block mb-3 text-[#191819]">
                        Phone Number<span className="text-[#970000]"> *</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="placeholder"
                        className="bg-[#171717] placeholder-[#FFFCF4] pl-5 py-3 rounded-lg w-full max-w-5xl lg:max-w-[98%] 2xl:max-w-[95%]"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="max-w-5xl lg:max-w-[100%] mb-5">
                    <label className="text-[#191819]">
                      Share with us new item recommendations to be added to our
                      menu<span className="text-[#970000]"> *</span>
                    </label>
                    <textarea
                      rows="5"
                      required
                      className="bg-[#171717] placeholder-[#FFFCF4] pl-5 pt-3 mt-3 rounded-2xl block w-full "
                      placeholder="placeholder"
                      value={recommendation}
                      onChange={(e) => setRecommendation(e.target.value)}
                    />
                  </div>
                  <div className="max-w-5xl lg:max-w-[100%]">
                    <label className="text-[#191819]">
                      How was your your experience at The Wok?
                      <span className="text-[#970000]"> *</span>
                    </label>
                    <textarea
                      rows="5"
                      required
                      className="bg-[#171717] placeholder-[#FFFCF4] pl-5 pt-3 mt-3 rounded-2xl block w-full"
                      placeholder="placeholder"
                      value={yourExperience}
                      onChange={(e) => setYourExperience(e.target.value)}
                    />
                  </div>
                  <button
                    type="submit"
                    className="primary-btn px-16 rounded-lg py-2 text-xl mt-10 w-full max-w-5xl lg:max-w-[20rem] 2xl:max-w-[16rem]"
                  >
                    SUBMIT
                  </button>
                </form>
              </>
            </div>
          </div>
          <div className="hidden 2xl:flex xl:w-[30rem] 2xl:w-[35rem] xl:ml-10">
            <div className="relative w-full">
              <Image
                src={Feedback}
                alt="Feedback Image"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center my-10">
          <Image src={FeedbackGroup} alt="FeedbackGroup image" />
        </div>

        {/* MessageUs section */}

        <main className=" xl:mt-[87px] h-auto  flex justify-center mt-20 px-6 lg:px-10 xl:px-72">
          <div className="w-full 2xl:w-1/2">
            <form
              className="text-[#FFFCF4] 2xl:pt-10"
              onSubmit={handleMessageUsSubmit}
            >
              <h1 className="mb-10 text-5xl font-bold tracking-wide lg:text-5xl text-[#191819] text-center">
                MESSAGE <span className="text-[#970000]">US</span>
              </h1>

              <div className="flex flex-col flex-wrap mb-5 lg:flex-row lg:justify-between lg:max-w-[100%]">
                <div className="mb-5 lg:w-1/3">
                  <label className="block mb-3 text-[#191819]">
                    Full Name<span className="text-[#970000]"> *</span>
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="placeholder"
                    className="bg-[#171717] placeholder-[#FFFCF4] pl-5 py-3 rounded-lg w-full max-w-5xl lg:max-w-[98%] 2xl:max-w-[95%]"
                    value={msgFullName}
                    onChange={(e) => setMsgFullName(e.target.value)}
                  />
                </div>

                <div className="mb-5 lg:w-1/3">
                  <label className="block mb-3 text-[#191819]">
                    Phone Number<span className="text-[#970000]"> *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="placeholder"
                    className="bg-[#171717] placeholder-[#FFFCF4] pl-5 py-3 rounded-lg w-full max-w-5xl lg:max-w-[98%] 2xl:max-w-[95%]"
                    value={msgPhoneNumber}
                    onChange={(e) => setMsgPhoneNumber(e.target.value)}
                  />
                </div>

                <div className="lg:w-1/3">
                  <label className="block mb-3 text-[#191819]">
                    Email<span className="text-[#970000]"> *</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="placeholder"
                    className="bg-[#171717] placeholder-[#FFFCF4] pl-5 py-3 rounded-lg w-full max-w-5xl lg:max-w-[98%] 2xl:max-w-[95%]"
                    value={msgEmail}
                    onChange={(e) => setMsgEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="max-w-5xl lg:max-w-[100%]">
                <label className="text-[#191819]">
                  Share with us new item recommendations to be added to our menu
                  <span className="text-[#970000]"> *</span>
                </label>
                <textarea
                  rows="6"
                  required
                  className="bg-[#171717] placeholder-[#FFFCF4] pl-5 pt-3 mt-3 rounded-2xl block w-full"
                  placeholder="placeholder"
                  value={msgRecommendation}
                  onChange={(e) => setMsgRecommendation(e.target.value)}
                />
              </div>

              <div className="flex justify-center mt-5 mb-10">
                <button
                  type="submit"
                  className="primary-btn px-12 rounded-lg py-1 text-lg w-full max-w-5xl lg:max-w-[13rem]"
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </main>
      </main>
      <Footer />
    </>
  );
};

export default feedback;
