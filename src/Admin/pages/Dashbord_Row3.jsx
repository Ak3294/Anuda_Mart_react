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

  const [orders, setOrders] = useState([
    {
      orderDate: "15 Feb, 2023",
      orderId: "#TBS250011",
      shopCustomer: "Alex Smith",
      products: "Clothes",
      amount: "$109.00",
      status: "New",
      rating: "5.5",
    },
    {
      orderDate: "14 Feb, 2023",
      orderId: "#TBS250010",
      shopCustomer: "Jansh Brown",
      products: "Kitchen Storage",
      amount: "$149.00",
      status: "Pending",
      rating: "4.5",
    },
    {
      orderDate: "30 Jan, 2023",
      orderId: "#TBS250009",
      shopCustomer: "Ayaan Bowen",
      products: "Bike Accessories",
      amount: "$215.00",
      status: "Out of Delivered",
      rating: "4.9",
    },
    {
      orderDate: "25 Jan, 2023",
      orderId: "#TBS250008",
      shopCustomer: "Prezy Mark",
      products: "Furniture",
      amount: "$199.00",
      status: "Shipping",
      rating: "4.3",
    },
    {
      orderDate: "19 Jan, 2023",
      orderId: "#TBS250007",
      shopCustomer: "Vihan Hudda",
      products: "Bags and Wallets",
      amount: "$330.00",
      status: "Delivered",
      rating: "4.7",
    },
    {
      orderDate: "16 Jan, 2023",
      orderId: "#TBS250006",
      shopCustomer: "Vihan Hudda",
      products: "Bags and Wallets",
      amount: "$745.11",
      status: "Primary",
      rating: "4.6",
    },
  ]);
  return (
    <>
      <div className="flex flex-col gap-3 sm:flex-row w-full mb-4">
        <div className="w-full sm:w-2/3 p-4 bg-[#FFFFFF] rounded-lg shadow-md">
          <h1 className="text-black font-semibold mb-3">Latest Orders</h1>
          <div className="flex justify-between items-center mb-4">
            <p className=" -mt-12 ml-[78vh] flex ml-auto text-black font-semibold">Sort By: </p>
            <select className="rounded-md text-[#878F9C] bg-white text- px-2 py-1 -mt-12 ml-auto">
              <option value="orderDate">Order Date</option>
              <option value="orderId">Order ID</option>
            </select>
          </div>
          <div className="overflow-x-auto shadow-md">
            <table className="w-full text-sm text-[#878A99] bg-[#EEF0F7]">
              <thead className="text-xs text-[#878A99] bg-[#EEF0F7]">
                <tr>
                  <th scope="col" className="px-2 py-2">
                    Order Date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Order ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Shop
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Customers
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Products
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Amount
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Rating
                  </th>
                </tr>
              </thead>
              <tbody className="table-auto">
                {orders.map((order, index) => (
                  <tr
                    key={index}
                    className="bg-white text-sm  dark:border-gray-700"
                  >
                    <td className="px-2 py-2 text-[#0F1114]">
                      {order.orderDate}
                    </td>
                    <td className="px-2 py-2 cursor-pointer text-[#3258D3]">
                      {order.orderId}
                    </td>
                    <td className="px-2 py-2 ">{order.shop}</td>
                    <td className="px-2 py-2  text-[#0F1114]">
                      {order.shopCustomer}
                    </td>
                    <td className="px-2 py-2 text-[#0F1114]">
                      {order.products}
                    </td>
                    <td className="px-2 py-2 text-[#0F1114] text-bold">
                      {order.amount}
                    </td>
                    <td className="px-1 py-2">{order.status}</td>
                    <td className="px-4 py-2 text-[#0F1114]">{order.rating}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="w-full sm:w-1/3 p-4 bg-[#FFFFFF] rounded-lg shadow-md">
          <p className="text-black font-semibold mb-3 ">Popular Products</p>
          <div className="max-h-[55vh] overflow-y-auto overflow-y-auto scrollbar ">
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
