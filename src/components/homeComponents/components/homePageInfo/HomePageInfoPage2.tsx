import React from "react";
import { GoDotFill } from "react-icons/go";

type Props = {};

const HomePageInfoPage2 = (props: Props) => {
  return (
    <div className="p-2">
      <div className="max-w-7xl mx-auto flex flex-col gap-4">
        {/* First Box */}
        <div className="w-full bg-gray-100 p-6 py-10 mb-4 rounded-lg shadow-md flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="md:w-1/3">
            <p className="text-[22px] text-blue-800 font-bold text-center w-full">
              For Founders & Entrepreneurs
            </p>
          </div>
          <div className="md:w-2/3 space-y-4">
            <div className="flex justify-start items-start space-x-2 ml-3 ">
              <div className="flex mt-2">
                <GoDotFill size={15} />
              </div>
              <div className="flex w-full text-lg">
                Connect with different start-up stakeholders like Investors
                Founders, Students, Agencies & Creators.
              </div>
            </div>

            <div className="flex justify-start items-start space-x-2 ml-3">
              <div className="flex mt-2">
                <GoDotFill size={15} />
              </div>
              <div className="flex w-full text-lg">
                Find Investors based on their Industry, Sector, Cheque Size &
                Portfolio Companies.
              </div>
            </div>

            <div className="flex justify-start items-start space-x-2 ml-3">
              <div className="flex mt-2">
                <GoDotFill size={15} />
              </div>
              <div className="flex w-full text-lg">
                Host or Participate in local & national start-up events and find
                new leads for your business.
              </div>
            </div>

            <div className="flex justify-start items-start space-x-2 ml-3">
              <div className="flex mt-2">
                <GoDotFill size={15} />
              </div>
              <div className="flex w-full text-lg">
                Start your creator journey & build your personal brand within
                your community.
              </div>
            </div>
          </div>
        </div>

        {/* Second Box*/}
        <div className="w-full bg-gray-100 p-6 py-10  mb-4 rounded-lg shadow-md flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="md:w-1/3">
            <p className="text-[22px] text-blue-800 font-bold text-center w-full">
              For Investors & VC Funds
            </p>
          </div>

          <div className="md:w-2/3 space-y-4">
            <div className="flex justify-start items-start space-x-2 ml-3 ">
              <div className="flex mt-2">
                <GoDotFill size={15} />
              </div>
              <div className="flex w-full text-lg">
                Filter start-ups based on their sector, size, valuation &
                founders profile.
              </div>
            </div>

            <div className="flex justify-start items-start space-x-2 ml-3">
              <div className="flex mt-2">
                <GoDotFill size={15} />
              </div>
              <div className="flex w-full text-lg">
                Find start-up competitions & events and apply as a speaker or
                guest for increased visibility.
              </div>
            </div>

            <div className="flex justify-start items-start space-x-2 ml-3">
              <div className="flex mt-2">
                <GoDotFill size={15} />
              </div>
              <div className="flex w-full text-lg">
                Get a Golden Tick to stand out from the crowd and get deals
                directly into your inbox.
              </div>
            </div>

            <div className="flex justify-start items-start space-x-2 ml-3">
              <div className="flex mt-2">
                <GoDotFill size={15} />
              </div>
              <div className="flex w-full text-lg">
                Start your creator journey & build your personal brand and get
                increased visibility.
              </div>
            </div>
          </div>
        </div>

        {/* Third Box */}
        <div className="w-full bg-gray-100 p-6 py-10  mb-4 rounded-lg shadow-md flex flex-col md:flex-row justify-center items-center gap-8 ">
          <div className="md:w-1/3">
            <p className="text-[22px] text-blue-800 font-bold text-center w-full">
              For Agencies & B2B Companies
            </p>
          </div>

          <div className="md:w-2/3 space-y-4">
            <div className="flex justify-start items-start space-x-2 ml-3 ">
              <div className="flex mt-2">
                <GoDotFill size={15} />
              </div>
              <div className="flex w-full text-lg">
                Find thousands of leads for your business to boost your sales &
                to reduce your marketing spends.
              </div>
            </div>

            <div className="flex justify-start items-start space-x-2 ml-3">
              <div className="flex mt-2">
                <GoDotFill size={15} />
              </div>
              <div className="flex w-full text-lg">
                Create your own communities & share product and other relevant
                updates with your followers.
              </div>
            </div>

            <div className="flex justify-start items-start space-x-2 ml-3">
              <div className="flex mt-2">
                <GoDotFill size={15} />
              </div>
              <div className="flex w-full text-lg">
                Host & Participate in events across the nation to find more
                leads & to improve your network.
              </div>
            </div>

            <div className="flex justify-start items-start space-x-2 ml-3">
              <div className="flex mt-2">
                <GoDotFill size={15} />
              </div>
              <div className="flex w-full text-lg">
                Get all the Founders & Key decision makers at one place.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageInfoPage2;
