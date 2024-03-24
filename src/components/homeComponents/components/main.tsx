"use client";

import React from "react";
import MainUI from "./mainUI";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

type Props = {};

const Main = (props: Props) => {
  const router = useRouter();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("email: ", email);
    console.log("password: ", password);

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "/feed",
      });

      if (result?.ok) {
        // setLoading(false);
        toast.success("Login successful");
        router.push("/feed");
      } else {
        // setLoading(false);
        toast.error("" + result?.error);
      }
    } catch (error) {
      // setLoading(false);
      toast.error("An error occurred while sending the request : " + error);
    }
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
