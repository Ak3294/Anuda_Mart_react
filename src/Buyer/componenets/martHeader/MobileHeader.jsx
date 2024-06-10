import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function MobileHeader() {
  let serviceData = [
    {
      img: "src/assets/images/buyer/bounderywall.png",
      label: "Boundary Wall",
    },
    {
      img: "src/assets/images/buyer/redbrick.png",
      label: "Bricks",
    },
    {
      img: "src/assets/images/buyer/flooring.png",
      label: "Flooring",
    },
    {
      img: "src/assets/images/buyer/cement.png",
      label: "Cement",
    },
    {
      img: "src/assets/images/buyer/window.png",
      label: "Window",
    },
  ];

  const handleFileChange = (e) => {
    const file = e.target.files[0];
  };

  const CustomRightArrow = ({ onClick }) => (
    <button onClick={onClick} className="custom-arrow custom-arrow-right">
      &gt;
    </button>
  );

  const CustomLeftArrow = ({ onClick }) => (
    <button onClick={onClick} className="custom-arrow custom-arrow-left">
      bb
    </button>
  );

  let responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      partialVisibilityGutter: 30,
    },
  };

  return (
    <>
      <header>
        <div className="head flex items-center justify-between py-1 mx-1">
          <div className="logo">
            <img
              src="src/assets/images/big-logo.png"
              alt=""
              className="h-8 ml-2 mt-2"
            />
          </div>
          <div className="wrappingDiv flex gap-2 items-center">
            <div className="signUp flex items-center">
              <i className="fa-solid fa-user text-sm bg-[#e40f15] p-1.5 rounded-full text-white mr-1"></i>
              <p className="text-md font-semibold">Sign In</p>
            </div>

            <div className="itemCart flex justify-end items-center mr-5 pt-1">
              <i className="fa-solid fa-cart-shopping text-2xl text-[#e40f15] cursor-pointer position-relative">
                <span className="position-absolute  start-100 translate-middle badge rounded-pill bg-danger text-xs bg-black ">
                  0
                </span>
              </i>
            </div>
          </div>
        </div>

        <div className="col-span-5 flex  items-center mx-2 pt-1">
          <div className="searchbar  bg-[#f5f5f5] rounded-3xl w-full h-10 flex justify-between ">
            <input
              type="text"
              name=""
              id=""
              placeholder="Search"
              className="self-center w-full mr-1 bg-transparent border-0 focus:border-none focus:outline-none searchbox mx-2"
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

        <div className="navLinks text-sm flex gap-3 tracking-wider items-end pt-2 mx-2.5 font-semibold">
          <p className="flex flex-col">
            <small>Shob By</small>
            Category
          </p>

          <p>Whishlist</p>

          <p>Deals</p>

          <p>Sell</p>
        </div>

        <div className="locationBar bg-[#e40f15] py-2 text-white text-[12px] flex items-center px-2 gap-2 mt-1">
          <i className="fa-solid fa-location-dot"></i>
          <div>
            <span className="tracking-wider">Deliever to Jaipur 302017</span>

            <i className="fa-solid fa-angle-down"></i>
          </div>
        </div>

        <div className="servicesCarousel mx-1">
          <Carousel
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            dotListclassName=""
            focusOnSelect={false}
            infinite
            itemclassName=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            responsive={responsive}
            shouldResetAutoplay
            showDots={false}
            sliderclassName=""
            slidesToSlide={1}
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
          >
            {serviceData.map((i) => {
              return (
                <div className="flex flex-col items-center py-4 justify-around" key={i.label}>
                  <img
                    src={i.img}
                    alt={i.label}
                    className="h-16 w-16 rounded-full object-cover"
                  />
                  <p className="mt-2 font-normal text-[15px] tracking-wider text-center">
                    {i.label}
                  </p>
                </div>
              );
            })}
          </Carousel>
        </div>
      </header>
    </>
  );
}
