import React from "react";
import UserProfile from "./UserProfile";
import UserCard from "./Usercard";
import "./customerStyle.css";

export default function Customers() {
  return (
    <>
      <div className="p-1 bg-gray-100 min-h-screen">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-sm font-semibold">CUSTOMERS</h3>
          </div>
          <div className="flex space-x-2 text-">
            <div className="hover:underline">
              <a href="">Dashboard</a>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  d="M8 5l8 7-8 7"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                />
              </svg>
            </div>
            <div className="hover:underline">
              <a href="">Customers</a>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 shadow-md">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div>
              <h1 className="text-lg font-bold  md:mb-0">Customer List</h1>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end md:space-y-0 md:space-x-4">
              <button className="bg-[#E40F15] text-sm text-[#F7F7F7] px-2 py-2 rounded hover:bg-[#0F1114]">
                <i className="bi bi-plus-circle mr-1"></i>
                Add Customer
              </button>

              <button className="bg-[#0F1114] text-sm text-[#F7F7F7] px-4 rounded  hover:bg-[#0F1114]">
                <i className="bi bi-cloud-arrow-down mr-1"></i>
                Import
              </button>

              <button className="bg-[#A4D7DF] text-sm hover:text-[#FFFFFF] text-[#4AB0C1] px-4 rounded  hover:bg-[#4AB0C1]">
                <i className="bi bi-cloud-arrow-up mr-1"></i>
                Export
              </button>
            </div>
          </div>
        </div>

        
        <div className="flex">
          <div className="">
            <div
              className="bg-white shadow-lg mt-4 mr-6 grid-gap-3 sm-grid-cols-4"
              style={{ width: "65%" }}
            >
              <form className="flex md:flex-row md:items-center">
                <div className="flex items-center h-full">
                  <div className="flex items-center w-full md:w-auto border border-gray-300 px-3 mb-4 md:mb-0 md:mr-4">
                    <svg
                      className="text-gray-500 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                    <input
                      type="text"
                      placeholder="Search Customer, email, etc."
                      className="w-full py-2 px-2 outline-none"
                    />
                  </div>

                  <select className="w-full text-sm md:w-auto py-2 px-3 border border-gray-300 outline-none mb-4 md:mb-0 md:ml-4">
                    <option value="" disabled selected hidden>
                      All States
                    </option>
                    <option value="option1">Active</option>
                    <option value="option2">Inactive</option>
                    <option value="option3">None</option>
                  </select>

                  <input
                    placeholder="Select Date"
                    className="w-full md:w-auto py-2 px-3 border border-gray-300 outline-none mb-4 md:mb-0 md:ml-4"
                  />

                  <button
                    type="submit"
                    className="md:w-auto bg-[#9AB0F4] text-white hover:bg-[#3762EA] py-2 px-4 flex items-center justify-center -mt-6 mx-2"
                  >
                    <i className="bi bi-funnel align-baseline"></i>
                    Filter
                  </button>
                </div>
              </form>
            </div>

            <div className=" ">
              <UserCard />
            </div>
          </div>

          <div
            style={{ width: "30%", marginLeft: "auto", marginTop: "22px" }}
            className="p-4  md:p-6 lg:p-12 bg-white shadow- right-0  w-full md:w-30%"
          >
            <UserProfile />
          </div>
        </div>
      </div>
    </>
  );
}
