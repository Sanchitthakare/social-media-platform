"use client";

import React from "react";
import MainUI from "./mainUI";

type Props = {};

function Main({}: Props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = async () => {
    console.log(email, password);
    // const response = await fetch(
    //   `${process.env.NEXT_PUBLIC_API_URL}/api/login`,
    //   {
    //     method: "POST",
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ email, password }),
    //   }
    // );

    // const { success, user, message } = await response.json();
    // if (success) {
    //   console.log(user);
    // } else {
    //   console.log(message);
    // }
  };

  return (
    <MainUI
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      handleLogin={handleLogin}
    />
  );
}

export default Main;
