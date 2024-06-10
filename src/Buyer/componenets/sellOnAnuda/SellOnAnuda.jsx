import React from "react";
import "./sellOnAnuda.css";
export default function SellOnAnuda() {
  return (
    <>
      <div className="imgPosition relative">
        <div className="waveImg">
          <img
            src="src/assets/images/buyer/wave.png"
            alt=""
            className="absolute bottom-0 mx-0 opacity-20 "
          />
        </div>
        <div className="becomeSeller   mx-16 mt-16 relative">
          <div className="content  flex items-center ">
            <div className="description p-10 flex flex-col items-center mx-10 w-[50%]">
              <span className="font-bold text-white tracking-widest bg-[#0079af] px-20 py-1  rounded self-start mx-10 uppercase shadow-[0 0 30px rgba(0,0,0,.2)]">
                Limited Time Offer
              </span>
              <h1 className="text-[52px] mt-4 px-10 font-semibold pb-4 ">
                Become A Seller On Anuda Mart
              </h1>
              <p className="text-[18px] font-semibold pb-4 mx-10">
                Sell to crores of customers with 50% off on Selling Fee* on
                anudamart.com
              </p>
              <button className="self-start mx-10 bg-[#e40f15] text-white py-2 px-12 font-bold rounded-3xl mb-2">
                Start Selling
              </button>
              <p className="self-start ml-24 ">T&C Apply</p>
            </div>

            <div className="images self-start w-[50%]">
              <img
                src="src/assets/images/buyer/off.png"
                className="absolute w-[10%] top-[70px] right-[40%] z-10"
              />
              <img
                src="src/assets/images/buyer/seller.png"
                alt=""
                className="w-[70%] mt-20 relative"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="whyAnuda bg-[#facfd0] flex flex-col bg-gradient-to-b from-[#facfd0] to-[#ffffff]">
        <div className="cards py-10  mx-16 px-28">
          <h1 className="text-[42px] font-bold">Why Sell On Anuda Mart?</h1>

          <div className="grid grid-cols-3 gap-8 mt-6">
            <div className="bg-white p-4 rounded">
              <img
                src="src/assets/images/buyer/sellanuda.png"
                alt="sellanuda"
                className="w-16"
              />
              <h2 className="text-3xl my-4 font-semibold">
                Sell On Anuda Mart
              </h2>
              <p className="leading-8	text-[17px] mx-1">
                Join our family of 10 k+ businesses who sell on Anudamart.com.
                Sell your products on India's most visited shopping destination.
              </p>
            </div>
            <div className="bg-white p-4 rounded">
              <img
                src="src/assets/images/buyer/logistic.png"
                alt="logistic"
                className="w-16"
              />
              <h2 className="text-3xl my-4 font-semibold">
                Benefits Of Selling On Anuda Mart
              </h2>
              <p className="leading-8	text-[17px] mx-1">
                Put your products in front of over 300 million customers
                worldwide and deliver to 100% of India's serviceable pincodes.
              </p>
            </div>
            <div className="bg-white p-4 rounded">
              <img
                src="src/assets/images/buyer/payment.png"
                alt="payment"
                className="w-16"
              />
              <h2 className="text-3xl my-4 font-semibold">Fee And Payments</h2>
              <p className="leading-8	text-[17px] mx-1">
                Anuda Live ensures your payments are deposited directly in your
                bank account within 7-14 days. Check pricing and payment cycles
                here:
              </p>
            </div>
          </div>
        </div>

        <div className="learnAboutAnuda self-center py-4  flex flex-col justify-center items-center bg-[#f6abad] w-[60%] mb-3 rounded-2xl   ">
          {/* <div className="wrap bg-[#f6abad]"> */}
          <h1 className="text-3xl font-semibold">
            Learn About Anuda Mart Selling
          </h1>

          <img
            src="src/assets/images/buyer/thumbnail.png"
            alt=""
            className=" mt-6 px-10 pb-4"
          />

          <button className="bg-black text-white font-semibold p-2 px-4 rounded-3xl">Start Selling</button>
          {/* </div> */}
        </div>
      </div>
      {/* <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-[#ffffff] pointer-events-none"></div> */}

      <div className="flex justify-center flex-col items-center">
        <div className="quote shadow-[0px 0px 12px 0px rgba(0, 0, 0, 0.25)] w-3/4 py-10  text-center shadowElement mx-24 rounded-xl">
        <i className="fa-solid fa-quote-left text-[52px] mb-3 text-[#e40f15] "></i>
          <h1 className="text-2xl pb-4">
            Since Last Year, My Business On Anuda Mart Has Grown More Than 5
            Times
          </h1>
          <h1 className="text-xl">Indu Arora</h1>
          <p>Tied Ribbons (Anuda Mart Seller)</p>
        </div>
        <h1 className="py-8 text-[42px] font-semibold">
          Sell On India's Most Visited Shopping Destination
        </h1>
      </div>

      <div className="companyDetailCards grid grid-cols-3 py-10  mx-16 px-28 gap-8">
        <div className="shadowElement p-5 rounded">
          <h3 className="text-xl font-semibold py-3">Crores Of Customers</h3>

          <p className="py-2 text-lg leading-8">
            Reach crores of customers on Amazon.in, India's most visited
            shopping destination.
          </p>
        </div>
        <div className="shadowElement p-5 rounded">
          <h3 className="text-xl font-semibold py-3">18,000 Crorepati Sellers</h3>

          <p className="py-2 text-lg leading-8">
          Out of these, 5,100 sellers became crorepati sellers in 2022. You could be next.
          </p>
        </div>
        <div className="shadowElement p-5 rounded">
          <h3 className="text-xl font-semibold py-3">Unbeatable Reach</h3>

          <p className="py-2 text-lg leading-8">
          Deliver to 100% of India's serviceable pincodes, through Easy Ship & Fulfillment by Amazon.
          </p>
        </div>


        <div className="shadowElement p-5 rounded">
          <h3 className="text-xl font-semibold py-3">Global Expansion</h3>

          <p className="py-2 text-lg leading-8">
          Take your business from India to global markets across 200+ countries and territories
          </p>
        </div>
        <div className="shadowElement p-5 rounded">
          <h3 className="text-xl font-semibold py-3">Tools For Growth</h3>

          <p className="py-2 text-lg leading-8">
          A wide variety of tools and solutions that can help increase your business growth</p>
        </div>
        <div className="shadowElement p-5 rounded">
          <h3 className="text-xl font-semibold py-3">Custom Selling Programs</h3>

          <p className="py-2 text-lg leading-8">
          Programs to support your unique business needs
          </p>
        </div>

        <div className="trust col-span-full">
        <h1 className="py-8 text-[42px] font-semibold">
            Trust
          </h1>
        </div>

        <div className="trustCards shadowElement p-5 rounded">
            <h3 className="text-xl font-semibold py-3">Trust Of 12 Lakh+ Sellers From 17K Pincodes</h3>

            <p className="py-2 text-lg leading-8">
            Read about the brilliant people who have become pioneers of online selling
            </p>
        </div>


        <div className="trustCards shadowElement p-5 rounded">
            <h3 className="text-xl font-semibold py-3">Transparent Pricing, No Hidden Charges</h3>

            <p className="py-2 text-lg leading-8">
            Amazon displays its fee structure publicly on all fee-related pages on its website
            </p>
        </div>


        <div className="trustCards shadowElement p-5 rounded">
            <h3 className="text-xl font-semibold py-3">Secure Payments, Regularly</h3>

            <p className="py-2 text-lg leading-8">
            Funds deposited in your bank account every 7 days, including for Pay on Delivery orders.
            </p>
        </div>




      </div>


        <div className="startSelling relative overflow-hidden" >
            <div className="waveImg ">
                <img src="src/assets/images/buyer/wave-2.png" alt="wave" className=" absolute inset-0 object-contain "/>
            </div>

            <div className="content grid grid-cols-2 mx-32 relative">
                <div className="flex flex-col justify-center items-start">

                    <h1 className="text-[52px] text-[#e40f15] font-bold pb-3">Start Selling Today</h1>
                    <p className="text-2xl pb-4">Put your products in front of more than 300 million customers worldwide</p>
                    <button className="bg-[#e40f15] py-2.5 px-5 rounded-3xl text-white font-bold hover:bg-black">Start Selling</button>
                </div>
                <div className="">
                    <img src="src/assets/images/buyer/plane.png" alt="plane" className=""/>
                </div>
            </div>        
        </div>

        






    </>
  );
}
