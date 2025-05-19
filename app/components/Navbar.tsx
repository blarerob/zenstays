"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { PhoneIcon } from "lucide-react";

import { NAVBAR_HEIGHT } from "../lib/constants";

const Navbar = () => {
  return (
    <div
      className="fixed top-0 left-0 w-full z-50 flex justify-between items-center py-3 px-8 navbar text-white shadow-[#064e3b] shadow-sm"
      style={{ height: `${NAVBAR_HEIGHT}px` }}
    >
      <div className="flex items-center gap-4 md:gap-6">
        <Link href="/" className="cursor-pointer" scroll={false}>
          <div className="flex items-center gap-3">
            <Image
              src="/logo.jpeg"
              alt="Zen Stays Logo"
              width={24}
              height={24}
              priority
              className="w-6 h-6"
            />
            <div className="text-xl font-bold">
              ZEN
              <span className="text-[#9d8c79] text-accent/70 font-semibold hover:!text-white hover:font-bold">
                STAYS
              </span>
            </div>
          </div>
        </Link>
      </div>

      <p className="text-white text-sm font-light hidden md:block pr-20">
        Experience property rental management that goes beyond the basics.
      </p>

      {/* Circular Phone Icon for Small Devices */}
      <div className="sm:block md:hidden flex items-center mr-12">
        <Link href="/contactus" scroll={false}>
          <button className="bg-[#766a55] text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition-transform transform hover:scale-105">
            <PhoneIcon className="w-3 h-3" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;