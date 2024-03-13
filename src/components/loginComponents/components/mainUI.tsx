import React from "react";
import SignInAccount from "./signInAccount/SignInAccount";
import SignInInfo from "./signInInfo/SignInInfo";

type Props = {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  handleLogin: () => void;
};

function MainUI({
  email,
  setEmail,
  password,
  setPassword,
  handleLogin,
}: Props) {
  return (
    <div className="bg-blue-400  flex justify-center items-center lg:p-0 p-5 lg:h-screen">
      <div className=" max-w-xl  lg:max-w-5xl  border-8 border-white rounded-3xl  flex justify-center items-center lg:flex-row flex-col ">
        <div className="w-full lg:w-1/2 p-8">
          <SignInInfo />
        </div>
        <div className="w-full lg:w-1/2 ">
          <SignInAccount
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleLogin={handleLogin}
          />
        </div>
      </div>
    </div>
  );
}

export default MainUI;
