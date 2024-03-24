"use client";

import React from "react";
import MainUI from "./mainUI";
import GetUserDataModal from "@/components/feedComponents/components/getUserDataModal/GetUserDataModal";
import { useSession } from "next-auth/react";
import { HiHome } from "react-icons/hi";
import { FaCalendarAlt, FaStore, FaUserFriends } from "react-icons/fa";
import { MdGroups3, MdTimer, MdVideoCameraBack } from "react-icons/md";
import { BsCollectionPlayFill } from "react-icons/bs";
import { GrGallery } from "react-icons/gr";
import { useRouter } from "next/navigation";
import { FcSettings } from "react-icons/fc";

type Props = {};

const Main = (props: Props) => {
  const router = useRouter();
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/")
    },
  });

  const [showModal, setShowModal] = React.useState(false);
  const items = [
    "Home",
    "Friends",
    "Groups",
    "MarketPlace",
    "Watch",
    "Memories",
    "Events",
    "Gallery",
    "Videos",
    "Settings"
  ];

  function getIconByName(name: string) {
    if (name === null) name = "home";
    switch (name.toLowerCase()) {
      case "home":
        return <HiHome size={18} />;
      case "friends":
        return <FaUserFriends size={18} />;
      case "groups":
        return <MdGroups3 size={18} />;
      case "marketplace":
        return <FaStore size={18} />;
      case "watch":
        return <BsCollectionPlayFill size={18} />;
      case "memories":
        return <MdTimer size={18} />;
      case "events":
        return <FaCalendarAlt size={18} />;
      case "gallery":
        return <GrGallery size={18} />;
      case "videos":
        return <MdVideoCameraBack size={18} />;
      case "settings":
        return <FcSettings size={18}/>;
      default:
        return null;
    }
  }

  React.useEffect(() => {
    if (status === "authenticated" && session?.user?.firstTimeLogin) {
      setShowModal(true);
    }
  }, [status, session]);

  return (
    <>
      <MainUI getIconByName={getIconByName} items={items} />
      {showModal && <GetUserDataModal setShowModal={setShowModal} />}
    </>
  );
};

export default Main;
