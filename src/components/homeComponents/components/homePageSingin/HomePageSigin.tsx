import Link from "next/link";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";

type Props = {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  handleLogin: () => void;
};

const HomePageSigin = ({
  email,
  setEmail,
  password,
  setPassword,
  handleLogin,
}: Props) => {
  return (
    <div className=" p-2 mt-8">
      <div className="max-w-7xl mx-auto flex md:flex-row flex-col-reverse ">
        <div className="md:w-1/2 md:p-0 p-2">
          <div className="mt-6 bg-white rounded-xl">
            <div className="">
              <span className="md:text-4xl sm:text-3xl text-xl font-semibold">
                Sign In to ForeTeach
              </span>
            </div>
            <div className="flex pt-8 justify-between items-center  gap-2 md:flex-row flex-col">
              <button
                className="p-2 border rounded-2xl flex justify-center items-center space-x-2  lg:w-1/2 w-full"
                
              >
                <span>
                  <FcGoogle size={25} />
                </span>
                <span className="text-sm">Sign In with Google</span>
              </button>
              <button className="p-2 border rounded-2xl flex justify-center items-center space-x-2 lg:w-1/2 w-full">
                <span className="text-blue-600">
                  <FaLinkedin size={25} />
                </span>
                <span className="text-sm">Sign In with LinkedIn</span>
              </button>
            </div>
            <div className="flex items-center justify-center mt-6">
              <div className="border-b border-gray-400 w-full mr-2"></div>
              <div className="mr-2">OR</div>
              <div className="border-b border-gray-400 w-full "></div>
            </div>
            <div className="mt-6">
              <form
                className="flex flex-col justify-center items-center gap-4"
                onSubmit={handleLogin}
              >
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                  className="p-2 rounded-lg w-full bg-gray-200 "
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="p-2 rounded-lg w-full bg-gray-200"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button
                  type="submit"
                  className="bg-blue-400 p-2 rounded-lg w-full mt-6"
                >
                  Login
                </button>
              </form>
              <div className="flex justify-center items-center mt-6 flex-wrap">
                Already have an account ?{" "}
                <span className="text-blue-600 underline">
                  <Link href={"/user/signup"}> Singup</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center items-center pl-8">
          <Image
            src={"/businessLogo.svg"}
            width={800}
            height={800}
            alt="businessImage"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePageSigin;
