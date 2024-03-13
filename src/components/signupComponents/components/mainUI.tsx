"use client";

import React, { useState } from "react";
import SignupInfo from "./signupInfo/SignupInfo";
import CreateAccount from "./createAccount/CreateAccount";
import ProfileType from "./profileType/ProfileType";
import ImportLinkedInProfile from "./importLinkedInProfile/ImportLinkedInProfile";

type Props = {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;

  selectedGender: string;
  setSelectedGender: React.Dispatch<React.SetStateAction<string>>;
  selectedProfileType: string;
  setSelectedProfileType: React.Dispatch<React.SetStateAction<string>>;

  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  confirmPassword: string;
  setConfirmPassword: React.Dispatch<React.SetStateAction<string>>;

  createAccount: () => void;
};

function MainUI({
  step,
  setStep,
  name,
  setName,
  email,
  setEmail,
  selectedGender,
  setSelectedGender,
  selectedProfileType,
  setSelectedProfileType,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  createAccount,
}: Props) {
  return (
    <div className="bg-blue-400  flex justify-center items-center lg:p-0 p-5 lg:h-screen">
      <div className=" max-w-xl  lg:max-w-5xl  border-8 border-white rounded-3xl  flex justify-center items-center lg:flex-row flex-col ">
        <div className="w-full lg:w-1/2 p-8">
          <SignupInfo />
        </div>
        <div className="w-full lg:w-1/2 ">
          {step === 1 && (
            <CreateAccount
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
              setStep={setStep}
            />
          )}
          {step === 2 && (
            <ProfileType
              selectedGender={selectedGender}
              setSelectedGender={setSelectedGender}
              selectedProfileType={selectedProfileType}
              setSelectedProfileType={setSelectedProfileType}
              setStep={setStep}
              password={password}
              setPassword={setPassword}
              confirmPassword={confirmPassword}
              setConfirmPassword={setConfirmPassword}
              createAccount={createAccount}
            />
          )}
          {step === 3 && <ImportLinkedInProfile />}
        </div>
      </div>
    </div>
  );
}

export default MainUI;
