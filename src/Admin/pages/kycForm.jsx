// src/KycForm.js
import React from "react";

const KycForm = () => {
  return (
    <div className="flex justify-center items-center grid-rows-3">
      <form className="bg-white p-2 w-full ">
        <h2 className="text-medium font-semibold mb-6">KYC Information</h2>

        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="aadhaar"
          >
            Aadhar E-KYC
          </label>
          <input
            type="text"
            id="aadhaar"
            placeholder="XXXX-XXXX-XXXX"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="gst"
          >
            GST No
          </label>
          <input
            type="text"
            id="gst"
            placeholder="XXXXARCPV"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="pan"
          >
            Pan Card
          </label>
          <input
            type="text"
            id="pan"
            placeholder="ARCXXXXXX"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default KycForm;
