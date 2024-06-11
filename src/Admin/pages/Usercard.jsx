import React, { useState } from "react";

const UserCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mt-2 p-2 bg-white shadow-lg mr-6 grid-gap-4 sm-grid-cols-7">
      <div className="flex items-center ml-5">
        <img src="\src\assets\images\buyer\window.png" className="w-8 h-8 mb-1 rounded-full mr-4" />
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

        <div className="relative">
          <button
            className="ml-2 text-[#DDDDDE] bg-black font-semibold py-2 px-3 rounded w-2 h-7 flex items-center justify-center focus:outline-none"
            onClick={toggleDropdown}
          >
            <span role="img" aria-label="dots">
              &#x22EE;
            </span>
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 max-h-28 cursor-pointer overflow-y-auto">
              {/* Dropdown content goes here */}
              <div className="">
                <ul>
                  <li className="py-2 px-4 hover:bg-gray-100 border">
                    Option 1
                  </li>
                  <li className="py-2 px-4 hover:bg-gray-100 border">
                    Option 2
                  </li>
                  <li className="py-2 px-4 hover:bg-gray-100 border">
                    Option 3
                  </li>
                  <li className="py-2 px-4 hover:bg-gray-100 border">
                    Option 1
                  </li>
                  <li className="py-2 px-4 hover:bg-gray-100 border">
                    Option 2
                  </li>
                  <li className="py-2 px-4 hover:bg-gray-100 border">
                    Option 3
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
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
