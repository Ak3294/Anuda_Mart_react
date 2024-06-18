import React from "react";
import "../../index.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" bg-white text-center lg:text-left p-3">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between text-sm text-[#98A6AD]">
        <div className="">
          <p>&copy; {currentYear} Anuda Mart</p>
        </div>
        <div>
          <p>Design & Develop by Anuda Mart</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
