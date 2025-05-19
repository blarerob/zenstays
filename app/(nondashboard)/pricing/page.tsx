import React from "react";
import { DollarSign, Star, MessageSquare, Briefcase, TrendingUp, Clock } from "lucide-react";

const PerformanceAndPricing = () => {
return (
  <div className="bg-gray-50 f-screen py-16 px-6">
    <div className="max-w-6xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Performance & Pricing
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          Discover how we deliver exceptional results and transparent pricing.
        </p>
      </div>

        {/* One Time Fee Promise Section */}
        <div className="bg-white shadow-md shadow-green-800 rounded-lg mb-10 p-4">
            <h2 className="text-3xl font-bold text-green-800 text-center mb-6">
                One Time Fee <span className='text-black'>Promise</span>
            </h2>
            <ul className=" text-gray-600 space-y-2 text-center">
                <li><span className="text-green-600">&#10003;</span> No hidden charges or costs</li>

                <li><span className="text-green-600">&#10003;</span> One time fee, billed monthly</li>
                <li><span className="text-green-600">&#10003;</span> Say good-bye to double dipping on cleaning revenue</li>

                <li><span className="text-green-600">&#10003;</span> Fees are calculated solely on the accommodation revenue</li>
                <li>
                    <span className="text-green-600">&#10003;</span> Flexible revenue distribution and billing program. Choose between
                    direct revenue payouts or a check at the end of the month
                </li>
            </ul>
        </div>

      {/* Performance Metrics Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <DollarSign className="mx-auto mb-4 text-green-600 w-12 h-12" />
          <h2 className="text-2xl font-bold text-gray-800">$2M</h2>
          <p className="text-gray-600">Revenue Generated</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <Star className="mx-auto mb-4 text-yellow-500 w-12 h-12" />
          <h2 className="text-2xl font-bold text-gray-800">4.93</h2>
          <p className="text-gray-600">Average Review Rating</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <MessageSquare className="mx-auto mb-4 text-blue-500 w-12 h-12" />
          <h2 className="text-2xl font-bold text-gray-800">1,400+</h2>
          <p className="text-gray-600">Posted Reviews</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <Briefcase className="mx-auto mb-4 text-gray-600 w-12 h-12" />
          <h2 className="text-2xl font-bold text-gray-800">$8M</h2>
          <p className="text-gray-600">Managed Assets</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <TrendingUp className="mx-auto mb-4 text-green-500 w-12 h-12" />
          <h2 className="text-2xl font-bold text-gray-800">30%</h2>
          <p className="text-gray-600">Above Market Average Performance</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <Clock className="mx-auto mb-4 text-gray-500 w-12 h-12" />
          <h2 className="text-2xl font-bold text-gray-800">3+ Years</h2>
          <p className="text-gray-600">Hosting Experience</p>
        </div>
      </div>
    </div>
  </div>
);
};

export default PerformanceAndPricing;