"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { IoReorderThree } from "react-icons/io5";

type Props = {};

const HomePageNavbar = (props: Props) => {
  const param = useSearchParams();
  const view = param.get("view");
  const [dropDownOpen, setDropDownOpen] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767) {
        setDropDownOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-gray-100 p-2 ">
      <div className="max-w-7xl mx-auto">
        <div
          className={`${
            dropDownOpen
              ? "flex-col items-start justify-start"
              : "flex-row justify-between items-center"
          } flex  `}
        >
          <div className="flex justify-between items-center w-full ">
            <div className="flex">
              <Image
                src={"/foreteachLogo.png"}
                alt="Logo"
                width={200}
                height={200}
              />
            </div>
            <button
              className="md:hidden flex mr-4 border-2 active:border-black rounded-md"
              onClick={() => {
                setDropDownOpen((prev) => !prev);
              }}
            >
              <IoReorderThree size={30} />
            </button>
          </div>
          <div
            className={`${
              dropDownOpen ? "flex flex-col" : "hidden"
            } md:flex justify-evenly md:items-center pr-4 md:gap-2 gap-5 p-2 lg:text-base text-sm`}
          >
            <Link href={"/?view=about"}>
              <span
                className={`${
                  view === "about" ? "text-black" : "text-gray-500"
                } rounded-full  p-2 px-4  hover:text-black`}
              >
                About
              </span>
            </Link>
            <Link href={"/?view=investor"}>
              <span
                className={`${
                  view === "investor" ? "text-black" : "text-gray-500"
                } rounded-full  p-2 px-4  hover:text-black`}
              >
                Investor
              </span>
            </Link>

            <Link href={"/?view=events"}>
              <span
                className={`${
                  view === "events" ? "text-black" : "text-gray-500"
                } rounded-full  p-2 px-4  hover:text-black`}
              >
                Events
              </span>
            </Link>

            <Link href="/user/signup">
              <span className="text-white rounded-full bg-blue-500 p-2 px-4 md:ml-0 ml-4 hover:bg-gray-600 text-nowrap">
                Sign up
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageNavbar;
