'use client';
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0,
        transition: { duration: 0.5,
            staggerChildren: 0.2,
        }
    },
};
const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};
const Page = () => {
    return (<motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants} className='py-24 px-6 sm:px-8 lg:px-12 xl:px-16 bg-white'>
        <div className="max-w-4xl xl:max-w-6xl mx-auto">
            <motion.h2 variants={itemVariants} className="text-3xl font-bold text-center mb-12 w-full sm:w-2/3 mx-auto">
                See How We Go Beyond The Basics
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 xl:gap-16">
                {[0, 1, 2, 3, 4, 5, 6].map((index) => (<motion.div key={index} variants={itemVariants}>
                        <FeatureCard imageSrc={`/services-sec${14 - index}.jpg`} title={[
                "Our Services",
                "License & Registration",
                "Listing Creation and Updating",
                "Free Revenue Report",
                "Performance and Pricing",
                "Cleaning Services",
                "About Us",
            ][index]} description={[
                "We gather your competitors data and performance metrics to make sure your property reaches it’s full potential. This ensures your listing title, description, photos, and pricing are right where they need to be.",
                "Regardless of the city in which your listing is located, we ensure full compliance with all local laws and operational regulations. We will apply for and maintain all necessary licenses for your listing at no additional cost to you.",
                "We create a fresh, new listing based on our proven formula to highlight your property's best features and maximize guest attraction. We continuously update the listing as needed to ensure it remains current.",
                "We simplify the check-in process and guest instructions by creating a customized guidebook tailored to your home's specific house rules. If you don't have house rules yet, no problem—we'll help you develop them!",
                "Based on the most current market rates, updated daily, we create a pricing structure that maximizes your home’s potential revenue while also staying competitive.",
                "We stay on top of all reservations using the Guesty property management software. Our system is automated and synced in real time, ensuring you never have to worry about double bookings across different platforms.",
                "We understand the importance of timely responses for your guests, so we go above and beyond to ensure every question is answered promptly, regardless of the day or time. We are committed to ensuring your guests receive exceptional care and support.",
                "Schedules are automatically generated and shared with the cleaning team via iCal links to ensure nothing is overlooked. We aim for a 5-star cleaning with every turnover and will promptly address any issues with the cleaning team if they arise. Same-day turnovers are encouraged!",
                "We schedule any necessary repairs, whether small or large, using your preferred contractor.",
                "Unfortunately, accidents happen. We will file all necessary claims on your behalf so you can mitigate any unforeseen expenses.",
                "We integrate your listing with over 20 booking platforms to make sure your listing is seen (e.g. Airbnb, VRBO, Booking.com, Hopper, Google, etc.). Once onboarded, we will include your property on our direct booking website.",
                "We keep you in the loop on how your property is performing in real time. Customize what analytics you would like to see and even reserve the house for yourself."
            ][index]}/>
                    </motion.div>))}
            </div>
        </div>
    </motion.div>);
};
const FeatureCard = ({ imageSrc, title, description, }) => (<div className="text-center">
        <div className="p-4 rounded-lg mb-4 flex items-center justify-center h-48">
            <Image src={imageSrc} width={400} height={400} className="w-full h-full object-contain" alt={title}/>
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="mb-4">{description}</p>
    </div>);
export default Page;
