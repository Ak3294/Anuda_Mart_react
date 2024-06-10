import React from "react";

const UserCard = () => {
  return (
    <div className="mt-2 p-2 bg-white shadow-lg mr-6 grid-gap-4 sm-grid-cols-7">
      <div className="flex items-center ml-5">
        <img
          src="index.jpg"
          alt="User"
          className="w-12 h-10 rounded-full mr-4"
        />
        <div className="flex-grow">
          <div className="flex items-center justify-between space-x-4">
            <p className="font-semibold text-sm ml-3">John Doe</p>
            <p className="text-gray-500 text-sm ml-3">john@example.com</p>
            <p className="text-gray-500 text-sm ml-3">123-456-7890</p>
            <p className="text-gray-500 text-sm ml-3">01/01/1990</p>
          </div>
        </div>
        <span className="ml-4 bg-green-500 text-white text-xs px-2 py-1 rounded-full ml-3">
          Active
        </span>
        {/* Visible hr tag show here */}

        <button className="ml-2 bg-gray-500 text-white hover:bg-black font-semibold py-2 px-4 rounded w-8 h-7 flex items-center justify-center">
          <span role="img" aria-label="dots">
            &#x22EE;
          </span>
        </button>
      </div>
      <hr />
      <div className="flex justify-between items-center p-3">
        <p className="text-gray-500 ml-7">Showing 10 of 13 Results</p>
        <div className="flex ml-auto">
          <button className=" bg-white text-[#A2A4B0] text-sm mr-2 border-1 focus:outline-none w-24 h-7 rounded bg-gray-200">
            Previous
          </button>
          <button className="  bg-white hover:text-[#A2A4B0]text-[#3762EA] border-1 text-sm focus:outline-none h-7 w-24 rounded bg-gray-200">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
