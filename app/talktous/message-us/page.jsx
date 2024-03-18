import Footer from "@/components/Footer"

const MessageUs = () => {
  return (
    <>
    <main className="message-bg px-5 pt-16">
        <div>
          <h1 className="text-white text-5xl font-bold tracking-wide mb-10 text-center lg:text-7xl">MESSAGE <span className="text-[#970000]">US</span></h1>
          {/* Form */}
          <>
            <form className="text-white lg:max-w-4xl lg:mx-auto">
              {/* Name, Phone Number, Email */}
              <div className="flex flex-col flex-wrap mb-5 lg:flex-row">
                <div className="mb-5 lg:w-1/3">
                  <label className="block mb-3">Full Name<span className="text-[#970000]"> *</span></label>
                  <input type="text" required placeholder="placeholder" className="bg-[#171717] pl-5 py-3 rounded-3xl w-full max-w-5xl lg:max-w-[18rem]" />
                </div>

                <div className="mb-5 lg:w-1/3">
                  <label className="block mb-3">Phone Number<span className="text-[#970000]"> *</span></label>
                  <input type="text" required placeholder="placeholder" className="bg-[#171717] pl-5 py-3 rounded-3xl w-full max-w-5xl lg:max-w-[18rem]" />
                </div>

                <div className="lg:w-1/3">
                <label className="block mb-3">Email<span className="text-[#970000]"> *</span></label>
                  <input type="text" required placeholder="placeholder" className="bg-[#171717] pl-5 py-3 rounded-3xl w-full max-w-5xl lg:max-w-[18rem]" />
                </div>      
              </div>

              {/* Text Area */}
              <div className="max-w-5xl ">
                <label className="">Share with us new item recommendations to be added to our menu<span className="text-[#970000]">*</span></label>
                <textarea rows="6" required className="bg-[#171717] pl-5 pt-3 mt-3 rounded-2xl block w-full" placeholder="placeholder"></textarea>
              </div>
              <button className="bg-[#970000] px-16 rounded-3xl py-2 text-xl mt-10 w-full max-w-5xl lg:max-w-[18rem] ">SUBMIT</button>
            </form>
          </>
        </div>          
    </main> 
    <Footer />
    </>
  )
}

export default MessageUs