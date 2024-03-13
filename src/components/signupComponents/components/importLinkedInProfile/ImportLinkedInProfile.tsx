import Link from "next/link";
import React from "react";

type Props = {};

function ImportLinkedInProfile({}: Props) {
  return (
    <div className="relative bg-white lg:rounded-l-xl rounded-xl pb-6 ">
      <div className="flex justify-start flex-col gap-4 p-8 h-[450px]">
        <span className="md:text-4xl sm:text-3xl text-xl font-bold">
          One Final Step!
        </span>
        <span>Hang on tight! We are almost done!</span>
      </div>

      <div className="absolute  bg-gray-200 lg:w-[512px] w-full bottom-8 p-8 rounded-xl  ">
        <div className="flex flex-col gap-4">
          <span className="text-xl font-bold">
            Do you want us to Import data from your LinkedIn Profile ?
          </span>
          <span>
            Do you want us to import Data from your LinkedIn Profile? This will
            import your Name, Picture, Cover Image, Title, Education, Work
            Experience & More?
          </span>
        </div>
        <div className="flex mt-6">
          <button className="bg-blue-400 p-2 rounded-lg w-1/2 m-2">
            Do Not Import
          </button>
          <button
            type="submit"
            className="bg-blue-400 p-2 rounded-lg w-1/2 m-2"
          >
            Agree & Join
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImportLinkedInProfile;
