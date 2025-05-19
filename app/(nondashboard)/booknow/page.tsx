"use client";

import React, { useState } from "react";

const UserSubmitForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

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
               htmlFor="firstName"
               className="block text-gray-700 font-medium mb-2"
           >
             First Name<span className="text-grey">*</span>
           </label>
            <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter your first name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800"
                required
            />
          </div>

          <div className="mb-4">
            <label
                htmlFor="lastName"
                className="block text-gray-700 font-medium mb-2"
            >
              Last Name<span className="text-grey">*</span>
            </label>
            <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter your last name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800"
                required
            />
          </div>

          <div className="mb-4">
           <label
               htmlFor="email"
               className="block text-gray-700 font-medium mb-2"
           >
             Email<span className="text-grey">*</span>
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
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800"
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