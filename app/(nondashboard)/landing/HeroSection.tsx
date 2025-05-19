"use client";

import React from 'react';
import Image from "next/image";
import {motion} from "framer-motion";
import Divider from '@mui/material/Divider';
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {HousePlus, PhoneIcon, SquarePen, UserPen} from "lucide-react";
import FooterSection from "../landing/FooterSection";

const HeroSection = () => {

 return (

     <div className='relative h-screen'>
         <Image
             src="/cover.jpg"
             alt="Zen Stays Cover"
             fill
             className='pt-8 md:pt-8 object-cover object-center'
             quality={100}
             priority
         />

         <div
             className="absolute inset-0"
             style={{backgroundColor: "rgba(0, 0, 0, 0.3)"}}
         />
         <motion.div
             initial={{opacity: 0, y: 20}}
             animate={{opacity: 1, y: 0}}
             transition={{duration: 0.8}}
             className="absolute inset-0 flex flex-col items-center justify-center text-center"
         >
             <div className='absolute top-26 left-0 flex items-center gap-5 p-4'>
                 <Link
                     href='/services'
                 >
                     <Button className='text-white bg-green-800 hover:bg-green-700 items-center rounded-lg cursor-pointer
                         px-6 py-3 text-lg font-bold shadow-lg transform transition-transform duration-300
                         hover:scale-105 sm:px-6 sm:py-3 sd:justify-center'>
                         <UserPen /> Services
                     </Button>
                 </Link>
                 <Divider orientation="vertical" flexItem style={{ borderColor: 'white', height: '50px' }} />
                 <Link
                     href='/listings'
                 >
                    <Button className='bg-[#766a55] text-white hover:bg-green-700 hover:text-white
                      rounded-lg cursor-pointer px-8 py-4 text-lg font-bold shadow-lg transform transition-transform
                      duration-300 hover:scale-105 sm:px-6 sm:py-3'>
                         <HousePlus /> Listings
                     </Button>
                 </Link>
             </div>

          <div className="absolute top-26 right-0 items-center gap-5 p-4 hidden sm:block">
                     <Link href='/contactus' scroll={false}>
                         <Button className='bg-white text-black hover:bg-green-700 hover:text-white
                             rounded-lg cursor-pointer px-8 py-4 text-lg font-bold shadow-lg transform transition-transform
                             duration-300 hover:scale-105 sm:px-6 sm:py-3'>
                             <PhoneIcon /> Contact Us
                         </Button>
                     </Link>
                 </div>

             <div className="max-w-4xl px-16 sm:px-12 mt-16">
                 <h1 className="text-5xl font-bold text-white mt-12">
                     Experience property rental management that goes beyond the basics.
                 </h1>
                 <p className="text-xl text-white font-semibold mt-4">
                     Zenstays seamlessly integrates property care, tenant satisfaction, and financial growth
                     for a stress-free, rewarding rental experience.
                 </p>

                 <div className="justify-center mt-14 flex items-center">
                     <button
                         className="bg-[#766a55] text-white rounded-lg cursor-pointer px-8 py-4 text-lg font-bold shadow-lg transform transition-transform
                      duration-300 hover:scale-105 sm:px-6 sm:py-3"
                         onClick={() => {
                             window.location.href = '/booknow';
                         }}
                     >
                        <SquarePen className='inline-block cursor-pointer mr-2' /> Free Consultation
                     </button>
                 </div>
             </div>
         </motion.div>
             <FooterSection />
     </div>
 );
};

export default HeroSection;