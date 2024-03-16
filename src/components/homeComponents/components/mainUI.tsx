import React from "react";
import HomePageNavbar from "./homePageNavbar/HomePageNavbar";
import HomePageSigin from "./homePageSingin/HomePageSigin";
import HomePageInfoPage1 from "./homePageInfo/HomePageInfoPage1";
import HomePageInfoPage from "./homePageInfo/HomePageInfoPage";
import HomePageInfoPage2 from "./homePageInfo/HomePageInfoPage2";
import Footer from "@/components/footerComponets/components/footer/Footer";

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
      <div className="text-2xl text-black text-center py-8 font-bold">
        Explore Possibilities at ForeTeach
      </div>
      <HomePageInfoPage1 />
      <div className="text-2xl text-black text-center py-8 font-bold">
        How can this platform benefit you
      </div>
      <HomePageInfoPage2 />
      <Footer />
    </div>
  );
};

export default mainUI;
