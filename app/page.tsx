"use client";

import React from "react";
import HeroSection from "@/(nondashboard)/landing/HeroSection";
import { Provider } from "react-redux";
import { store } from "@/state/store";
import Navbar from "@/components/Navbar";
import SideMenu from "@/components/SideMenu";

const Landing = () => {
    return (
        <div>
            <Provider store={store}>
                <HeroSection />
                <Navbar />
                <SideMenu />
            </Provider>
        </div>
    );
};

export default Landing;