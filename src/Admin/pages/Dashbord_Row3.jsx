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
      status: "new",
      rating: "5.5",
      shopImage: "",
    },
    {
      orderDate: "14 Feb, 2023",
      orderId: "#TBS250010",
      shopCustomer: "Jansh Brown",
      products: "Kitchen Storage",
      amount: "$149.00",
      status: "pending",
      rating: "4.5",
      shopImage: "",
    },
    {
      orderDate: "30 Jan, 2023",
      orderId: "#TBS250009",
      shopCustomer: "Ayaan Bowen",
      products: "Bike Accessories",
      amount: "$215.00",
      status: "Out of Delivered",
      rating: "4.9",
      shopImage: "",
    },
    {
      orderDate: "25 Jan, 2023",
      orderId: "#TBS250008",
      shopCustomer: "Prezy Mark",
      products: "Furniture",
      amount: "$199.00",
      status: "Shipping",
      rating: "4.3",
      shopImage: "",
    },
    {
      orderDate: "19 Jan, 2023",
      orderId: "#TBS250007",
      shopCustomer: "Vihan Hudda",
      products: "Bags and Wallets",
      amount: "$330.00",
      status: "Delivered",
      rating: "4.7",
      shopImage: "",
    },
    {
      orderDate: "16 Jan, 2023",
      orderId: "#TBS250006",
      shopCustomer: "Vihan Hudda",
      products: "Bags and Wallets",
      amount: "$745.11",
      status: "primary",
      rating: "4.6",
      shopImage: "",
    },
  ]);

  function getStatusClass(status) {
    switch (status.toLowerCase()) {
      case "new":
        return "bg-[#DDDDDE] text-[#1E1A22]";
      case "pending":
        return "bg-[#FEF4E4] text-[#EAB308]";
      case "processing":
        return "bg-blue-500 text-white";
      case "shipping":
        return "bg-[#E1E7FC] text-[#3762EA]";
      case "completed":
        return "bg-[#E0F7EA] text-[#2DCB73]";
      case "cancelled":
        return "bg-red-500 text-white";
      default:
        return "bg-[#FFE9E9] text-[#FF6C6C]";
    }
  }

  const [isProductdropdownOpen, setIsProductDropdownOpen] = useState(false);
  const [isOrderDropdownOpen, setIsOrderDropdownOpen] = useState(false);

  const toggleOrderDropdown = () => {
    setIsOrderDropdownOpen(!isOrderDropdownOpen);
  };
  const toggleProductdropdown = () => {
    setIsProductDropdownOpen(!isProductdropdownOpen);
  };
  return (
    <>
      <div className="flex flex-col gap-3 sm:flex-row w-full mb-4">
        <div className="w-full sm:w-2/3 p-4 bg-[#FFFFFF] rounded-lg ">
          <h1 className="flex text-black font-semibold mb-4">Latest Orders</h1>

          <div className="relative flex align-center justify-end mb-2 -mt-2">
            <p className="  ml-1 flex  text-black font-semibold -mt-8">
              Sort By:
            </p>
            <p className="-mt-7 ml-1 text-sm text-[#CCCDD4]">Order Date </p>
            <button
              className="text-gray-400 focus:outline-none -mt-7 ml-1"
              onClick={toggleOrderDropdown}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chevron-down"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                />
              </svg>
            </button>
            {isOrderDropdownOpen && (
              <div className="absolute right-0 mt-0 w-40 bg-[#FFFFFF] rounded-lg  py-1  text-sm">
                <button className="block px-2 py-1 text-gray-800 hover:bg-[#F3F6F9] w-full text-left">
                  Order Date
                </button>
                <button className="block px-2 py-1 text-gray-800 hover:bg-[#F3F6F9] w-full text-left">
                  Order Id
                </button>
                <button className="block px-2 py-1 text-gray-800 hover:bg-[#F3F6F9] w-full text-left">
                  Amount
                </button>
                <button className="block px-2 py-1 text-gray-800 hover:bg-[#F3F6F9] w-full text-left">
                  Status
                </button>
              </div>
            )}
          </div>

          <div className="overflow-x-auto ">
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
                    className="bg-white text-sm dark:border-gray-700"
                  >
                    <td className="px-2 py-2 text-[#0F1114]">
                      {order.orderDate}
                    </td>
                    <td className="px-2 py-2 cursor-pointer text-[#3258D3]">
                      {order.orderId}
                    </td>
                    <td className="px-2 py-2">
                      {
                        <img
                          src="/src/assets/images/shopImage/shop-1.png"
                          className="h-10 w-10 rounded-full"
                        />
                      }
                    </td>
                    <td className="px-2 py-2 text-[#0F1114]">
                      {order.shopCustomer}
                    </td>
                    <td className="px-2 py-2 text-[#0F1114]">
                      {order.products}
                    </td>
                    <td className="px-2 py-2 text-[#0F1114] font-bold">
                      {order.amount}
                    </td>
                    <td className="px-2 py-2">
                      <span className={`badge ${getStatusClass(order.status)}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-4 py-2 text-[#0F1114]">{order.rating}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="w-full sm:w-1/3 p-4 bg-[#FFFFFF] rounded-lg shadow-md">
          <p className="text-black font-semibold mb-4 ">Popular Products</p>
          <div className="relative flex align-center justify-end mb-2 -mt-3">
            <p className="  ml-1 flex  text-black font-semibold -mt-9">
              Sort By:
            </p>
            <p className="-mt-8 ml-1 text-sm text-[#CCCDD4]">Today </p>
            <button
              className="text-gray-400 focus:outline-none -mt-10 ml-1"
              onClick={toggleProductdropdown}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chevron-down"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                />
              </svg>
            </button>
            {isProductdropdownOpen && (
              <div className="absolute right-0 mt-0 w-40 bg-[#FFFFFF] rounded-lg shadow-lg py-1  text-sm">
                <button className="block px-2 py-1 text-gray-800 hover:bg-[#F3F6F9] w-full text-left">
                  Today
                </button>
                <button className="block px-2 py-1 text-gray-800 hover:bg-[#F3F6F9] w-full text-left">
                  Yesterday
                </button>
                <button className="block px-2 py-1 text-gray-800 hover:bg-[#F3F6F9] w-full text-left">
                  Last 7 days
                </button>
                <button className="block px-2 py-1 text-gray-800 hover:bg-[#F3F6F9] w-full text-left">
                  Last 30 days
                </button>
                <button className="block px-2 py-1 text-gray-800 hover:bg-[#F3F6F9] w-full text-left">
                  This Month
                </button>
                <button className="block px-2 py-1 text-gray-800 hover:bg-[#F3F6F9] w-full text-left">
                  Last Month
                </button>
              </div>
            )}
          </div>
          <div className="max-h-[70vh]  overflow-y-auto scrollbar ">
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
