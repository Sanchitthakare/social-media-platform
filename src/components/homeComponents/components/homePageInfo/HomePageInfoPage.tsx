import React from "react";
import Image from "next/image";

const HomePageInfoPage = () => {
  return (
    <div className="max-w-7xl mx-auto mt-44  md:mt-28 p-2">
      <div className="relative bg-blue-50 flex w-full p-4 rounded-xl md:rounded-full md:flex-row flex-col md:pt-0 pt-52">
        <div className="  md:w-1/3 lg:md:w-1/4 rounded-l-full md:flex justify-center items-center text-2xl text-blue-500">
          <div className=" absolute inset-0 m-auto -top-40 801px:-top-14  md:m-0  md:-top-10 lg:-top-[67px]  952px:-top-[69px] 1072px:-top-[80px] 1091px:-top-[92px] xl:-top-[92px] md:-left-10 w-fit">
            <Image
              src={"/girl_image.png"}
              alt="Startup networking"
              width={350}
              height={350}
              className="rounded-full"
            />
          </div>
        </div>

        <div className="w-full md:w-2/3 lg:w-3/4 p-4 md:p-10 flex flex-col space-y-2 md:space-y-4">
          <h3 className="text-2xl md:text-4xl font-bold text-blue-800 dark:text-blue mt-[-100px] 350px:mt-[-16px] sm:mt-[-14px] md:mt-[-12px]">
            About ForeTeach
          </h3>

          <p className="text-lg text-gray-700 leading-relaxed pl-4"></p>

          <p>
            ForeTeach is a platform where you can learn, earn, sell, and build
            your business from scratch.
            <br></br>
            <br></br>
            Here, you can find Investor, Founders, Creators, Freelancer &
            Agencies from all across the nation to help you accelerate your
            start-up journey. Register Now with your LinkedIn profile and become
            part of India&apos;s first start-up network you accelerate your start-up
            journey. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePageInfoPage;
