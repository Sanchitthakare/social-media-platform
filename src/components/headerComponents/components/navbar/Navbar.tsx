import React, { useEffect, useRef, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { BiMessageDetail } from "react-icons/bi";
import { BsBellFill } from "react-icons/bs";
import { IoHome } from "react-icons/io5";
import { MdOutlineManageSearch } from "react-icons/md";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaCaretDown } from "react-icons/fa";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

type Props = {
  searchValue: string;
  setSearchValue: (value: string) => void;
};

const Navbar = ({ searchValue, setSearchValue }: Props) => {
  const { data: session, status } = useSession();
  const pathname = usePathname();
  const view = pathname.split("/")[1];

  const [openDropDown, setOpenDropDown] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropDown(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="border-b boder-2 shadow-md w-full fixed bg-white z-50">
      <div className=" max-w-7xl mx-auto ">
        <div className="relative p-2 flex  justify-between items-center ">
          <div className="flex justify-center items-center space-x-8">
            <div>
              <Image
                src={"/foreteachLogo.png"}
                alt="Logo"
                width={200}
                height={200}
              />
         
            </div>
            <div
              className={`w-full p-1 border-2 rounded-lg flex space-x-2  ${
                searchValue.length > 0 ? "text-black" : "text-gray-600"
              }`}
            >
              <span>
                <MdOutlineManageSearch size={30} className="pl-2" />
              </span>
              <input
                type="text"
                placeholder="Search..."
                className="md:w-56 w-full outline-none border-none bg-transparent"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </div>
          </div>
          <div className=" justify-center items-center gap-2 md:flex hidden">
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
            <div
              className="flex flex-col justify-center items-center cursor-pointer text-gray-600  p-2 pb-0 hover:text-black "
              onClick={() => setOpenDropDown((prev) => !prev)}
              ref={dropdownRef}
            >
              {session?.user?.image ? (
                <>
                  <Image
                    src={session?.user?.image}
                    alt="user"
                    width={25}
                    height={25}
                    className="rounded-full"
                  />
                </>
              ) : (
                <>
                  <FaUserCircle size={20} />{" "}
                </>
              )}
              <span className="text-[10px] flex items-center">
                Me <FaCaretDown />
              </span>
            </div>
          </div>
          <div className="absolute top-20 right-4 ">
            {openDropDown && (
              <div className=" bg-white shadow-md w-72  rounded-lg flex flex-col gap-2 border justify-center items-center ">
                <div className="flex mt-2">
                  <div className="m-2 flex justify-center items-start">
                    {session?.user?.image ? (
                      <>
                        <Image
                          src={session?.user?.image}
                          alt="user"
                          width={100}
                          height={100}
                          className="rounded-full"
                        />
                      </>
                    ) : (
                      <>
                        <FaUserCircle size={40} />{" "}
                      </>
                    )}
                  </div>
                  <div className="flex flex-col justify-center items-start p-2">
                    <h1 className="font-semibold">{session?.user.name}</h1>
                    <h5 className="text-[12px]">
                      AI | Data Science | Full Stack Developer | MERN Stack |
                      Next.js | Java | Python
                    </h5>
                  </div>
                </div>
                <Link
                  href={"/user/profile?view=general"}
                  className="hover:bg-blue-700 hover:text-white  px-6 text-center rounded-full border-2 border-blue-700"
                >
                  View Profile
                </Link>
                <Link
                  href={"/?view=setting"}
                  className="hover:bg-gray-100 w-full p-1 text-left pl-6"
                >
                  Setting
                </Link>
                <div
                  onClick={() => {
                    signOut();
                  }}
                  className="hover:bg-gray-100 w-full p-1 text-left pl-6 cursor-pointer mb-4"
                >
                  Logout
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
