import React from "react";



export default function SingleCarouselContent({ color, circleClr }) {
  return (
    <>
      <div
        className={`slide h-[300px] ${color} relative mx-4 rounded-[10px] flex flex-col justify-end  sm:flex-row `}
      >
        <div className="sm:ml-20 lg:ml-40 sm:pt-16 sm:items-start flex flex-col  items-center mb-1 sm:w-1/2 text-center sm:text-start">
          <h1 className="text-xl sm:text-start lg:text-2xl font-bold mb-1">
            Buy & Sell Construction Materials At{" "}
            <span className="text-[#e40f15] ">Best Price</span>
          </h1>
          <p className="lg:text-xl sm:text-start lg:text-md font-extralight text-md">
            Join To Discover New Trending Products
          </p>

          <button className="bg-[#e40f15]  rounded-3xl p-2 w-32 text-white font-bold mt-3">
            Join Now
          </button>
        </div>
        <div className="sm:w-1/2 flex ">
          <div
            className={`circle lg:h-[280px] lg:w-[280px] h-[100px] w-[100px] md:h-[200px] md:w-[200px] absolute ${circleClr} rounded-full sm:right-[10%]  right-[25%] top-3`}
          >
            <img
              src="src/assets/images/buyer/slider-img-1.png"
              alt=""
              className="h-full object-contain "
            />
          </div>
        </div>
      </div>
    </>
  );
}
