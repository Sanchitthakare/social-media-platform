import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";

type Props = {
  selectedProfileType: string;
  setSelectedProfileType: React.Dispatch<React.SetStateAction<string>>;
  selectedGender: string;
  setSelectedGender: React.Dispatch<React.SetStateAction<string>>;

  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  confirmPassword: string;
  setConfirmPassword: React.Dispatch<React.SetStateAction<string>>;

  setStep: React.Dispatch<React.SetStateAction<number>>;

  createAccount: () => void;
};

const genderOptions = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" },
];

const profileTypeOptions = [
  // { value: "student", label: "Student" },
  { value: "professional", label: "Professional" },
  { value: "investor", label: "Investor" },
];

function ProfileType({
  selectedProfileType,
  setSelectedProfileType,
  selectedGender,
  setSelectedGender,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  setStep,
  createAccount,
}: Props) {
  const handleGenderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGender(event.target.value);
  };

  const handleProfileType = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedProfileType(event.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    if (selectedGender === "") {
      toast.error("Please select your Gender");
      return;
    }
    if (selectedProfileType === "") {
      toast.error("Please select your Profile Type");
      return;
    }
    createAccount();
    setStep(3);
  };

  return (
    <div className="p-8 bg-white lg:rounded-l-xl rounded-xl py-9">
      <div className="">
        <span className="md:text-4xl sm:text-3xl text-xl font-bold">
          Select your Profile Type
        </span>
      </div>

      <div className="mt-6">
        <form
          className="flex flex-col justify-center items-center gap-6"
          onSubmit={handleSubmit}
        >
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Set up a Password"
            className="p-2 rounded-lg w-full bg-gray-200"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm Password"
            className="p-2 rounded-lg w-full bg-gray-200 "
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <div className="flex space-x-4 w-full">
            <select
              name="gender"
              id="gender"
              value={selectedGender}
              onChange={handleGenderChange}
              className="p-2 rounded-lg w-1/3 bg-gray-200"
              required
            >
              <option value="" disabled>
                I am a/an
              </option>
              {genderOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            <select
              name="profileType"
              id="profileType"
              value={selectedProfileType}
              onChange={handleProfileType}
              className="p-2 rounded-lg w-2/3 bg-gray-200"
              required
            >
              <option value="" disabled>
                Profile Type
              </option>
              {profileTypeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-center items-center mt-6 flex-wrap text-center lg:text-left">
            By clicking Agree & Join you agree to ForeTeach’s
            <span className="text-blue-600 underline">
              <Link href={"/policy"}> User Agreement & Privacy Policy</Link>
            </span>
          </div>
          <button
            type="submit"
            className="bg-blue-400 p-2 rounded-lg w-full m-2"
          >
            Agree & Join
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProfileType;
