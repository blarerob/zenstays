'use client';

import React from 'react';
import { Mail, Phone } from "lucide-react";

const ContactUs = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-200 f-screen py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-6">
          Contact Us
        </h1>
       <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-12">
          Have questions or need assistance? We’re here to help! Fill out the form below or reach out to us directly.
        </p>
        <hr className="border-t-2 border-[#766a55] my-6" />
      </div>

      <div className="max-w-4xl mx-auto text-center mb-12 mt-10">
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <div className="bg-white shadow-lg rounded-lg p-6 flex items-center gap-4">
            <div className="bg-green-800 text-white p-3 rounded-full">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800">Email</h3>
              <p className="text-gray-600">admin@zenstays.net</p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 flex items-center gap-4">
            <div className="bg-green-800 text-white p-3 rounded-full">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800">Phone</h3>
              <p className="text-gray-600">(858) 289-6510</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-green-800 text-white font-bold py-3 rounded-lg shadow-lg hover:bg-green-700 transition-transform transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="max-w-4xl mx-auto mt-16 mb-2">
        <h2 className="text-2xl font-bold text-center mb-6">Our Location</h2>
        <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153169!3d-37.81627974202144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d8b3c1b0b1a!2sMelbourne%20CBD!5e0!3m2!1sen!2sau!4v1613964101743!5m2!1sen!2sau"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;