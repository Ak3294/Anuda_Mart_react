import { useState } from "react";
import img1 from "../../assets/images/products/img-1.png";

import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import WorldMap from "./worldMap";

const salesData = [
  { country: "United States", sales: 15364, color: "text-blue-500" },
  {
    country: "Greenland",
    sales: 12387,
    color: "text-gray-500",
    bg: "bg-neutral-100",
  },
  { country: "Serbia", sales: 9123, color: "text-teal-500" },
  {
    country: "Russia",
    sales: 7108,
    color: "text-green-500",
    bg: "bg-neutral-100",
  },
  { country: "Brazil", sales: 6731, color: "text-red-500" },
  {
    country: "Sydney",
    sales: 3023,
    color: "text-yellow-500",
    bg: "bg-neutral-100",
  },
];

let totalSales = 0;
salesData.forEach((item) => {
  totalSales += item.sales;
});

const Dashbord_Row2 = () => {
  const data = [
    {
      name: "Feb",
      searchEngineTraffic: 74,
      directTraffic: 46,
      amt: 2400,
    },
    {
      name: "Mar",
      searchEngineTraffic: 57,
      directTraffic: 83,
      amt: 2210,
    },
    {
      name: "Apr",
      searchEngineTraffic: 102,
      directTraffic: 59,
      amt: 2290,
    },
    {
      name: "May",
      searchEngineTraffic: 97,
      directTraffic: 54,
      amt: 2000,
    },
  ];

  const [trafficData, setTrafficData] = useState([
    { name: "Feb", searchEngineTraffic: 74, directTraffic: 50 },
    { name: "Mar", searchEngineTraffic: 80, directTraffic: 60 },
    { name: "Apr", searchEngineTraffic: 90, directTraffic: 70 },
    { name: "May", searchEngineTraffic: 85, directTraffic: 65 },
  ]);

  const [recentSales, setRecentSales] = useState([
    { name: "Talon Bradtke", amount: 478.87, date: "03 Feb, 2023" },
    { name: "Tyrell Kerluke", amount: 82.14, date: "03 Feb, 2023" },
    { name: "Ross Zieme", amount: 79.0, date: "03 Feb, 2023" },
    { name: "Hollis Spencer", amount: 849.05, date: "03 Feb, 2023" },
    { name: "Cordia Grady", amount: 254.32, date: "03 Feb, 2023" },
  ]);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <>
      <div className="flex flex-col gap-3 sm:flex-row w-full mb-4">
        <div className="w-full sm:w-2/3 p-4 bg-[#FFFFFF] rounded-lg shadow-md ">
          <div className="card-header flex items-center justify-between">
            <h4 className="text-lg font-semibold  mb-4">Sales by Countries</h4>
            <div className="flex-shrink-0">
              <button
                type="button"
                className=" bg-[#9BB1F5] text-[#3762EA] hover:bg-[#3762EA] -mt-6 hover:text-white btn btn-subtle-primary btn-sm"
              >
                Export Report
              </button>
            </div>
          </div>

          <div className="card-body mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="col-span-1 md:col-span-2 bg-blue-200">
                <WorldMap />
              </div>
              <div className="">
                <h6 className="text-muted mb-3 font-medium text-xs uppercase">
                  COMPARED TO LAST MONTH
                </h6>

                <div className="flex">
                  <h1 className="text-2xl font-semibold">{totalSales}</h1>
                  <small className="my-1 mx-2 text-muted font-medium text-base">
                    Sales
                  </small>
                </div>

                <ul className="mt-2 list-none space-y-2 text-xs">
                  {salesData.map((item, index) => (
                    <li key={index} className={`p-1 rounded ${item.bg ?? ""}`}>
                      <i
                        className={`ri-checkbox-blank-circle-fill align-bottom mr-1 ${item.color}`}
                      ></i>
                      {item.country}
                      <span className="float-right">
                        {item.sales.toLocaleString()}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-1/3 p-4 bg-[#FFFFFF] rounded-lg shadow-md">
          <div className="flex justify-between items-center">
            <div className="flex items-center text-lg font-semibold">
              Traffic Source
            </div>
            <div className="relative">
              <button
                className="text-gray-400 focus:outline-none"
                onClick={toggleDropdown}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-three-dots-vertical"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
                  />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-[#FFFFFF] rounded-lg shadow-lg py-1  text-sm">
                  <button className="block px-2 py-1 text-gray-800 hover:bg-[#F3F6F9] w-full text-left">
                    Today
                  </button>
                  <button className="block px-2 py-1 text-gray-800 hover:bg-[#F3F6F9] w-full text-left">
                    Last Week
                  </button>
                  <button className="block px-2 py-1 text-gray-800 hover:bg-[#F3F6F9] w-full text-left">
                    Last Month
                  </button>
                  <button className="block px-2 py-1 text-gray-800 hover:bg-[#F3F6F9] w-full text-left">
                    Current Year
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center mb-2 text-center mt-5">
            <div className="w-4 h-4 square-full bg-blue-500 mr-2"></div>
            <span className="text-gray-600">Search Engine Traffic</span>
          </div>
          <div className="flex items-center mb-6">
            <div className="w-4 h-4 square-full bg-gray-300 mr-2"></div>
            <span className="text-gray-600">Direct Traffic</span>
          </div>

          <ResponsiveContainer width="100%" height="60%" barSize={0}>
            <BarChart
              barGap={15}
              barSize={10}
              data={trafficData}
              margin={{
                top: 4,
                right: 5,
                left: 5,
                bottom: 2,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />

              <Bar
                dataKey="searchEngineTraffic"
                fill="#3762EA"
                background={{ fill: "#eee" }}
              />
              <Bar dataKey="directTraffic" fill="#DDE1EF" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="w-full sm:w-1/3 p-4 bg-[#FFFFFF] rounded-lg shadow-md">
          <div className="card-header flex items-center justify-between">
            <div className="flex justify-between items-center mb-4 w-full">
              <h4 className="text-lg font-semibold">Recent Sales</h4>
              <a href="#!" className="text-gray-500 flex items-center text-sm">
                View All
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chevron-right ml-1"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div
            className="card-body overflow-auto"
            style={{ maxHeight: "360px" }}
          >
            <table className="table">
              <tbody>
                {recentSales.map((sale, index) => (
                  <tr key={index}>
                    <td>
                      <div className="flex">
                        <img
                          src={img1}
                          alt=""
                          class="w-9 h-9 object-cover rounded-full mr-2"
                        ></img>

                        <div className="flex-grow-1">
                          <h6 className="fs-md mb-1 text-sm">{sale.name}</h6>
                          <p className="text-muted mb-0 text-xs">{sale.date}</p>
                        </div>
                      </div>
                    </td>
                    <td className="text-end">
                      <h6 className="fs-md">{sale.amount}</h6>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashbord_Row2;
