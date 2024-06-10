import React from "react";

export default function AnudaMartFooter() {
  return (
    <>
      <div className="footer">
        <div className="footer-content bg-neutral-100 grid grid-cols-12 gap-4 py-5 px-3">
          <div className="col-span-3">
            <div className="anudaAddress">
              <img
                src="src/assets/images/big-logo.png"
                alt="anuda logo"
                className="h-10 mx-3"
              />

              <div className="address flex items-center gap-3 mt-5 ">
                <i className="fas fa-map-marker-alt bg-[#000000] hover:bg-[#e40f15]  text-white   rounded-3xl p-2.5 transition ease-in-out delay-100"></i>

                <p className="">
                  <b>
                    F 37-38, Govindam Tower, Kardhani,Govindpura Kalwar Road,
                    Jaipur, Rajasthan India - 302012
                  </b>
                </p>
              </div>

              <div className="contactMobile flex items-center gap-3 mt-5 ">
                <i className="fa-solid fa-phone-volume bg-[#000000] hover:bg-[#e40f15]  text-white   rounded-3xl p-2.5 transition ease-in-out delay-100"></i>
                <p>
                  <b>+91 9001602012</b>
                </p>
              </div>

              <div className="contactMail flex items-center gap-3 mt-5 ">
                <i className="fa-solid fa-envelope bg-[#000000] hover:bg-[#e40f15]  text-white   rounded-3xl p-2.5 transition ease-in-out delay-100"></i>
                <p>
                  <b>anudalive@gmail.com</b>
                </p>
              </div>
            </div>

            <div className="socialAccount mt-10">
              <hr />

              <div className="socialLinks flex mt-3">
                <i className="fa-brands fa-facebook-f bg-[#000000] hover:bg-[#e40f15]  text-white   rounded-3xl p-2 mx-2 transition ease-in-out delay-100"></i>
                <i className="fa-brands fa-twitter bg-[#000000] hover:bg-[#e40f15]  text-white   rounded-3xl p-2 mx-2 transition ease-in-out delay-100"></i>
                <i className="fa-brands fa-linkedin bg-[#000000] hover:bg-[#e40f15]  text-white   rounded-3xl p-2 mx-2 transition ease-in-out delay-100"></i>
                <i className="fa-brands fa-instagram bg-[#000000] hover:bg-[#e40f15]  text-white   rounded-3xl p-2 mx-2 transition ease-in-out delay-100"></i>
              </div>
            </div>
          </div>
          <div className="col-span-2 px-3">
            <strong>
              <h4 className="text-2xl mb-10">Find it easy</h4>
            </strong>

            <div className="items">
              <p className="text-lg mb-2">Bricks</p>
              <p className="text-lg mb-2">Cement</p>
              <p className="text-lg mb-2">Stone</p>
              <p className="text-lg mb-2">Steel & Iron</p>
              <p className="text-lg mb-2">Bajri</p>
              <p className="text-lg mb-2">Rodi</p>
              <p className="text-lg mb-2">Plumbing and Sanitary</p>
              <p className="text-lg mb-2">Electronics</p>
              <p className="text-lg mb-2">Flooring</p>
              <p className="text-lg mb-2">Railing</p>
            </div>
          </div>

          <div className="col-span-2">
            <strong>
              <h4 className="text-2xl mb-10">Information</h4>
            </strong>

            <div className="items">
              <p className="text-lg mb-2">Find a Store</p>
              <p className="text-lg mb-2">About Us</p>
              <p className="text-lg mb-2">Contact Us</p>
              <p className="text-lg mb-2">Delivery information</p>
              <p className="text-lg mb-2">Privacy Policy</p>
              <p className="text-lg mb-2">Terms & Conditions</p>
              <p className="text-lg mb-2">Gift Cards</p>
            </div>
          </div>

          <div className="col-span-3">
            <strong>
              <h4 className="text-2xl mb-10">Make Money With Us</h4>
            </strong>

            <div className="items">
              <p className="text-lg mb-2">Sell on Anuda Mart</p>
              <p className="text-lg mb-2">Sell under Anuda mart Accelerator</p>
              <p className="text-lg mb-2">Protect and Build Your Brand</p>
              <p className="text-lg mb-2">Become an Affiliate</p>
              <p className="text-lg mb-2">Fulfilment by Anuda Mart</p>
              <p className="text-lg mb-2">Advertise Your Products</p>
              <p className="text-lg mb-2">Anuda Mart Pay on Merchants</p>
            </div>
          </div>

          <div className="col-span-2">
            <strong>
              <h4 className="text-2xl mb-10">Let Us Help You</h4>
            </strong>

            <div className="items">
              <p className="text-lg mb-2">My Account</p>
              <p className="text-lg mb-2">Order History</p>
              <p className="text-lg mb-2">Wish List</p>
              <p className="text-lg mb-2">Customer Service</p>
              <p className="text-lg mb-2">Returns / Exchange</p>
              <p className="text-lg mb-2">FAQs</p>
              <p className="text-lg mb-2">Product Support</p>
            </div>
          </div>
        </div>

        <div className="copyright h-16 bg-[#e40f15] text-white flex justify-center items-center">
          <p>
            Copyright © 2023, <b>Anuda Construction</b> All Rights Reserved.
          </p>
        </div>
      </div>
    </>
  );
}
