import React from "react";
import { Outlet } from "react-router-dom";
import AdminSideBar from "./components/AdminSideBar";
import AdminNavbar from "./components/AdminNavbar";
import { useDispatch, useSelector } from "react-redux";
import "../../src/index.css";
import Footer from "./components/Footer";
import InvoicesList from "./pages/InvoiceViewList";

export default function AdminLayout() {
  const isSidenavOpen = useSelector(
    (state) => state.adminToggleSidenav.showAdminSidenav
  );
  const dispatch = useDispatch();
  //   return (
  //     <>
  //       <div className="bg-[#F7F7F7] flex">
  //         <AdminSideBar />
  //         <div className="flex flex-col">
  //           <AdminNavbar />

  //           <main>
  //             <Outlet />
  //           </main>
  //         </div>
  //       </div>
  //     </>
  //   );

  return (
    // <div className='grid grid-cols-12 h-screen bg-[#F7F7F7]'>
    //   <AdminSideBar/> {/* Sidebar with a fixed width */}
    //   <div className='flex flex-col flex-1 '>
    //     <AdminNavbar className='h-16' /> {/* Navbar with a fixed height */}
    //     <main className='flex-1 overflow-y-auto p-4'>
    //       <Outlet />
    //     </main>
    //   </div>
    // </div>

    // <div className="adminLayout grid grid-cols-12">
    //     <div className="sidenav col-span-2">
    //       <AdminSideBar/>
    //     </div>
    //     <div className="content col-span-10">
    //       <div className="navbar">
    //         <AdminNavbar/>
    //       </div>
    //     </div>
    // </div>

    // <div className="adminLayout grid h-screen">
    //   <div className={`sidenav bg-white ${isSidenavOpen ? 'w-64' : 'w-0'} transition-all duration-300 ease-in-out`}>
    //     <AdminSideBar />
    //   </div>
    //   <div className={`content flex-1 transition-all duration-300 ease-in-out ${isSidenavOpen ? 'ml-64' : 'ml-0'}`}>
    //     <div className="navbar">
    //       <AdminNavbar />

    //     </div>
    //     <main className="flex-1 overflow-y-auto p-4">
    //       <Outlet />
    //     </main>
    //   </div>
    // </div>

    <div className="flex h-screen bg-[#F7F7F7]">
      <div
        className={`sidenav  h-full ${
          isSidenavOpen ? "w-64" : "w-0"
        } transition-all duration-300 ease-in-out`}
      >
        <AdminSideBar />
      </div>
      <div
        className={
          "flex flex-col flex-1 transition-all duration-300 ease-in-out"
        }
      >
        <header className="h-16 bg-white w-full">
          <AdminNavbar />
        </header>
        
        <main className="flex-1  p-4 bg-[#F7F7F7]">
          <Outlet />
        </main>
        <footer>
          <Footer/>
          
        </footer>
      </div>
    </div>

    //     <div className="flex h-screen bg-[#F7F7F7]">
    //   <aside className=" bg-white h-full">
    //     <AdminSideBar /> {/* Sidebar with a fixed width */}
    //   </aside>
    //   <div className="flex flex-col flex-1">
    //     <header className="h-16 bg-white">
    //       <AdminNavbar className="h-full" /> {/* Navbar with a fixed height */}
    //     </header>
    //     <main className="flex-1 overflow-y-auto p-4">
    //       <Outlet />
    //     </main>
    //   </div>
    // </div>
  );
}
