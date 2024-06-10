import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleNavbar } from "../../slices/NavBarSlice";

export default function MobileFooter() {

    const dispatch = useDispatch();
    
    

  return (
    <>
      <footer className='w-full h-12 bg-[#e40f15] flex items-center fixed bottom-0'>
        <div className="content w-full flex justify-between mx-3 text-white sm:text-sm text-xs">
            <div className="item flex flex-col items-center justify-center">
            <i className="fa-solid fa-house "></i>
            <p>Home</p>
            </div>

            <div className="item flex  flex-col items-center justify-center">
            <i className="fa-brands fa-product-hunt"></i>
            <p>Best Sellers</p>
            </div>

            <div className="item flex flex-col items-center justify-center">
            <i className="fa-solid fa-user"></i>
            <p>Sign In</p>
            </div>

            <div className="item flex flex-col items-center justify-center" onClick={() =>  dispatch(toggleNavbar())}>
            <i className="fa-solid fa-bars"></i>
            <p>Menu</p>
            </div>
            
        </div>
      </footer>
    </>
  )
}
