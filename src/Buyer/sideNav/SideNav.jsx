import React, { useEffect } from "react";
import { navItems } from "./NavItems";
import "./sideNav.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleNavbar } from "../slices/NavBarSlice";
import { Link } from "react-router-dom";

export default function SideNav() {
  const toggleNav = useSelector((state) => state.showNav);
  const dispatch = useDispatch();

  useEffect(() => {
    if (toggleNav) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }
  }, [toggleNav]);


  return (
    <>
      <div className={`overlay ${toggleNav ? "show" : ""}`}></div>

      <nav
        className={`sideNav h-screen w-72 bg-[#ffffff] overflow-auto fixed z-50 top-0  ${
          toggleNav ? "show" : ""
        }`}
      >
        <div className="greeting flex bg-[#e40f15] text-white justify-around items-center py-2 mt text-[18px]">
          <div className="flex items-center mx-3 self-center">
            <i className="fa-solid fa-user text-sm bg-white p-1 text-[#e40f15] rounded-full"></i>
            <p className="pl-2 text-sm tracking-wider">Hello, Sign In</p>
          </div>
          <i
            className="fa-solid fa-x  text-[15px]  cursor-pointer hover:text-black"
            onClick={() => dispatch(toggleNavbar())}
          ></i>
        </div>
        <ul>
          {navItems.map((item, index) => {
            return (
              <li key={index} className="">
                <span className="title text-xl font-semibold py-3 block mx-4">
                  {item.title}
                </span>

                {/* 2nd loop for getting the subitems and links for the subitems */}
                <ul>
                  {item.items.map((subItems) => {
                    return (
                        <div key={subItems.name}>
                        <Link to={subItems.link}>
                      <li
                        
                        className="text-[14px] font-normal py-2.5 mx-4 hover:text-[#e40f15] cursor-pointer"
                      >
                        {subItems.name}
                        
                      </li>
                      </Link>
                      </div>
                    );
                  })}
                </ul>
                <hr />
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
