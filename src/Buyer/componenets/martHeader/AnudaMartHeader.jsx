import React, { useState } from "react";
import "./AnudaMartHeader.css";
import { Link } from "react-router-dom";
import { useDispatch, } from "react-redux";
import { toggleNavbar } from "../../slices/NavBarSlice";

export default function AnudaMartHeader() {
  const signInDropdownItems = [
    "Your Account",
    "Your Orders",
    "Your Wish List",
    "Your Prime Membership",
    "Your Saved Items",
    "Membership & Subscriptions",
    "Manage Your Content and Devices",
    "Your Seller Account",
    "Your Free Amazon Bussiness Account",
  ];

  const helpDropdownItems = [
    "For Buyers",
    "For Sellers",
    "Open a Case",
    "Report or Abouse",
  ];

  const [itemsInCart, setItemsInCart] = useState(0);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
  };

  // open Navbar getting variable from store
  const dispatch = useDispatch();

  return (
    <>
      <div className="actionBar grid grid-cols-12  bg-white">
        <Link to={"/"}>
          <div className="col-span-1">
            <img
              src="src/assets/images/big-logo.png"
              alt="anuda logo"
              className="h-10 mx-3 mt-2"
            />
          </div>
        </Link>
        <div className="col-span-2 flex justify-center items-center">
          <i className="fa-solid fa-location-dot text-[#e40f15] text-lg mx-2"></i>
          <div className="flex items-start flex-col mt-2">
            <span className="text-sm">Hello</span>
            <b>Your Address</b>
          </div>
        </div>

        <div className="col-span-5 flex  items-center">
          <div className="searchbar  bg-[#f5f5f5] rounded-3xl w-full h-10 flex justify-between">
            <select
              name=""
              id=""
              className="bg-black text-white h-full rounded-s-3xl mr-1 text-center text-sm self-start px-2"
            >
              <option value="game">All</option>
              <option value="game">game</option>
              <option value="game">game</option>
            </select>

            <input
              type="text"
              name=""
              id=""
              placeholder="Search"
              className="self-center w-full mr-1 bg-transparent border-0 focus:border-none focus:outline-none"
            />

            <div className="searchIcons mr-4 flex items-center self-end pb-1">
              <input
                type="file"
                id="fileInput"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
              <label htmlFor="fileInput">
                <i className="fa-solid fa-camera mr-3 cursor-pointer"></i>
              </label>
              <i className="fa-solid fa-magnifying-glass bg-black text-white p-2 rounded-3xl cursor-pointer"></i>
            </div>
          </div>
        </div>

        <div className="col-span-1 flex justify-center items-center">
          <div className="relative inline-block text-left dropdown">
            <div className="relative dropdown-wrapper">
              <span className="text-sm font-bold ">Help</span>
              <i className="fa-solid fa-angle-down mt-1"></i>
              <div className="dropdownContent  elementShadow rounded-xl w-40 absolute  z-50 right-0 bg-white">
                <ul className="flex flex-col px-3 my-2 ">
                  {helpDropdownItems.map((item) => {
                    return (
                      <li
                        key={item}
                        className="py-2 ml-1 text-sm hover:text-red-500 cursor-pointer hover:underline"
                      >
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-2 flex justify-center items-center">
          <i className="fa-solid fa-user bg-[#e40f15] p-2 rounded-3xl text-white mr-2.5"></i>
          <div className="relative dropdown-wrapper">
            <div className="dropdown">
              <p className="text-sm">Sign In</p>
              <p className="font-bold">Account & Lists</p>
            </div>
            <div className="dropdownContent absolute right-0">
              <div className="dropdownMenu  px-4   elementShadow bg-white rounded-md w-72 right-0 flex flex-col">
                <Link to={'/sign-in'}>
                <button className="bg-red-500 mt-3 rounded-3xl p-1 text-white text-sm font-semibold w-full hover:bg-black">
                  Sign In
                </button>
                </Link>
                <small className=" text-center mt-1 tracking-wide pb-2.5">
                  New Customer? <span className="text-red-500">Start Here</span>
                </small>
                <hr />
                <ul>
                  {signInDropdownItems.map((item) => {
                    return (
                      <li
                        key={item}
                        className="py-2 ml-1 text-sm hover:text-red-500 cursor-pointer hover:underline"
                      >
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 flex justify-end items-center mr-10">
          <i className="fa-solid fa-cart-shopping text-2xl text-[#e40f15] cursor-pointer position-relative">
            <span className="position-absolute  start-100 translate-middle badge rounded-pill bg-danger text-xs bg-black ">
              {itemsInCart}
            </span>
          </i>
        </div>
      </div>

      <div className="optionBar h-10 bg-[#e40f15] flex justify-between items-center py-1">
        <div className="options w-[80%]">
          <ul className="text-white flex justify-evenly">
            <li
              className="cursor-pointer"
              onClick={() => dispatch(toggleNavbar())}
            >
              <i className="fa-solid fa-bars-staggered"></i>
            </li>
            <Link to={"/sell-on-anuda"}>
              <li className="cursor-pointer">Sell</li>
            </Link>
            <li className="cursor-pointer">Best Sellers</li>
            <li className="cursor-pointer">New Releases</li>
            <li className="cursor-pointer">Bricks</li>
            <li className="cursor-pointer">Cement</li>
            <li className="cursor-pointer">Stone</li>
            <li className="cursor-pointer">Steel & Iron</li>
            <li className="cursor-pointer">Bajri</li>
            <li className="cursor-pointer">Electronics</li>
            <li>Flooring</li>
          </ul>
        </div>

        <div className="headerImage">
          <img src="src/assets/images/prime.png" alt="" />
        </div>
      </div>
    </>
  );
}
