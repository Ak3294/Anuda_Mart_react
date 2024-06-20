import React from "react";
import "../../index.css";
import TransactionTable from "./TransactionTable";

const Transactions = () => {
  return (
    <>
      <div>
        <div className=" text-base font-semibold mb-3 ">TRANSACTIONS</div>

        <div>
          <button className="mb-3 py-2 font-medium text-sm text-white bg-red-600  px-3  rounded-1 focus:outline-none focus:shadow-outline">
            Summery
          </button>
        </div>

        <div className="flex flex-col lg:flex-row w-full  bg-white shadow-md p-2">
          <div className="w-full lg:w-1/2 p-3">
            <div>
              <div className="flex justify-between items-center mb-2">
                <div className="text-sm font-semibold">Available Balance</div>
                <button className="flex justify-center items-center text-xs bg-red-600 text-white hover:bg-black px-2 py-1 rounded-1">
                  Withdrawal Amount
                </button>
              </div>
              <div className="text-base mb-2">10000.00</div>
              <div className="text-xs text-gray-500">
                (Total Balance - Funds on Hold + Available Balance)
              </div>
            </div>
            <hr className="my-3" />
            <div>
              <div className="flex justify-between mb-3">
                <div className="text-sm font-thin ">Total Balance</div>
                <div className="text-sm">10000.00</div>
              </div>
              <div className="flex justify-between mb-3">
                <div className="text-sm font-thin ">Funds on Hold</div>
                <div className="text-sm">0.00</div>
              </div>
              <div className="flex justify-between mb-1">
                <div className="text-sm font-thin ">Available Balance</div>
                <div className="text-sm">0.00</div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 p-3">
            <div>
              <div className="flex justify-between items-center mb-2">
                <div className="text-sm font-semibold">Hold Balance</div>
              </div>
              <div className="text-base mb-2">0.00</div>
              <div className="text-xs text-gray-500">
                This Amount cannot be withdrawn
              </div>
            </div>
            <hr className="my-3" />
            <div className="text-xs text-gray-500">
              <div>
                To change Hold Balance contact your anuda.live manager{" "}
                <a
                  className="text-blue-600 hover:underline"
                  href="mailto:accounts@anudarealty.com"
                >
                  accounts@anudarealty.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-full bg-white shadow-md p-2">
          <div className="w-full md:w-1/3 p-3">
            <div className="flex justify-between items-center">
              <div className="text-sm font-semibold">Last Deposit</div>
              <button className="flex items-center hover:text-black bg-white text-xs px-2 py-2 text-red-600">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-.512 1.536-1.462 2.882-2.709 4.001C16.309 18.272 14.194 19 12 19c-4.477 0-8.268-2.943-9.542-7z"
                  ></path>
                </svg>
                View All
              </button>
            </div>
            <div>0.00</div>
            <hr className="mt-4" />
          </div>

          <div className="w-full md:w-1/3 p-3">
            <div className="flex justify-between items-center">
              <div className="text-sm font-semibold">Last Withdrawal</div>
              <button className="flex items-center hover:text-black bg-white text-xs px-2 py-2 text-red-600">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-.512 1.536-1.462 2.882-2.709 4.001C16.309 18.272 14.194 19 12 19c-4.477 0-8.268-2.943-9.542-7z"
                  ></path>
                </svg>
                View All
              </button>
            </div>
            <div>0.00</div>
            <hr className="mt-4" />
          </div>

          <div className="w-full md:w-1/3 p-3">
            <div className="flex justify-between items-center">
              <div className="text-sm font-semibold">Last Transfer</div>
              <button className="flex items-center hover:text-black bg-white text-xs px-2 py-2 text-red-600">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-.512 1.536-1.462 2.882-2.709 4.001C16.309 18.272 14.194 19 12 19c-4.477 0-8.268-2.943-9.542-7z"
                  ></path>
                </svg>
                View All
              </button>
            </div>
            <div>0.00</div>
            <hr className="mt-4" />
          </div>
        </div>

        <div className="flex flex-col w-full bg-[#FFFFFF] shadow-md p-4">
          <div className="Account mb-2 text-sm">A/c - 3255060301DC</div>
          <div className="date text-xs">14 Jun 2023, 11:33 AM</div>
        </div>

        <TransactionTable />

        <div className="text-sm text-[#8B9BB3] flex justify-between flex-col lg:flex-row w-full bg-white shadow-md p-4">
          <div className="text-thin">Showing 1 to 5 of 5 results</div>
          <div>
            <button className="rounded-1 border text-xs bg-white text-grey-400 px-3 py-2 mr-1">
              Previous
            </button>
            <button className="rounded-1 border text-xs text-white bg-blue-600 px-3 py-2 mr-1">
              1
            </button>
            <button className="rounded-1 border text-xs bg-white text-grey-400 px-3 py-2 mr-1">
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transactions;
