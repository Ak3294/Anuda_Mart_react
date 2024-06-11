import { useState } from "react";
import React from "react";

const Dashbord_Row3 = () => {
  const [orderHistory, setOrderHistory] = useState([
    // Initialize with some sample data
    {
      id: 1,
      name: "Craft Women Black Sling Bag",
      price: "$15.99",
      imageSrc: "/src/assets/images/products/img-2.png",
      rating: "☆ 487 🛒 936",
    },
    {
      id: 1,
      name: "Craft Women Black Sling Bag",
      price: "$15.99",
      imageSrc: "/src/assets/images/products/img-2.png",
      rating: "☆ 487 🛒 936",
    },
    {
      id: 1,
      name: "Craft Women Black Sling Bag",
      price: "$15.99",
      imageSrc: "/src/assets/images/products/img-2.png",
      rating: "☆ 487 🛒 936",
    },
    {
      id: 2,
      name: "Another Product",
      price: "$19.99",
      imageSrc: "/src/assets/images/products/img-3.png",
      rating: "☆ 123 🛒 456",
    },
    {
      id: 2,
      name: "Another Product",
      price: "$19.99",
      imageSrc: "/src/assets/images/products/img-3.png",
      rating: "☆ 123 🛒 456",
    },
    {
      id: 1,
      name: "Craft Women Black Sling Bag",
      price: "$15.99",
      imageSrc: "/src/assets/images/products/img-2.png",
      rating: "☆ 487 🛒 936",
    },
    {
      id: 2,
      name: "Another Product",
      price: "$19.99",
      imageSrc: "/src/assets/images/products/img-3.png",
      rating: "☆ 123 🛒 456",
    },
    {
      id: 2,
      name: "Another Product",
      price: "$19.99",
      imageSrc: "/src/assets/images/products/img-3.png",
      rating: "☆ 123 🛒 456",
    },
    // Add more items as needed
  ]);
  return (
    <>
      <div className="flex flex-col gap-3 sm:flex-row w-full mb-4">
        <div className="w-full sm:w-2/3 p-4 bg-[#FFFFFF] rounded-lg shadow-md"></div>

        <div className="w-full sm:w-1/3 p-4 bg-[#FFFFFF] rounded-lg shadow-md">
          <p className="text-black font-semibold mb-3 ">Popular Products</p>
          <div className="max-h-[50vh] overflow-y-auto ">
            {orderHistory.map((item) => (
              <div
                key={item.id}
                className="flex justify-between mb-3 mr-1 border"
              >
                <img
                  src={item.imageSrc}
                  alt="Product"
                  className="w-12 h-12 rounded"
                />
                <div className="ml-4 flex-grow">
                  <h3 className="text-sm font-bold">{item.name}</h3>
                  <p className="text-gray-600">{item.rating}</p>
                </div>
                <div className="flex items-center">
                  <p className="text-blue-600">{item.price}</p>
                  <button className="ml-2 bg-black hover:bg-gray-800 text-white font-bold py-2 px-2 rounded">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-arrow-right-short"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashbord_Row3;
