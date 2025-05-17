"use client";

import React, { useState } from "react";

const UserSubmitForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const BookNowSubmitForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Add your form submission logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="min-h-screen flex items-start justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white mt-20 p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6">User Registration</h2>

        <div className="mb-4">
          <label
            htmlFor="fullName"
            className="block text-gray-700 font-medium mb-2"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800"
            required
          />
        </div>

        <div className="mb-4">
          <label
              htmlFor="phoneNumber"
              className="block text-gray-700 font-medium mb-2"
          >
            Phone Number
          </label>
          <input
              type="integer"
              id="phoneNumber"
              name="phoneNumber"
              value={'phoneNumber'}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-gray-700 font-medium mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-800 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-all"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserSubmitForm;