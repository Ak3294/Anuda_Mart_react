import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" text-center lg:text-left p-3 ">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between text-sm text-[#98A6AD]">
        <div>
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
