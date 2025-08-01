import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const SocialMediaIcons = () => {
  return (
    <div className="hidden xl:block">
      <div className="fixed top-1/2 left-5  z-[999999]">
        <div className="bg-[#AA1E2E] rounded-full p-2 mb-3">
          <a href="https://www.facebook.com/thewoklb" target="_blank">
            <FaFacebookF
              className="w-6 h-6 text-[#FFFCF4]"
              alt="Facebook Icon"
            />
          </a>
        </div>

        <div className="bg-[#AA1E2E] rounded-full p-2 mb-3">
          <a href="https://www.tiktok.com/@thewokarabia">
            <FaTiktok className="w-6 h-6 text-[#FFFCF4]" />
          </a>
        </div>

        <div className="bg-[#AA1E2E] rounded-full p-2 mb-3">
          <a href="https://www.instagram.com/thewokarabia">
            <FaInstagram className="w-6 h-6 text-[#FFFCF4]" />
          </a>
        </div>

        <div className="bg-[#AA1E2E] rounded-full p-2 mb-3">
          <a href="http://www.youtube.com/@thewokarabia">
            <FaYoutube className="w-6 h-6 text-[#FFFCF4]" />
          </a>
        </div>

        <div className="bg-[#AA1E2E] rounded-full p-3 mb-3">
          <a href="tel:70310350">
            <FaPhoneAlt className="w-4 h-4 text-[#FFFCF4]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaIcons;
