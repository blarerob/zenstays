import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const exampleHouses = [
    { src: "/images/listing1.avif", alt: "House 1" },
    { src: "/images/listing2.jpeg", alt: "House 2" },
    { src: "/images/listing3.avif", alt: "House 3" },
    { src: "/images/listing4.avif", alt: "House 4" },
];

const BookDirectCard = () => {
    return (
        <div className="flex flex-col items-center bg-white shadow-md rounded-lg overflow-hidden">
            <div className="relative w-full h-64">
                <Image
                    src={exampleHouses[0].src}
                    alt={exampleHouses[0].alt}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                />
            </div>
            <div className="p-4 flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-gray-800">
                    Beautiful Family Home
                </h3>
                <p className="text-sm text-gray-600">
                    Located in a serene neighborhood, this home offers comfort and style.
                </p>
                <Button className="mt-2 w-full bg-primary-600 text-white hover:bg-primary-700">
                    Book Now
                </Button>
            </div>
        </div>
    );
};

export default BookDirectCard;
