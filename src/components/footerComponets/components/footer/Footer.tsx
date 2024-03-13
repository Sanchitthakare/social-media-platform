import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { ImInstagram } from "react-icons/im";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="flex justify-evenly items-center p-4 bg-[#202124] text-white sm:flex-row flex-col gap-4" >
      <div className="">ForeTeach</div>
      <div className="">ForeTeach, 2024 &#169; All Rights Reserved</div>
      <div className="flex gap-3">
        <ImInstagram size={20} />
        <FaFacebook size={20} />
        <BsTwitterX size={20} />
      </div>
    </div>
  );
};

export default Footer;
