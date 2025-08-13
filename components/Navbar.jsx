"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "../public/Logo.png";
import BurgerMenu from "../public/BurgerMenu.png";
import Link from "next/link";

const Navbar = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  useEffect(() => {
    if (isOverlayOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOverlayOpen]);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-[999999] bg-[#FFFCF4]">
        <div className="flex flex-row-reverse xl:flex-row items-center justify-between px-6 py-5 lg:px-10 xl:px-72 h-[80px] xl:h-[105px]">
          {/* Burger menu (both desktop & mobile) */}
          <button
            onClick={() => setIsOverlayOpen(true)}
            className=" xl:order-1"
          >
            <Image className="w-10" src={BurgerMenu} alt="BurgerMenu" />
          </button>

          {/* Logo center */}
          <Link href="/" className="w-28 xl:w-36 xl:order-2">
            <Image src={Logo} alt="THEWok Logo" />
          </Link>

          {/* ORDER NOW (visible on xl only) */}
          <a
            href="https://thewoklb.com/"
            target="_blank"
            className="hidden xl:inline-block bg-[#AA1E2E] rounded-md text-[#FFFCF4] px-3 py-1 lg:tracking-[0.25px]  font-semibold xl:order-3"
          >
            ORDER NOW
          </a>
        </div>
      </nav>

      {/* Overlay */}
      {isOverlayOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-90 z-[9999999] flex flex-col items-center justify-center space-y-8 text-[#FFFCF4] text-3xl">
          <button
            onClick={() => setIsOverlayOpen(false)}
            className="absolute top-5 right-5 text-[#FFFCF4] text-2xl"
          >
            ✕
          </button>

          {/* Common navigation links */}
          <Link
            className="hover:text-[#AA1E2E]"
            href="/"
            onClick={() => setIsOverlayOpen(false)}
          >
            Home
          </Link>
          <Link
            className="hover:text-[#AA1E2E]"
            href="/franchise"
            onClick={() => setIsOverlayOpen(false)}
          >
            Franchise
          </Link>
          <Link
            className="hover:text-[#AA1E2E]"
            href="/locations"
            onClick={() => setIsOverlayOpen(false)}
          >
            Locations
          </Link>

          <Link
            className="hover:text-[#AA1E2E]"
            href="/careers/join-us"
            onClick={() => setIsOverlayOpen(false)}
          >
            Join Us
          </Link>
          {/* <Link
            className="hover:text-[#AA1E2E]"
            href="/careers/our-family"
            onClick={() => setIsOverlayOpen(false)}
          >
            Our Family
          </Link> */}

          <Link
            className="hover:text-[#AA1E2E]"
            href="/talktous"
            onClick={() => setIsOverlayOpen(false)}
          >
            Talk to us
          </Link>

          {/* ORDER NOW for mobile users */}
          <a
            href="https://thewoklb.com/"
            target="_blank"
            onClick={() => setIsOverlayOpen(false)}
            className="xl:hidden bg-[#AA1E2E] rounded-md text-[#FFFCF4] px-6 py-3 font-semibold text-2xl"
          >
            ORDER NOW
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;
