"use client";

import React, { useState } from "react";
import MainUI from "./mainUI";

type Props = {};

function Main({}: Props) {
  const [searchValue, setSearchValue] = useState("");

  return <MainUI searchValue={searchValue} setSearchValue={setSearchValue} />;
}

export default Main;
