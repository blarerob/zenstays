import React from "react";
import Image from "next/image";
const AboutUs = () => {
    return (<div className="bg-gradient-to-b from-gray-50 to-gray-200 min-h-screen py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-4 animate-fadeIn">
          About Us
        </h1>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 animate-fadeIn delay-200">
          With a combined experience of <strong className="text-green-800">8 years</strong> as hosts, <strong>Shawn & Tyler</strong> have witnessed firsthand the evolution of the market. The landscape has become increasingly competitive and complex, requiring more effort and strategic planning to achieve success.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="animate-slideInLeft">
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            Driven by our <strong className="font-semibold">passion for hospitality</strong> and our expertise, we embarked on a mission to empower hosts like you to thrive in this dynamic environment.
          </p>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed mt-2">
            Our journey began with a simple goal: to share our <strong className="font-semibold">knowledge and expertise</strong> with other hosts. We understand the challenges and rewards that come with managing a unique property, and we are dedicated to helping you navigate this ever-changing market.
          </p>
        </div>
    <div className="flex flex-col items-center animate-zoomIn">
      <Image src="/selfie.jpg" alt="Shawn" width={300} height={300} className="rounded-lg shadow-lg hover:scale-110 transition-transform duration-300"/>
      <p className="text-center text-lg font-semibold mt-2">Shawn</p>
    </div>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed mt-2 animate-fadeIn delay-200">
              Whether you are a <strong className="font-semibold">new property owner</strong> looking for guidance through startup or a <strong className="font-semibold">seasoned veteran</strong> looking to get your property back on track, we believe that every property has the potential to succeed.
          </p>
      </div>

      <div className="bg-green-100 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12 p-6 rounded-lg">
          <div className="flex flex-col items-center animate-zoomIn">
          <Image src="/selfie2.jpg" alt="Tyler" width={300} height={300} className="rounded-lg shadow-lg hover:scale-110 transition-transform duration-300"/>
            <p className="text-center text-lg font-semibold mt-2">Tyler</p>
        </div>
        <div>
            <div className="max-w-4xl mx-auto text-center mt-12">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                    Let us help you <strong className="text-green-800">transform your property</strong> into a standout destination. Together, we can make sure your hosting journey is <strong className="font-semibold">successful and fulfilling</strong>.
                </p>
                <div id="bottom">
               <div className="mt-10 text-center">
                 <p className="text-lg font-semibold text-gray-700 mb-2">Contact Us</p>
                 <button className="mt-4 px-8 py-3 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-green-700 hover:shadow-lg transition-all duration-300">
                     123-456-7890
                 </button>
               </div>
                </div>
            </div>

        </div>
      </div>
    </div>);
};
export default AboutUs;
