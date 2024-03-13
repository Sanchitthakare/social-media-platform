"use client";

import React, { useState } from "react";
import MainUI from "./mainUI";

type Props = {};

function Main({}: Props) {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedProfileType, setSelectedProfileType] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const createAccount = () => {
    console.log("create account");
    console.log(name);
    console.log(email);
    console.log(selectedGender);
    console.log(selectedProfileType);
    console.log(password);
    console.log(confirmPassword);

    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        emailId: email,
        password,
        confirmPassword,
        profileType: selectedProfileType,
        gender: selectedGender,
      }),
    });

  };

  return (
    <MainUI
      step={step}
      setStep={setStep}
      name={name}
      setName={setName}
      email={email}
      setEmail={setEmail}
      selectedGender={selectedGender}
      setSelectedGender={setSelectedGender}
      selectedProfileType={selectedProfileType}
      setSelectedProfileType={setSelectedProfileType}
      password={password}
      setPassword={setPassword}
      confirmPassword={confirmPassword}
      setConfirmPassword={setConfirmPassword}
      createAccount={createAccount}
    />
  );
}

export default Main;
