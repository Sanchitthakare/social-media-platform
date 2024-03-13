import React from "react";
import HomePageNavbar from "./homePageNavbar/HomePageNavbar";
import HomePageSigin from "./homePageSingin/HomePageSigin";
import HomePageInfoPage1 from "./homePageInfo/HomePageInfoPage1";
import HomePageInfoPage from "./homePageInfo/HomePageInfoPage";
import HomePageInfoPage2 from "./homePageInfo/HomePageInfoPage2";

type Props = {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  handleLogin: () => void;
};

const mainUI = ({
  email,
  setEmail,
  password,
  setPassword,
  handleLogin,
}: Props) => {
  return (
    <div>
      <HomePageNavbar />
      <HomePageSigin
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleLogin={handleLogin}
      />
      <HomePageInfoPage />
      <div className="text-2xl text-blue-500 text-center py-3">Lorem Ipsum</div>
      <HomePageInfoPage1 />
      <div className="text-2xl text-blue-500 text-center py-3">Lorem Ipsum</div>
      <HomePageInfoPage2 />
    </div>
  );
};

export default mainUI;
