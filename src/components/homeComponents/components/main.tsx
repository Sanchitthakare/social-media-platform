"use client"

import React from "react";
import MainUI from "./mainUI";

type Props = {};

const Main = (props: Props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = () => {
    console.log(email, password);
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
};

export default Main;
