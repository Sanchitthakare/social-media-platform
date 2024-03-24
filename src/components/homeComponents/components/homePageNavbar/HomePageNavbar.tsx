"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoReorderThree } from "react-icons/io5";
import { MdEventNote } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { TiHome } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import { AnimatePresence, motion } from "framer-motion";
import { useRecoilState } from "recoil";
import { dropDownState } from "../../../../../atom/dropDownAtom";

type Props = {
  makeSliderSlide: boolean;
  setMakeSliderSlide: (makeSliderSlide: boolean) => void;
};

const HomePageNavbar = ({ makeSliderSlide, setMakeSliderSlide }: Props) => {
  const pathname = usePathname();
  const [showSideBar, setShowSideBar] = useRecoilState(dropDownState);

  const sidebarRef = React.useRef<HTMLDivElement>(null);
  const sidebarButtonRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767) {
        setShowSideBar(true);
        setMakeSliderSlide(false);
      } else {
        setShowSideBar(false);
        setMakeSliderSlide(true);
      }
    };
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        sidebarButtonRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        !sidebarButtonRef.current.contains(event.target as Node)
      ) {
        setShowSideBar(false);
      }
    };
    handleResize();

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarRef, sidebarButtonRef]);

  return (
    <div className=" fixed top-0 left-0 w-full z-20 bg-gray-100  md:p-2">
      <div className="relative max-w-7xl mx-auto">
        <div
          className={`${
            makeSliderSlide
              ? "flex  items-start justify-start z-10"
              : "flex-row justify-between items-center"
          } flex  `}
        >
          <div
            className="flex justify-between items-center w-full "
            ref={sidebarButtonRef}
          >
            <div className="flex">
              <Image
                src={"/foreteachLogo.png"}
                alt="Startup networking"
                width={200}
                height={200}
              />
            </div>
            <button
              className="md:hidden flex mr-4 border-2 active:border-black rounded-md"
              onClick={() => {
                setShowSideBar((prev) => !prev);
              }}
            >
              <IoReorderThree size={30} />
            </button>
          </div>

          <AnimatePresence>
            {showSideBar && (
              <motion.div
                className={`${
                  makeSliderSlide
                    ? "absolute w-2/3 flex flex-col bg-white z-10 h-screen justify-start items-start border-r-2 rounded-r-2xl"
                    : "hidden"
                } md:flex md:justify-evenly md:items-center pr-4 md:gap-2 gap-5 p-2 lg:text-base text-sm`}
                ref={sidebarRef}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.2 }}
              >
                <div className="md:hidden flex justify-between items-center gap-2 mb-6 w-full">
                  <Image
                    src={"/foreteachLogo.png"}
                    alt="Startup networking"
                    width={150}
                    height={150}
                    className="flex w-32 sm:w-44"
                  />
                  <div
                    className="p-1 bg-gray-200 rounded-full mb-2 flex"
                    onClick={() => setShowSideBar(false)}
                  >
                    <RxCross2 size={20} />
                  </div>
                </div>
                <Link href={"/"} className="w-full md:w-fit">
                  <span
                    className={`${
                      pathname === "/"
                        ? "text-white bg-blue-500"
                        : "text-gray-500"
                    } rounded-full  p-2 px-4  hover:text-white hover:bg-blue-500  flex md:justify-center md:items-center justify-start items-start gap-2 w-full `}
                  >
                    <span>
                      <TiHome size={18} />
                    </span>
                    <span className="flex md:hidden lg:flex ">Home</span>
                  </span>
                </Link>
                <Link href={"/about"} className="w-full md:w-fit">
                  <span
                    className={`${
                      pathname === "/about"
                        ? "text-white bg-blue-500"
                        : "text-gray-500"
                    } rounded-full  p-2 px-4  hover:text-white hover:bg-blue-500  flex md:justify-center md:items-center justify-start items-start gap-2`}
                  >
                    <span>
                      <BsFillPersonLinesFill size={18} />
                    </span>
                    <span className="flex md:hidden lg:flex ">About</span>
                  </span>
                </Link>
                <Link href={"/investor"} className="w-full md:w-fit">
                  <span
                    className={`${
                      pathname === "/investor"
                        ? "text-white bg-blue-500"
                        : "text-gray-500"
                    } rounded-full  p-2 px-4  hover:text-white hover:bg-blue-500  flex md:justify-center md:items-center justify-start items-start gap-2`}
                  >
                    <span>
                      <RiMoneyDollarCircleLine size={18} />
                    </span>
                    <span className="flex md:hidden lg:flex ">Investor</span>
                  </span>
                </Link>
                <Link href={"/communities"} className="w-full md:w-fit">
                  <span
                    className={`${
                      pathname === "/communities"
                        ? "text-white bg-blue-500"
                        : "text-gray-500"
                    } rounded-full  p-2 px-4  hover:text-white hover:bg-blue-500  flex md:justify-center md:items-center justify-start items-start gap-2`}
                  >
                    <span>
                      <FaPeopleGroup size={18} />
                    </span>
                    <span className="flex md:hidden lg:flex ">Communities</span>
                  </span>
                </Link>

                <Link href={"/events"} className="w-full md:w-fit">
                  <span
                    className={`${
                      pathname === "/events"
                        ? "text-white bg-blue-500"
                        : "text-gray-500"
                    } rounded-full  p-2 px-4  hover:text-white hover:bg-blue-500  flex md:justify-center md:items-center justify-start items-start gap-2`}
                  >
                    <span>
                      <MdEventNote size={18} />
                    </span>
                    <span className="flex md:hidden lg:flex ">Events</span>
                  </span>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default HomePageNavbar;
