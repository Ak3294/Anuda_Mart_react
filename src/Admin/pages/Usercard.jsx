import React, { useState } from "react";
import EditCustomer from "../pages/EditCustomer";

const UserCard = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const handleEditCustomer = () => {
    setIsDialogOpen(true);
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mt-2 p-2 bg-white shadow-lg mr-6 grid-gap-4 sm-grid-cols-7">
      <div className="flex items-center ml-5">
        <img
          src="\src\assets\images\buyer\window.png"
          className="w-8 h-8 mb-1 rounded-full mr-4"
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
                  <a
                    // onClick={handleEditCustomer}
                    className="py-2 px-4 hover:bg-gray-100 border flex items-center outline-hidden"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-eye mr-2"
                      // onClick={toggleDialog}
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                    </svg>
                    View
                  </a>
                  <li className="py-2 px-4 hover:bg-gray-100 border flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-pen mr-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z" />
                    </svg>
                    Edit
                    {isDialogOpen && (
                      <EditCustomer onClose={() => setIsDialogOpen(false)} />
                    )}
                  </li>
                  <li className="py-2 px-4 hover:bg-gray-100 border flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-trash mr-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                      <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                    </svg>
                    Delete
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
          <button className="  text-[#A2A4B0] text-sm mr-2 border-1 focus:outline-none w-24 h-7 rounded bg-gray-200">
            Previous
          </button>
          <button className=" hover:text-[#A2A4B0]text-[#3762EA] border-1 text-sm focus:outline-none h-7 w-24 rounded bg-gray-200">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
