import { signIn } from "next-auth/react";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";
import { FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

type Props = {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

function CreateAccount({ name, setName, email, setEmail, setStep }: Props) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isNameValid = name.length > 0 && name.length <= 50;
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isNameValid) {
      toast.error("Name is not valid");
      return;
    }
    if (!isEmailValid) {
      toast.error("Email is not valid");
      return;
    }
    setStep(2);
  };

  return (
    <div className="p-8 bg-white lg:rounded-l-xl rounded-xl">
      <div className="">
        <span className="md:text-4xl sm:text-3xl text-xl font-bold">
          Create Account
        </span>
      </div>
      <div className="flex pt-8 justify-between items-center  gap-2 md:flex-row flex-col">
        <button className="p-2 border rounded-2xl flex justify-center items-center space-x-2  lg:w-1/2 w-full"  onClick={() => {
              signIn("google", { callbackUrl: "/feed" });
            }}>
          <span
           
          >
            <FcGoogle size={25} />
          </span>
          <span className="text-sm">Sign up with Google</span>
        </button>
        <button className="p-2 border rounded-2xl flex justify-center items-center space-x-2 lg:w-1/2 w-full" onClick={() => {
              signIn("linkedin", { callbackUrl: "/feed" });
            }}>
          <span
            className="text-blue-600"
            
          >
            <FaLinkedin size={25} />
          </span>
          <span className="text-sm">Sign up with LinkedIn</span>
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
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Full Name"
            className="p-2 rounded-lg w-full bg-gray-200"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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

          <button
            type="submit"
            className="bg-blue-400 p-2 rounded-lg w-full mt-6"
          >
            Create Account
          </button>
        </form>
        <div className="flex justify-center items-center mt-6 flex-wrap">
          Already have an account ?
          <span className="text-blue-600 underline">
            <Link href={"/login"}>Log In</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
