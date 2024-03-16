import React from "react";
import Image from "next/image";

type Props = {};

const HomePageInfoPage1 = (props: Props) => {
  return (
    <div className="p-2">
      <div className="max-w-7xl mx-auto flex flex-col gap-4">
        {/* Box 1 */}
        <div>
          <div className="flex w-full p-4 mb-4 rounded-xl md:rounded-r-full md:flex-row flex-col-reverse bg-pink-50">
            <div className="w-full md:w-2/3 p-4 flex gap-4 flex-col justify-center items-start">
              <p className="text-2xl text-blue-800 font-bold text-left pl-4">
                Investor's Connect
              </p>
              <p className="text-lg text-gray-700 leading-relaxed pl-4">
                Finding the right investor for your business was one hell of a
                task but not anymore. With our investor list, you can not only
                shortlist the investor that best suits your interest but also
                connect with them.
              </p>
              <button className="p-2 px-3 rounded-full border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white hover:scale-105 pl-8 transition-all duration-400 ml-4">
                Find Investor {"->"}
              </button>
            </div>
            <div className="flex md:w-1/3 p-6 justify-center items-center">
              <Image src={"/first.png"} alt="Image" width={300} height={300} />
            </div>
          </div>
        </div>

        {/* Box 2 */}
        <div>
          <div className="flex w-full p-4 mb-4 rounded-xl md:rounded-l-full md:flex-row-reverse flex-col-reverse  bg-blue-50">
            <div className="w-full md:w-2/3 p-4 flex gap-4 flex-col justify-center items-start">
              <p className="text-2xl text-blue-800 font-bold text-left pl-4">
                Host & Participate in Event
              </p>
              <p className="text-lg text-gray-700 leading-relaxed pl-4">
                Finding a start-up event where you can meet like minded
                individuals is just a click away.Host , participate and find all
                the Start-up event acrosss your city and the nation under one
                roof.
              </p>
              <button className="p-2 px-3 rounded-full border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white hover:scale-105 pl-8 transition-all duration-400 ml-4">
                Explore Event {"->"}
              </button>
            </div>
            <div className="flex md:w-1/3 p-6 justify-center items-center">
              <Image src={"/second.png"} alt="Image" width={300} height={300} />
            </div>
          </div>
        </div>

        {/* Box 3 */}
        <div>
          <div className="flex w-full p-4  rounded-xl md:rounded-r-full  md:flex-row flex-col-reverse  bg-pink-50">
            <div className="w-full md:w-2/3 p-4 flex gap-4 flex-col justify-center items-start">
              <p className="text-2xl text-blue-800 font-bold text-left pl-4">
                Create or join new communities
              </p>
              <p className="text-lg text-gray-700 leading-relaxed pl-4">
                Community lead growth is the future of markrting in the Start up
                indeustry . Create or join a community & get access to
                networking , content and expertise of established professionals
                & founders
              </p>
              <button className="p-2 px-3 rounded-full border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white hover:scale-105 pl-8 transition-all duration-400 ml-4">
                Explore Communities {"->"}
              </button>
            </div>
            <div className="flex md:w-1/3 p-6 justify-center items-center">
              <Image src={"/third.png"} alt="Image" width={300} height={300} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageInfoPage1;
