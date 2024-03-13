"use client";

import React from "react";
import MainUI from "./mainUI";
import { HiHome } from "react-icons/hi";
import { FaCalendarAlt, FaStore, FaUserFriends } from "react-icons/fa";
import { MdGroups3, MdTimer, MdVideoCameraBack } from "react-icons/md";
import { BsCollectionPlayFill } from "react-icons/bs";
import { GrGallery } from "react-icons/gr";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { useSession } from "next-auth/react";

type Props = {};

const Main = (props: Props) => {
  const items = [
    "General",
    "Analytics",
    "Creator Mode",
    "Activitys",
    "Experience",
    "Education",
    "Certifications",
    "Projects",
    "Skills",
    "Intresets",
  ];

  function getIconByName(name: string) {
    if (name === null) name = "general";
    switch (name.toLowerCase()) {
      case "general":
        return <HiHome size={18} />;
      case "analytics":
        return <FaUserFriends size={18} />;
      case "creator mode":
        return <MdGroups3 size={18} />;
      case "activitys":
        return <FaStore size={18} />;
      case "experience":
        return <BsCollectionPlayFill size={18} />;
      case "education":
        return <MdTimer size={18} />;
      case "certifications":
        return <FaCalendarAlt size={18} />;
      case "projects":
        return <GrGallery size={18} />;
      case "skills":
        return <MdVideoCameraBack size={18} />;
      case "intresets":
        return <BiSolidMessageSquareDetail size={18} />;
      default:
        return null;
    }
  }

  return (
    <>
      <MainUI getIconByName={getIconByName} items={items} />
    </>
  );
};

export default Main;
