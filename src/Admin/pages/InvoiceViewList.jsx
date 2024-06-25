import { useState } from "react";
import React from "react";
import InvoiceTable from "./InvoiceTable";
import InvoiceCard from "./InvoiceOverview";

const InvoiceViewList = () => {
  const initialData = [
    {
      label: "Total Invoices",
      count: 34244,
      change: "23.09%",
      changeType: "increase", // Use 'increase' or 'decrease' for color/icon
    },
    {
      label: "Pending Invoices",
      count: 125,
      change: "12.50%",
      changeType: "decrease",
    },
    {
      label: "Paid Invoices",
      count: 30000,
      change: "8.75%",
      changeType: "increase",
    },
    {
      label: "Overdue Invoices",
      count: 50,
      change: "5.00%",
      changeType: "increase",
    },
  ];

  // State to manage data
  const [data, setData] = useState(initialData);

  // Function to render the change arrow and color based on changeType
  const renderChange = (change, changeType) => (
    <div
      className={`flex items-center font-thin ${
        changeType === "increase" ? "text-green-500" : "text-red-500"
      } w-full sm:w-auto`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        fill="currentColor"
        className={`bi bi-arrow-${changeType === "increase" ? "up" : "down"}`}
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d={`M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5`}
        />
      </svg>
      <h5 className="text-xs">{change}</h5>
    </div>
  );

  const totalReceivables = 985.32;
  const unpaidInvoices = 70; // Example unpaid invoices count
  const maxInvoices = 100; // Maximum invoices for progress calculation

  return (
    <>
      <div>
        <div className="flex flex-wrap justify-between items-center mb-4 ">
          <div className="w-full sm:w-auto mb-2 sm:mb-0">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold">
              INVOICE LIST
            </h3>
          </div>
          <div className="flex flex-wrap items-center space-x-2 text-sm sm:text-base">
            <div className="hover:underline">
              <a href="/admin/dashboard">Dashboard</a>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                height="16"
                className="text-gray-600"
              >
                <path
                  d="M8 5l8 7-8 7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <div className="hover:underline">
              <a href="">Customers</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row w-full mb-4">
          <div className="w-full sm:w-1/2 lg:w-[60%] flex flex-wrap p-2 bg-white shadow-md">
            {data.map((item, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 lg:w-1/4 flex items-center mb-4"
              >
                <div className="p-2 w-full">
                  <div className="flex items-center">
                    <div className="ring-1 ring-blue-500 rounded-full w-7 h-7 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        fill="currentColor"
                        className="bi bi-file-earmark-text"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5" />
                        <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
                      </svg>
                    </div>
                    <div className="ml-2 text-sm">{item.label}</div>
                  </div>
                  <div className="mt-4 flex flex-wrap items-center">
                    <div className="text-3xl font-semibold mr-2 ml-1 w-full sm:w-auto mb-2 sm:mb-0">
                      {item.count}
                    </div>
                    {renderChange(item.change, item.changeType)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full sm:w-1/2 lg:w-[40%] bg-white shadow-md p-3">
            <div className="flex justify-between items-center mb-2">
              <h6 className="card-title">
                Total Receivables
                <i
                  className="bi bi-exclamation-circle align-baseline ms-1 fs-sm"
                  data-bs-toggle="tooltip"
                  data-bs-title="Once you send an invoice (or bill), it becomes part of your accounts receivable – until it's paid."
                ></i>
              </h6>
              <a
                href="/profile"
                className="text-blue-600 hover:text-blue-800 text-sm"
              >
                View Profile &rarr;
              </a>
            </div>
            <div className="text-sm font-semibold text-gray-800 mt-1 mb-3">
              ${totalReceivables.toFixed(2)}k{" "}
              <span className="text-gray-500 text-sm">
                Total unpaid invoices
              </span>
            </div>
            <div className="relative pt-1">
              <div className="overflow-hidden h-3 text-xs flex rounded bg-gray-200">
                <div
                  style={{ width: `${(unpaidInvoices / maxInvoices) * 100}%` }}
                  className="flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* <InvoiceTable /> */}
        <InvoiceCard/>
      </div>
    </>
  );
};

export default InvoiceViewList;
