"use client";

import React from "react";
import HeroSection from "@/(nondashboard)/landing/HeroSection";
import FeaturesSection from "@/(nondashboard)/landing/FeaturesSection";
import { Provider } from "react-redux";
import { store } from "@/state/store";
import Navbar from "@/components/Navbar";

const Landing = () => {
    return (
        <div>
            <Provider store={store}>
                <HeroSection />
                <FeaturesSection />
                <Navbar />
            </Provider>
        </div>
    );
};

export default Landing;