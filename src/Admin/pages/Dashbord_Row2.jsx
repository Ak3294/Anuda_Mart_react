import { useState } from "react";

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

  const [salesByCountries, setSalesData] = useState([
    { country: "United States", sales: 15364 },
    { country: "Greenland", sales: 12387 },
    { country: "Serbia", sales: 9123 },
    { country: "Russia", sales: 7108 },
    { country: "Brazil", sales: 6731 },
    { country: "Sydney", sales: 3023 },
  ]);

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
  return (
    <>
      <div className="flex flex-col gap-3 sm:flex-row w-full mb-4">
        <div className="w-full sm:w-2/3 p-4 bg-[#FFFFFF] rounded-lg shadow-md ">
          <div className="card-header flex items-center justify-between">
            <h4 className="text-xl font-bold mb-4">Sales by Countries</h4>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div id="world-map-line-markers" className="h-96"></div>
              </div>
              <div>
                <h6 className="text-muted mb-3 font-medium text-xs uppercase">
                  COMPARED TO LAST MONTH
                </h6>
                <h3>
                  <span className="counter-value" data-target="53736"></span>
                  <small className="text-muted font-normal text-sm">
                    Sales
                  </small>
                </h3>
                <ul className="divide-y divide-gray-200">
                  {salesByCountries.map((country, index) => (
                    <li
                      key={index}
                      className={`py-2 flex items-center justify-between ${
                        index % 2 === 0 ? "" : "bg-gray-100"
                      }`}
                    >
                      <span className="flex items-center">
                        <i className="ri-checkbox-blank-circle-fill text-primary align-bottom me-1"></i>
                        {country.country}
                      </span>
                      <span>{country.sales}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-1/3 p-4 bg-[#FFFFFF] rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 card-header flex justify-between items-center">
            Traffic Source
            <div className="cursor-pointer flex-shrink-0 inline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-three-dots-vertical"
                viewBox="0 0 16 16"
              >
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
              </svg>
            </div>
          </h2>

          <div className="flex items-center mb-2 text-center">
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
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-xl font-bold">Recent Sales</h4>
              <a href="#!" className="text-muted flex items-center ml-11">
                View All{" "}
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
                      <div className="flex items-center gap-1">
                        <div className="flex-shrink-0">
                          <img
                            src={`assets/images/users/48/avatar-${
                              index + 1
                            }.jpg`}
                            alt=""
                            className="avatar-sm rounded-circle p-1"
                          />
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="fs-md mb-1">{sale.name}</h6>
                          <p className="text-muted mb-0">{sale.date}</p>
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

// import React, { useState } from "react";

// const Dashboard_Row3 = () => {
//   return (
//     <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
//       {/* Sales by Countries */}
//       {/* <div className="col-span-1 md:col-span-2 xl:col-span-1">
//         <div className="card">
//           <div className="card-header flex items-center justify-between">
//             <h4 className="card-title mb-0 flex-grow-1">Sales by Countries</h4>
//             <div className="flex-shrink-0">
//               <button type="button" className="btn btn-subtle-primary btn-sm">
//                 Export Report
//               </button>
//             </div>
//           </div>
//           <div className="card-body">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <div id="world-map-line-markers" className="h-96"></div>
//               </div>
//               <div>
//                 <h6 className="text-muted mb-3 font-medium text-xs uppercase">
//                   Compared to last month
//                 </h6>
//                 <h3>
//                   <span className="counter-value" data-target="53736"></span>
//                   <small className="text-muted font-normal text-sm">
//                     Sales
//                   </small>
//                 </h3>
//                 <ul className="divide-y divide-gray-200">
//                   {salesByCountries.map((country, index) => (
//                     <li
//                       key={index}
//                       className={`py-2 flex items-center justify-between ${
//                         index % 2 === 0 ? "" : "bg-gray-100"
//                       }`}
//                     >
//                       <span className="flex items-center">
//                         <i className="ri-checkbox-blank-circle-fill text-primary align-bottom me-1"></i>
//                         {country.country}
//                       </span>
//                       <span>{country.sales}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div> */}

//       {/* Recent Sales */}
//       <div className="col-span-1">
//         <div className="card h-full">
//           <div className="card-header flex items-center justify-between">
//             <h4 className="card-title mb-0 flex-grow-1">Recent Sales</h4>
//             <a href="#!" className="text-muted">
//               View All <i className="ph-caret-right align-middle"></i>
//             </a>
//           </div>
//           <div
//             className="card-body overflow-auto"
//             style={{ maxHeight: "360px" }}
//           >
//             <table className="table">
//               <tbody>
//                 {recentSales.map((sale, index) => (
//                   <tr key={index}>
//                     <td>
//                       <div className="flex items-center gap-1">
//                         <div className="flex-shrink-0">
//                           <img
//                             src={`assets/images/users/48/avatar-${
//                               index + 1
//                             }.jpg`}
//                             alt=""
//                             className="avatar-sm rounded-circle p-1"
//                           />
//                         </div>
//                         <div className="flex-grow-1">
//                           <h6 className="fs-md mb-1">{sale.name}</h6>
//                           <p className="text-muted mb-0">{sale.date}</p>
//                         </div>
//                       </div>
//                     </td>
//                     <td className="text-end">
//                       <h6 className="fs-md">{sale.amount}</h6>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard_Row3;
