"use client";

import React from "react";
import HeroSection from "./HeroSection";
import SideMenu from "@/components/SideMenu";
import FooterSection from "./FooterSection";

const LandingPage = () => {
  return(
  <div>
      <HeroSection/>
        <SideMenu />
      <FooterSection />
  </div>
  )
};

export default LandingPage;