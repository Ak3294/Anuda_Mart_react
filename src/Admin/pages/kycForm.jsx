import React from "react";
import "../../index.css";

const KycForm = ({ formData, updateField, onFormSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(); // Call the function to switch to the next form
  };

  return (
    <div className="mt-5 items-center">
      <form className="bg-white p-4 shadow-md " onSubmit={handleSubmit}>
        <h2 className="text-xl font-semibold mb-6 flex">KYC Information</h2>
        <div className="w-full flex flex-wrap mb-4 ">
          <div className="md:w-1/3 ">
            <label
              className="flex text-sm font-medium text-gray-700 mb-1"
              htmlFor="aadhaar"
            >
              Aadhar E-KYC
            </label>
            <input
              type="text"
              id="aadhaar"
              value={formData.aadhaar || ""}
              onChange={(e) => updateField({ aadhaar: e.target.value })}
              placeholder="XXXX-XXXX-XXXX"
              className=" flex w-[90%] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3762EA]"
              pattern="\d{12}"
              maxLength="12"
              inputMode="numeric"
              required
            />
          </div>

          <div className="w-full md:w-1/3">
            <label
              className="flex text-sm font-medium text-gray-700 mb-1"
              htmlFor="gst"
            >
              GST No
            </label>
            <input
              type="text"
              id="gst"
              value={formData.gst || ""}
              onChange={(e) => updateField({ gst: e.target.value })}
              placeholder="XXXXARCPV"
              className="flex w-[90%] flex  px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3762EA]"
              required
            />
          </div>

          <div className="w-full md:w-1/3">
            <label
              className="flex text-sm font-medium text-gray-700 mb-1"
              htmlFor="pan"
            >
              Pan Card
            </label>
            <input
              type="text"
              id="pan"
              value={formData.pan || ""}
              onChange={(e) => updateField({ pan: e.target.value })}
              placeholder="ARCXXXXXX"
              className="flex w-[90%] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3762EA]"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="flex w-20 text-sm font-medium hover:bg-black p-3 h-10 bg-[#E40F15] text-white py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#E40F15]"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default KycForm;
