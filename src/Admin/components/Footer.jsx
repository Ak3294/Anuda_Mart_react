import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className=" w-full">
      <footer className="bg-white text-gray-500 p-2">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex justify-between">
              <div>{currentYear} &copy; Anuda Mart</div>
              <div className="mr-auto mx-20">Design & Develop Anuda Mart</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
