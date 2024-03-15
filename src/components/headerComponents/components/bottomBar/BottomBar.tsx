import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { BiMessageDetail } from "react-icons/bi";
import { BsBellFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import Image from "next/image";

type Props = {};

const BottomBar = (props: Props) => {
  const pathname = usePathname();
  const view = pathname.split("/")[1];

  return (
    <div className=" bottom-0 justify-evenly items-center gap-2 md:hidden flex bg-gray-100 rounded-t-xl shadow-inner w-full fixed p-2">
      <Link
        href={"/feed"}
        className={`flex flex-col justify-center items-center cursor-pointer ${
          view === "feed"
            ? "text-black border-b-2 border-black"
            : "text-gray-600 hover:text-black"
        }  p-2 pb-0`}
      >
        <IoHome size={20} />
        <span className="text-[10px]  ">Home</span>
      </Link>
      <Link
        href={"/messages"}
        className={`flex flex-col justify-center items-center cursor-pointer ${
          view === "messages"
            ? "text-black border-b-2 border-black"
            : "text-gray-600 hover:text-black"
        }  p-2 pb-0`}
      >
        <BiMessageDetail size={20} />
        <span className="text-[10px]">Messages</span>
      </Link>
      <Link
        href={"/notifications"}
        className={`flex flex-col justify-center items-center cursor-pointer ${
          view === "notifications"
            ? "text-black border-b-2 border-black"
            : "text-gray-600 hover:text-black"
        }  p-2 pb-0`}
      >
        <BsBellFill size={20} />
        <span className="text-[10px]">Notification</span>
      </Link>
      <Link
        href={"/user/profile?view=general"}
        className="flex flex-col justify-center items-center cursor-pointer text-gray-600  p-2 pb-0 hover:text-black"
      >
        <>
          <FaUserCircle size={20} />{" "}
        </>

        <span className="text-[10px] flex items-center">Me</span>
      </Link>
    </div>
  );
};

export default BottomBar;
