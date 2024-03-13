import React from "react";
import Navbar from "./navbar/Navbar";
import BottomBar from "./bottomBar/BottomBar";

type Props = {
  searchValue: string;
  setSearchValue: (value: string) => void;
};

const MainUI = ({ searchValue, setSearchValue }: Props) => {
  return (
    <>
      <Navbar searchValue={searchValue} setSearchValue={setSearchValue} />
      <BottomBar />
    </>
  );
};

export default MainUI;
