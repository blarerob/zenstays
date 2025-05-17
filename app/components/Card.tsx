import { Bath, Bed, Heart, House, Star } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const Card = ({
                property,
                isFavorite,
                onFavoriteToggle,
                showFavoriteButton = true,
                propertyLink,
                externalLink,
                style
              }: {
  property: any,
  isFavorite?: boolean,
  onFavoriteToggle?: () => void,
  showFavoriteButton?: boolean,
  propertyLink?: string,
  externalLink?: string,
  style?: { height: string; borderRadius: string; boxShadow: string }
}) => {
  const defaultImages = [
    "/cardtwo/0f6a692b-ef96-4aec-beea-cd2ccecc1186.jpeg",
    "/cardtwo/1f422509-e940-4a7b-b227-7fb34090a843.jpeg",
    "/cardtwo/4bb3e706-e44a-444b-957e-7f963511d4a6.jpeg",
    "/cardtwo/705e1447-ef4f-4b77-bbea-47cace444432.jpeg",
  ];
  const images = property?.photoUrls?.length ? property.photoUrls : defaultImages;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [transitionClass, setTransitionClass] = useState("");

  const handleImageChange = (direction: "next" | "prev") => {
    setTransitionClass("opacity-0"); // Start fade-out transition
    setTimeout(() => {
      setCurrentImageIndex((prev) =>
        direction === "next"
          ? (prev + 1) % images.length
          : (prev - 1 + images.length) % images.length
      );
      setTransitionClass("opacity-100"); // Fade-in transition
    }, 300); // Match the CSS transition duration
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg w-full mb-2">
      <div className="relative">
        <div className="w-full h-80 relative overflow-hidden">
          <Image
            src={property?.image || defaultImages}
            alt={property?.name || "Property Image"}
            fill
            className={`object-cover transition-opacity duration-300 ease-in-out ${transitionClass}`}
          />
        </div>
        <div className="absolute bottom-4 left-4 flex gap-2">
          {property?.isPetsAllowed && (
            <span className="bg-white/80 text-black text-xs font-semibold px-2 py-1 rounded-full">
              Pets Allowed
            </span>
          )}
          {property?.isParkingIncluded && (
            <span className="bg-white/80 text-black text-xs font-semibold px-2 py-1 rounded-full">
              Parking Included
            </span>
          )}
        </div>
        {showFavoriteButton && (
          <button
            className="absolute bottom-4 right-4 bg-white hover:bg-white/90 rounded-full p-2 cursor-pointer"
            onClick={onFavoriteToggle}
          >
            <Heart
              className={`w-5 h-5 ${
                isFavorite ? "text-red-500 fill-red-500" : "text-gray-600"
              }`}
            />
          </button>
        )}
      </div>
      <div className="p-4">
        <p className="text-gray-600 mb-2">
          {property?.location?.address} {property?.location?.city}
        </p>
        <div className="flex justify-between items-center">
          <div className="flex items-center mb-2">
            <Star className="w-4 h-4 text-yellow-400 mr-1" />
            <span className="font-semibold">
              {property?.averageRating?.toFixed(1)}
            </span>
            <span className="text-gray-600 ml-1">
              ({property?.numberOfReviews} Reviews)
            </span>
          </div>
          <p className="text-lg font-bold mb-3">
            ${property?.pricePerMonth?.toFixed(0)}{" "}
            <span className="text-gray-600 text-base font-normal">220/night</span>
          </p>
        </div>
        <hr />
        <div className="flex justify-between items-center gap-4 text-gray-600 mt-5">
          <span className="flex items-center">
            <Bed className="w-5 h-5 mr-2" />
            {property?.beds}4 Bed
          </span>
          <span className="flex items-center">
            <Bath className="w-5 h-5 mr-2" />
            {property?.baths}2.5 Bath
          </span>
          <span className="flex items-center">
            <House className="w-5 h-5 mr-2" />
            {property?.squareFeet}1900 sq ft
          </span>
        </div>
      </div>
      <p className='text-lg font-bold mt-8 mb-5 flex items-center justify-center'>BOOK VIA</p>
   <div className="m-27 mt-2 border mb-10 border-black hover:shadow-lg">
        <a
          href={"http://localhost:3000"}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center"
        >
          <img
            src="/logo.png"
            alt="Book Direct"
            className="w-30 h-30"
          />
        </a>
      </div>
    </div>
  );
};

export default Card;