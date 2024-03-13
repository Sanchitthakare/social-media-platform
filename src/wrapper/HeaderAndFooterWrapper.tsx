"use client";

import React from "react";
import Header from "../components/headerComponents/components/main";
import { useSession } from "next-auth/react";
import Footer from "@/components/footerComponets/components/footer/Footer";

const HeaderAndFooterWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { status } = useSession();
  return (
    <div>
      {status === "authenticated" && <Header />}
      {children}
      <Footer />
    </div>
  );
};

export default HeaderAndFooterWrapper;
