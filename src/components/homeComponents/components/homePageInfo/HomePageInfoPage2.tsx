import React from "react";
 
type Props = {};
 
const HomePageInfoPage2 = (props: Props) => {
  return (
    <div className="p-2">
      <div className="max-w-7xl mx-auto flex flex-col gap-4">
        {/* First Box */}
        <div className="w-full bg-gray-100 p-6 mb-4 rounded-lg shadow-md flex flex-col md:flex-row justify-center items-center gap-8 h-64">
          <div className="w-1/3">
            <p className="text-lg text-blue-800 font-bold text-left pl-4">
              For Founders &
              <br />
              Entrepreneurs
            </p>
          </div>
          <div className="w-2/3">
            <ul className="list-disc list-inside text-gray-800 text-lg leading-relaxed">
            <li className="text-xl text-gray-900 mb-2">
                
                  Connect with different start-up stakeholders like Investors Founders,
                  Students, Agencies & Creators
                
              </li>
             
             
              <li className="text-lg text-gray-900 mb-2">Find Investors based on their Industry, Sector, Cheque Size & Portfolio Companies</li>
              <li className="text-xl text-gray-900 mb-2">Host or Participate in local & national start-up events and find new leads for your business</li>
              <li className="text-xl text-gray-900 mb-2">Start your creator journey & build your personal brand within your community</li>
            </ul>
          </div>
        </div>
 
        {/* Second Box*/}
        <div className="w-full bg-gray-100 p-6 mb-4 rounded-lg shadow-md flex flex-col md:flex-row justify-center items-center gap-8 h-64">
          <div className="w-1/3">
            <p className="text-3xl text-blue-800 font-bold text-left pl-4">
              For Investors &
              <br />
              Accelerator Funds
            </p>
          </div>
          <div className="w-2/3">
            <ul className="list-disc list-inside text-gray-800 text-lg leading-relaxed">
              <li className="text-xl text-gray-900 mb-2">Filter start-ups based on their sector, size, valuation & founders profile</li>
              <li className="text-xl text-gray-900 mb-2">Find start-up competitions & events and apply as a speaker or guest for increased visibility</li>
              <li className="text-xl text-gray-900 mb-2">Get a Golden Tick to stand out from the crowd and get deals directly into your inbox</li>
              <li className="text-xl text-gray-900 mb-2">Start your creator journey & build your personal brand and get increased visibility</li>
            </ul>
          </div>
        </div>
        {/* Third Box */}
        <div className="w-full bg-gray-100 p-6 mb-4 rounded-lg shadow-md flex flex-col md:flex-row justify-center items-center gap-8 h-64">
          <div className="w-1/3">
            <p className="text-3xl text-blue-800 font-bold text-left pl-4">
              For Agencies &
              <br />
              B2B Companies
            </p>
          </div>
          <div className="w-2/3">
            <ul className="list-disc list-inside text-gray-800 text-lg leading-relaxed">
              <li className="text-xl text-gray-900 mb-2 ">Find thousands of leads for your business to boost your sales & to reduce your marketing spends</li>
              <li className="text-xl text-gray-900 mb-2">Create your own communities & share product and other relevant updates with your followers</li>
              <li className="text-xl text-gray-900 mb-2">Host & Participate in events across the nation to find more leads & to improve your network</li>
              <li className="text-xl text-gray-900 mb-2">Get all the Founders & Key decision makers at one place</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default HomePageInfoPage2;