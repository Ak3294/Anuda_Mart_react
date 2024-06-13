import React from "react";
import { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

const Card = ({ icon, title, value, change, changeType }) => {
  return (
    <div className="p-2 flex flex-col justify-between">
      <div className="flex justify-between items-center">
        <div className="flex items-center">{icon}</div>
        <button className="text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-three-dots-vertical"
            viewBox="0 0 16 16"
          >
            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
          </svg>
        </button>
      </div>
      <div className="flex flex-col mt-3">
        <p className="font-medium text-sm">{title}</p>
      </div>
      <div className="flex flex-col gap-1 mt-2">
        <p className="text-2xl font-bold">{value}</p>
        <p className="text-sm flex items-center gap-3">
          <span
            className={`text-${
              changeType === "increase" ? "green-300" : "red-500"
            } flex items-center`}
            style={{
              color: changeType === "increase" ? "#38a169" : "#e53e3e", // hex colors
            }}
          >
            {changeType === "increase" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-up-left"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1H3.707l10.147 10.146a.5.5 0 0 1-.708.708L3 3.707V8.5a.5.5 0 0 1-1 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-down-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M14 13.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1 0-1h4.793L2.146 2.854a.5.5 0 1 1 .708-.708L13 12.293V7.5a.5.5 0 0 1 1 0z"
                />
              </svg>
            )}
            {change}
          </span>
          than last week
        </p>
      </div>
    </div>
  );
};

const Dashboard_Row1 = () => {
  const data = [
    {
      name: "Jan",
      Earning: 26000,
      Expanse: -10000,
      amt: 2400,
    },
    {
      name: "Feb",
      Earning: 25000,
      Expanse: -17000,
      amt: 2210,
    },
    {
      name: "Mar",
      Earning: 18000,
      Expanse: -15000,
      amt: 2290,
    },
    {
      name: "Apr",
      Earning: 29000,
      Expanse: -12000,
      amt: 2000,
    },
    {
      name: "May",
      Earning: 24000,
      Expanse: -19000,
      amt: 2181,
    },
    {
      name: "Jun",
      Earning: 27000,
      Expanse: -15000,
      amt: 2500,
    },
    {
      name: "Jul",
      Earning: 21000,
      Expanse: -11000,
      amt: 2100,
    },
    {
      name: "Aug",
      Earning: 25000,
      Expanse: -14000,
      amt: 2100,
    },
    {
      name: "Sep",
      Earning: 27000,
      Expanse: -16000,
      amt: 2100,
    },
    {
      name: "Oct",
      Earning: 25000,
      Expanse: -10000,
      amt: 2100,
    },
    {
      name: "Nov",
      Earning: 25000,
      Expanse: -17000,
      amt: 2100,
    },
    {
      name: "Dec",
      Earning: 29000,
      Expanse: -19000,
      amt: 2100,
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-3 sm:flex-row w-full mb-4">
        <div className="w-full sm:w-1/3 p-2 bg-[#FFFFFF] shadow-md">
          <div class="flex flex-wrap justify-center h-full w-full bg-white">
            <div class="border w-1/2 h-1/2 p-1">
              <Card
                icon={
                  <div className="h-10 w-10 rounded-circle text-blue-500 bg-blue-100 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-wallet"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 3a2 2 0 0 1 2-2h13.5a.5.5 0 0 1 0 1H15v2a1 1 0 0 1 1 1v8.5a1.5 1.5 0 0 1-1.5 1.5h-12A2.5 2.5 0 0 1 0 12.5zm1 1.732V12.5A1.5 1.5 0 0 0 2.5 14h12a.5.5 0 0 0 .5-.5V5H2a2 2 0 0 1-1-.268M1 3a1 1 0 0 0 1 1h12V2H2a1 1 0 0 0-1 1" />
                    </svg>
                  </div>
                }
                title="TOTAL REVENUE"
                value="₹ 0M"
                change="19.07"
                changeType="increase"
              />
            </div>
            <div class="border w-1/2 h-1/2 p-1">
              <Card
                icon={
                  <div className="h-10 w-10 rounded-circle bg-gray-100 text-grey-500 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-bag"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                    </svg>
                  </div>
                }
                title="ORDERS"
                value="0"
                change="8.13"
                changeType="increase"
              />
            </div>
            <div class="border w-1/2 h-1/2 p-1">
              <Card
                icon={
                  <div className="h-10 w-10 rounded-circle bg-gray-100 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-eye"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                    </svg>
                  </div>
                }
                title="PRODUCT VIEWS"
                value="0"
                change="2.01"
                changeType="decrease"
              />
            </div>
            <div class="border w-1/2 h-1/2 p-1">
              <Card
                icon={
                  <div className="h-10 w-10 rounded-circle text-[#4AB0C1] bg-[#caf1f7] flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-people"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
                    </svg>
                  </div>
                }
                title="CUSTOMERS"
                value="0k"
                change="10.42"
                changeType="increase"
              />
            </div>
          </div>
        </div>

        <div className="w-full sm:w-2/3 p-4 bg-[#FFFFFF] rounded-lg shadow-md">
          <div className="card-header flex items-center justify-between mb-5">
            <h4 className="text-xl font-bold mb-2">Sales by Countries</h4>
            <div className="flex-shrink-0">
              <button
                type="button"
                className="  text-black bg-[#ffffff] hover:text-[#ffffff] hover:bg-black -mt-6 ml-1 btn btn-subtle-primary btn-sm"
              >
                All
              </button>
              <button
                type="button"
                className=" text-black bg-[#ffffff] hover:text-[#ffffff] hover:bg-black -mt-6 ml-1 btn btn-subtle-primary btn-sm"
              >
                1M
              </button>
              <button
                type="button"
                className=" text-black bg-[#ffffff] hover:text-[#ffffff] hover:bg-black -mt-6 ml-1 btn btn-subtle-primary btn-sm"
              >
                6M
              </button>
              <button
                type="button"
                className=" text-black bg-[#ffffff] hover:text-[#ffffff] hover:bg-black -mt-6 ml-1 btn btn-subtle-primary btn-sm"
              >
                1Y
              </button>
            </div>
          </div>
          <ResponsiveContainer
            width="100%"
            height="77%"
            data={data}
            barSize={0}
          >
            <BarChart
              barSize={10}
              width={5}
              height={300}
              data={data}
              stackOffset="sign"
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name"></XAxis>

              <YAxis domain={[-20000, 30000]} />
              <Tooltip />
              <Legend />
              <ReferenceLine y={0} stroke="#000" />
              <Bar dataKey="Earning" fill="#3762EA" stackId="stack" />
              <Bar dataKey="Expanse" fill="#0F1114" stackId="stack" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};

export default Dashboard_Row1;
