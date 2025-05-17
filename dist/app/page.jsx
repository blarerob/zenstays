"use client";
import React from "react";
import HeroSection from "./(nondashboard)/landing/HeroSection";
import Navbar from "./components/Navbar";
import SideMenu from "./components/SideMenu";
const Landing = () => {
    return (<div>
                <HeroSection />
                <Navbar />
                <SideMenu />
        </div>);
};
export default Landing;
