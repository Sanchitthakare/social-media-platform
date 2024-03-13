"use client";

import React, { useState } from "react";
import Sidebar from "./sidebar/Sidebar";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useSwipeable } from "react-swipeable";
import { AnimatePresence, motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";

type Props = {
  getIconByName: (name: string) => JSX.Element | null;
  items: Array<string>;
};

const MainUI = ({ getIconByName, items }: Props) => {
  const { data: session, status } = useSession();
  const view = useSearchParams().get("view") ?? "home";
  const sidebarRef = React.useRef<HTMLDivElement>(null);
  const sidebarButtonRef = React.useRef<HTMLDivElement>(null);
  const [showSidebar, setShowSidebar] = useState(false);
  const [makeSidebarSlide, setMakeSidebarSlide] = useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 639) {
        setMakeSidebarSlide(false);
        setShowSidebar(true);
      } else {
        setMakeSidebarSlide(true);
        setShowSidebar(false);
      }
    };
    const handleClickOutside = (event: MouseEvent) => {
      if (
        window.innerWidth < 639 && 
        sidebarRef.current &&
        sidebarButtonRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        !sidebarButtonRef.current.contains(event.target as Node)
      ) {
        setShowSidebar(false);
      }
    };

    handleResize()

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarRef]);

  //when user slide from left to right make sidebar open
  const handlers = useSwipeable({
    onSwipedRight: (eventData) => makeSidebarSlide ? setShowSidebar(true): "",
    onSwipedLeft: (eventData) => makeSidebarSlide ? setShowSidebar(false): "",
  });

  return (
    <div className="w-full p-2 pt-20 mb-16 md:mb-0" {...handlers}>
      <div className="max-w-7xl mx-auto flex flex-col">
        <div className="p-2 flex flex-row-reverse sm:hidden justify-start items-center gap-4 mb-4">
          <div
            className=""
            onClick={() => setShowSidebar((prev) => !prev)}
            ref={sidebarButtonRef}
          >
            <GiHamburgerMenu
              size={30}
              className="border-2 active:border-black p-1 rounded cursor-pointer"
            />
          </div>
          <div className="bg-blue-300 p-2 rounded-xl cursor-pointer flex space-x-2 items-center justify-center">
            <span> {getIconByName(view as string)}</span>
            <span className="lg:text-base text-xs ">
              {view && (view[0] as string).toUpperCase() + view?.slice(1)}
            </span>
          </div>
        </div>
        <div className="flex w-full">
          <AnimatePresence>
            {showSidebar && (
              <motion.div
                className={`w-72 bg-blue-50 rounded sm:flex  lg:justify-start px-2 items-start py-2   sm:mr-1 ${
                  makeSidebarSlide ? "fixed top-0 left-0 h-screen" : "h-fit"
                }`}
                ref={sidebarRef}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.2 }}
              >
                <Sidebar getIconByName={getIconByName} items={items} />
              </motion.div>
            )}
          </AnimatePresence>
          <div className="w-full h-screen bg-red-200 sm:m-1 rounded text-wrap flex flex-col flex-wrap mx-2">
            Posts - {status}
            {session && <div>{session?.user?.name}</div>}
            
            {session && <div>id:{session?.user?.id}</div>}
            {session && <div>{session?.user?.email}</div>}
            {session && <div>{session?.user?.profileType}</div>}
            {session && <div>{session?.user?.loggedInUsing}</div>}
            {session && (
              <div>{session?.user?.firstTimeLogin ? "true" : "false"}</div>
            )}
          </div>
          <div className="w-[600px] h-screen bg-yellow-200 m-1 rounded tablet:flex hidden">
            Activitys
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainUI;
