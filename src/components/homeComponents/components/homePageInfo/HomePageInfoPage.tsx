import React from "react";
import Image from "next/image";
import girl_image from "./girl_image.png";

const HomePageInfoPage = () => {
  return (
    <div className="max-w-7xl mx-auto mt-16 p-2">
      <div className="bg-blue-200 flex w-full p-4 rounded-xl md:rounded-full mb-4 ">
        <div className="hidden md:w-1/3 bg-white rounded-l-full md:flex justify-center items-center text-2xl text-blue-500">
          <div style={{ width: '100%', maxWidth: '300px', maxHeight: '300px' ,borderRadius: '50%'}}>
            <Image src={girl_image} alt="girl_image" layout="responsive" width={300} height={300} />
          </div>
        </div>
        <div className="w-full md:w-2/3 p-10 flex flex-col gap-4">
        <h3 className="text-4xl font-bold text-blue-800 dark:text-blue" style={{ marginTop: "-20px" }}>About ForeTeach</h3>

        <br/>
          <p className="text-lg text-gray-700 leading-relaxed pl-4"></p>
           
          <p>ForeTeach is a platform where you can learn, earn, sell, and build your business from scratch.
            <br/>
            <br/>
            Here, you can find Investor, Founders, Creators, Freelancer & Agencies from all across the nation to help you accelerate your start-up journey. Register Now with your LinkedIn profile and become part of India's first start-up network
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePageInfoPage;
