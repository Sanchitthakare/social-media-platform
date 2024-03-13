import React from "react";
import Image from "next/image";
type Props = {};

function SignInInfo({}: Props) {
  return (
    <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start">
      <div className="">
        <Image src={"/foreteachLogo.png"} alt="Logo" width={200} height={200} />
      </div>
      <div className="pl-3">
        <p className="text-2xl font-semibold text-white text-wrap text-center lg:text-left">
          Connect with Fellow Founders, Entrepreneurs, Investors & More!
        </p>
      </div>
      <div className="">
        <Image
          src={"/signupPageLeftImage.png"}
          alt="Logo"
          width={350}
          height={350}
        />
      </div>
    </div>
  );
}

export default SignInInfo;
