import React, { useState } from "react";
import HomePageNavbar from "./homePageNavbar/HomePageNavbar";
import HomePageSigin from "./homePageSingin/HomePageSigin";
import HomePageInfoPage1 from "./homePageInfo/HomePageInfoPage1";
import HomePageInfoPage from "./homePageInfo/HomePageInfoPage";
import HomePageInfoPage2 from "./homePageInfo/HomePageInfoPage2";
import { useSwipeable } from "react-swipeable";
import { useRecoilState } from "recoil";
import { dropDownState } from "../../../../atom/dropDownAtom";

type Props = {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  handleLogin: (e : React.FormEvent<HTMLFormElement>) => void;
};

const mainUI = ({
  email,
  setEmail,
  password,
  setPassword,
  handleLogin,
}: Props) => {
  const [showSideBar, setShowSideBar] = useRecoilState(dropDownState);
  const [makeSliderSlide, setMakeSliderSlide] = useState(false);

  const handlers = useSwipeable({
    onSwipedRight: (eventData) =>
      window.innerWidth > 767 ? "" : setShowSideBar(true),
    onSwipedLeft: (eventData) =>
      window.innerWidth > 767 ? "" : setShowSideBar(false),
  });

  return (
    <div className="relative"  {...handlers}>
      {showSideBar && window.innerWidth < 767 && (
        <div className="absolute inset-0 bg-gradient-to-r from-black to-black opacity-70 z-20 "></div>
      )}
      <div>
        <div className=" mb-12 md:mb-24">
          <HomePageNavbar
            makeSliderSlide={makeSliderSlide}
            setMakeSliderSlide={setMakeSliderSlide}
          />
        </div>
        <HomePageSigin
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
        />
        <HomePageInfoPage />
        <div className="text-2xl text-black text-center py-4 md:py-8 font-bold">
          Explore Possibilities at ForeTeach
        </div>
        <HomePageInfoPage1 />
        <div className="text-2xl text-black text-center py-4 md:py-8 font-bold">
          <div className="flex-col flex md:flex-row justify-center items-center md:gap-1">
            <div className="">
              <span>How can this </span>{" "}
            </div>
            <div className="">
              <span>platform benefit you</span>
            </div>
          </div>
        </div>
        <HomePageInfoPage2 />
      </div>
    </div>
  );
};

export default mainUI;
