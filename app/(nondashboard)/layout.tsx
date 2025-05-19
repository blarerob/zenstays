"use client";

import React from "react";
import { NAVBAR_HEIGHT } from "@/lib/constants";

import Navbar from "../components/Navbar";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import SideMenu from "../components/SideMenu";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../globals.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (

        <div className="h-full w-full">
          <Navbar />
            <SideMenu />
          <main
            className={`h-full flex w-full flex-col`}
            style={{ paddingTop: `${NAVBAR_HEIGHT}px` }}
          >
            {children}
          </main>
        </div>
  );
};

export default Layout;