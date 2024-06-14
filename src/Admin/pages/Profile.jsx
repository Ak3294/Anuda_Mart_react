import React, { useState } from "react";
import MultiStepForm from "./MultiStepForm";
import "../../index.css";

const Profile = () => {
  // Slider js
  const [sliderValue, setSliderValue] = useState(30); // Initial slider value

  const handleChange = (e) => {
    setSliderValue(e.target.value);
  };

  return (
    <>
      <div className="p-1">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-base font-semibold">PROFILE</h3>
          </div>
          <div className="flex space-x-2 text-">
            <div className="hover:underline">
              <a href="/admin/dashboard">Dashboard</a>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  d="M8 5l8 7-8 7"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                />
              </svg>
            </div>
            <div className="hover:underline">
              <a href="">Profile</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row w-full mb-4">
          <div className="bg-white rounded-lg shadow-md w-full sm:w-1/4 p-2 ">
            <div className="relative p-0">
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <button
                className="absolute top-2 right-2 bg-[#EEF0F7] hover:bg-[#ADB5BD] rounded-sm p-1 text-gray-600"
                onClick={() => document.getElementById("fileInput").click()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  fill="currentColor"
                  className="bi bi-image"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                  <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1z" />
                </svg>
                <p className="text-xs ml-4 -mt-3.5">Edit Cover Image</p>
              </button>

              <input
                id="fileInput"
                type="file"
                className="hidden"
                onChange={(e) => {
                  // Handle file selection if needed
                }}
              />
            </div>
            <div className="flex justify-center mt-4 relative">
              <img
                src="/src/assets/images/products/img-1.png"
                alt=""
                className=" w-24 h-24 rounded-full -mt-20"
              />
              <div className="relative">
                <div
                  className="absolute w-7 h-7 rounded-full  bg-[#EEF0F7] -ml-7 -mt-3 flex items-center justify-center cursor-pointer"
                  onClick={() => document.getElementById("fileInput").click()}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-camera"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4z" />
                    <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" />
                  </svg>
                </div>

                {/* Hidden File Input */}
                <input
                  id="fileInput"
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={(e) => {
                    // Handle the file selection
                    const file = e.target.files[0];
                    if (file) {
                      // Do something with the selected file
                      console.log("Selected file:", file);
                    }
                  }}
                />
              </div>
            </div>

            <div className="text-center mt-3">
              <h2 className="text-base font-semibold">Richard Marshall</h2>
              <div className="blueTick ml-[60%] -mt-[100px] inline-block ">
                <svg
                  className=" -mt-10 -ml-2 text-blue-400 "
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708" />
                </svg>
              </div>

              <div className="flex items-center space-x-1 align-center justify-center mb-8 -mt-4 ">
                <span className="text-sm text-gray-500">Status:-</span>
                <span className="text-sm font-sm rounded p-0.5 bg-green-500 text-white">
                  Active
                </span>
              </div>
            </div>

            <hr />

            <div className="mt-4 mb-4">
              <h3 className="text-base font-medium ml-2">
                Complete Your Profile
              </h3>
              <div className="relative w-[80%] ml-4 flex mt-3 h-4 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="bg-blue-500  flex justify-center items-center text-white font-semibold"
                  style={{ width: "40%" }}
                >
                  40%
                </div>
              </div>
            </div>
            <hr />

            <div className="mt-6 items-center justify-between mb-2">
              <div className="flex justify-between items-center mb-6 w-full">
                <h2 className=" ml-2 text-medium font-medium text-gray-800">
                  Portfolio
                </h2>
                <button className="w-7 h-7 mr-1 rounded bg-gray-300 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-5 h-5 bi bi-share"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1.603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
                  </svg>
                </button>
              </div>

              <div className="max-w-sm  bg-white rounded-lg p-1">
                <div className="flex items-center mb-4">
                  <button className=" flex items-center bg-gray-200 hover:bg-gray-300 text-red-500 font-bold py-1 px-2 rounded">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#E1306C"
                      className="w-6 h-6  bi bi-instagram"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C5.41 0 5.127.014 4.362.068c-.76.053-1.288.24-1.743.511a3.477 3.477 0 0 0-1.272 1.272c-.271.455-.458.983-.511 1.743C.014 5.127 0 5.41 0 8s.014 2.873.068 3.638c.053.76.24 1.288.511 1.743a3.477 3.477 0 0 0 1.272 1.272c.455.271.983.458 1.743.511C5.127 15.986 5.41 16 8 16s2.873-.014 3.638-.068c.76-.053 1.288-.24 1.743-.511a3.477 3.477 0 0 0 1.272-1.272c.271-.455.458-.983.511-1.743.054-.765.068-1.048.068-3.638s-.014-2.873-.068-3.638c-.053-.76-.24-1.288-.511-1.743a3.477 3.477 0 0 0-1.272-1.272c-.455-.271-.983-.458-1.743-.511C10.873.014 10.59 0 8 0zm0 1.478c2.641 0 2.952.01 3.671.054.707.043 1.087.203 1.34.337.336.174.576.383.824.824.134.253.294.633.337 1.34.043.72.054 1.031.054 3.671s-.01 2.952-.054 3.671c-.043.707-.203 1.087-.337 1.34-.174.336-.383.576-.824.824-.253.134-.633.294-1.34.337-.72.043-1.031.054-3.671.054s-2.952-.01-3.671-.054c-.707-.043-1.087-.203-1.34-.337a2.09 2.09 0 0 1-.824-.824c-.134-.253-.294-.633-.337-1.34-.043-.72-.054-1.031-.054-3.671s.01-2.952.054-3.671c.043-.707.203-1.087.337-1.34a2.09 2.09 0 0 1 .824-.824c.253-.134.633-.294 1.34-.337.72-.043 1.031-.054 3.671-.054zM8 3.889a4.111 4.111 0 1 0 0 8.222A4.111 4.111 0 0 0 8 3.889zm0 1.478a2.633 2.633 0 1 1 0 5.266A2.633 2.633 0 0 1 8 5.367zm4.877-.912a.963.963 0 1 0 0 1.926.963.963 0 0 0 0-1.926z" />
                    </svg>
                  </button>
                  <span className="ml-6 w-full border p-2">
                    @richard_marshall
                  </span>
                </div>
                <div className="flex items-center mb-4">
                  <button className="flex items-center bg-gray-200 hover:bg-gray-300 text-red-500 font-bold py-1 px-2 rounded">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#25D366"
                      className="w-6 h-6 bi bi-whatsapp"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                    </svg>
                  </button>
                  <span className="ml-6 w-full border p-2">
                    {" "}
                    +91 1245126510{" "}
                  </span>
                </div>

                <div className="flex items-center mb-4">
                  <button className="flex items-center bg-gray-200 hover:bg-gray-300 text-red-500 font-bold py-1 px-2 rounded">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#4267B2"
                      className=" w-6 h-6 bi bi-facebook"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                    </svg>
                  </button>
                  <span className="ml-6 w-full border p-2">
                    {" "}
                    www.streex.com
                  </span>
                </div>
                <div className="flex items-center mb-4">
                  <button className="flex items-center bg-gray-200 hover:bg-gray-300 text-red-500 font-bold py-1 px-2 rounded">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#0077B5"
                      className="w-6 h-6 bi bi-linkedin"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                    </svg>
                  </button>
                  <span className="ml-6 w-full border p-2">
                    Richard Marshall
                  </span>
                </div>
                <div className="flex items-center mb-4">
                  <button className="flex items-center bg-gray-200 hover:bg-gray-300 text-red-500 font-bold py-1 px-2 rounded">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#1DA1F2"
                      className="w-6 h-6 bi bi-twitter"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
                    </svg>
                  </button>
                  <span className="ml-6 w-full border p-2">
                    @richardmarshall
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Multi Step From */}
          <div className="w-full sm:w-3/4 p-2 ">
            <MultiStepForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
