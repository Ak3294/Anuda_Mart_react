import React from "react";
import bigLogo from "../../assets/images/big-logo.png";

import {
  CiAirportSign1,
  CiTimer,
  CiBank,
  CiUser,
  CiViewList,
  CiCoinInsert,
  CiLogout,
} from "react-icons/ci";
import { PiUsersLight } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import './AdminSideBar.css'
import { useSelector } from "react-redux";



export default function AdminSideBar() {
  let sidebarItems = [
    {
      name: "Get Started",
      icon: <CiAirportSign1 />,
      link: "/sign-in",
    },
    {
      name: "Dashboard",
      icon: <CiTimer />,
      link: "/admin/dashboard",
    },
    {
      name: "Products",
      icon: <CiBank />,
      link: "/sell-on-anuda",
    },
    {
      name: "Profile",
      icon: <CiUser />,
      link: "/admin/profile",
    },
    {
      name: "Customers",
      icon: <PiUsersLight />,
      link: "/admin/customers",
    },
    {
      name: "Invoices",
      icon: <CiViewList />,
      link: "/sign-in",
    },
    {
      name: "Transactions",
      icon: <CiCoinInsert />,
      link: "/admin/transactions",
    },
    {
      name: "Logout",
      icon: <CiLogout />,
      link: "/sign-out",
    },
  ];

  let isSidenavOpen = useSelector((state) => state.adminToggleSidenav.showAdminSidenav)
  console.log(isSidenavOpen);
  return (
    <>
      <aside className={`bg-white w-64  h-screen border-r-2 border-[#DDE1EF] sideNav  ${
          isSidenavOpen ? "show" : ""
        }`}>
        <div className="logo flex justify-center items-center h-20">
      <img src={bigLogo} alt="logo" className="h-10"/>
    </div>

        <div className="navlinks pt-2 mx-3">
          <ul className="flex justify-center items-center gap-2 flex-col">
          {sidebarItems.map((item , index) => (
            
          <NavLink
          key={index}
          to={item.link}
          className={({ isActive, isPending }) =>
            `w-full  ${isPending ? '' : isActive ? 'bg-[#E40F15] text-white' : 'hover:text-[#E40F15]'} `
          }
          >
            <li className="grid grid-cols-12 w-full p-2.5 text-sm">
              <div className="col-span-2 flex justify-end items-center text-lg">
                <span className="">{item.icon}</span>
              </div>
              <div className="col-span-10 flex justify-start px-3">
                <p>{item.name}</p>
              </div>
            </li>
          </NavLink>
        ))}
          </ul>
        </div>
      </aside>
    </>
  );
}
