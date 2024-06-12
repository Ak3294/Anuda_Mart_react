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
        <div className="w-full sm:w-1/3 p-4 bg-[#FFFFFF] rounded-lg shadow-md"></div>

        <div className="w-full sm:w-2/3 p-4 bg-[#FFFFFF] rounded-lg shadow-md">
          <div className="card-header flex items-center justify-between mb-5">
            <h4 className="text-xl font-bold mb-2">Sales by Countries</h4>
            <div className="flex-shrink-0">
              <button
                type="button"
                className="  text-black bg-[#E9EBEC] hover:bg-black -mt-6 ml-1 hover:text-white btn btn-subtle-primary btn-sm"
              >
                All
              </button>
              <button
                type="button"
                className=" text-black bg-[#E9EBEC] hover:bg-black -mt-6 ml-1 hover:text-white btn btn-subtle-primary btn-sm"
              >
                1M
              </button>
              <button
                type="button"
                className=" text-black bg-[#E9EBEC] hover:bg-black -mt-6 ml-1 hover:text-white btn btn-subtle-primary btn-sm"
              >
                6M
              </button>
              <button
                type="button"
                className=" text-black bg-[#E9EBEC] hover:bg-black -mt-6 ml-1 hover:text-white btn btn-subtle-primary btn-sm"
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
