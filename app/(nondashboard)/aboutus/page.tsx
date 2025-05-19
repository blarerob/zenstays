'use client';

import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const AboutUs = () => {
  const carouselImages = [
    { src: "/selfie.jpg", alt: "Shawn", name: "Shawn" },
    { src: "/selfie2.jpg", alt: "Tyler", name: "Tyler" },
    { src: "/will_head_shot.jpeg", alt: "Will", name: "Will" },
  ];

  const Slider = dynamic(() => import("react-slick"), { ssr: false });

const sliderSettings = {
  className: 'center-fade',
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "0px",
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
};

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-200 f-screen py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-6 animate-fadeIn">
          About Us
        </h1>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-12 animate-fadeIn delay-200">
          With a combined experience of <strong className="text-green-800">8 years</strong> as hosts, <strong>Shawn, Tyler, & Will</strong> have witnessed firsthand the evolution of the market. The landscape has become increasingly competitive and complex, requiring more effort and strategic planning to achieve success.
        </p>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-12">
          Driven by our <strong className="font-semibold">passion for hospitality</strong> and our expertise, we embarked on a mission to empower hosts like you to thrive in this dynamic environment. Whether you are a <strong className="font-semibold">new property owner</strong> or a <strong className="font-semibold">seasoned veteran</strong>, we believe every property has the potential to succeed.
        </p>
      </div>

      <div className="max-w-6xl mx-auto mt-16">
        <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <Slider {...sliderSettings}>
            {carouselImages.map((image, index) => (
              <div key={index} className="flex flex-col items-center px-4">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={300}
                  height={300}
                  className="rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
                />
                <p className="text-lg font-semibold mt-4">{image.name}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;