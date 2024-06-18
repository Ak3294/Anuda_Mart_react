import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full">
      <footer className="bg-white text-gray-500 p-2">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left md:mb-0">
            <p>&copy; {currentYear} Anuda Mart</p>
          </div>
          <div className="text-center md:text-right">
            <p>Design & Develop by Anuda Mart</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
