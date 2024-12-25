"use client";

import React, { useState } from "react";

const MakeComment = () => {
  const [formData, setFormData] = useState({
    comment: "",
    name: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Reset the form fields
    setFormData({
      comment: "",
      name: "",
      email: "",
    });
  };

  return (
    <div className="max-w-3xl p-6 ">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">
        Make A Comment
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <textarea
            name="comment"
            value={formData.comment}
            onChange={handleInputChange}
            placeholder="Your Comment Here*"
            className="w-full border border-gladeGreen-300 p-3 text-gladeGreen-700 text-sm  focus:border-gladeGreen-500 outline-none"
            rows="4"
            required
          ></textarea>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name*"
            className="w-full border border-gladeGreen-300 rounded-lg p-3 text-gladeGreen-700 text-sm focus:ring focus:ring-gladeGreen-300 focus:border-gladeGreen-500"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="E-mail*"
            className="w-full border border-gladeGreen-300 rounded-lg p-3 text-gladeGreen-700 text-sm focus:ring focus:ring-gladeGreen-300 focus:border-gladeGreen-500"
            required
          />
        </div>
        <button
          type="submit"
          className="px-6 py-2 bg-gladeGreen-600 text-white font-medium text-sm rounded-lg shadow-md hover:bg-gladeGreen-700 focus:outline-none focus:ring focus:ring-gladeGreen-300 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default MakeComment;
