import React from "react";

function UserProfile() {
  return (
    <div className="w-full">
      <div className="flex justify-between mb-4">
        <img
          src="placeholder.png"
          alt="User Profile Picture"
          className="w-12 h-12 rounded-full"
        />
        <div className="ml-4">
          <h2 className="text-lg font-bold">Verona Mosciski</h2>
          <p className="text-gray-600">@mosciski</p>
        </div>
      </div>
      <div className="flex justify-end mb-4 space-x-2">
        <button className="flex items-center bg-blue-500 ml-auto hover:bg-blue-700 text-white font-bold text-sm py-1 px-4 rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="mr-1"
            viewBox="0 0 16 16"
          >
            <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-9 8c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4" />
            <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m-.646-4.854.646.647.646-.647a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 0 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 .708-.708" />
          </svg>
          Unfollow
        </button>
        <button className="flex items-center bg-gray-200 hover:bg-gray-300 text-red-500 font-bold py-1 px-2 rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="mr-1"
            viewBox="0 0 16 16"
          >
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
          </svg>
        </button>
      </div>

      <div className="divide-y divide-gray-200">
        <div className="divide-y divide-gray-200">
          <div className="flex justify-between items-center py-2">
            <p className="text-gray-600">Social Media:</p>
            <ul className="flex gap-1">
              <button className="flex items-center bg-gray-200 hover:bg-gray-300 text-red-500 font-bold py-1 px-2 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#25D366"
                  className="bi bi-whatsapp"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                </svg>
              </button>
              <button className="flex items-center bg-gray-200 hover:bg-gray-300 text-red-500 font-bold py-1 px-2 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#4267B2"
                  className="bi bi-facebook"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                </svg>
              </button>
              <button className="flex items-center bg-gray-200 hover:bg-gray-300 text-red-500 font-bold py-1 px-2 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#0077B5"
                  className="bi bi-linkedin"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>
              </button>
              <button className="flex items-center bg-gray-200 hover:bg-gray-300 text-red-500 font-bold py-1 px-2 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#1DA1F2"
                  className="bi bi-twitter"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
                </svg>
              </button>
              <button className="flex items-center bg-gray-200 hover:bg-gray-300 text-red-500 font-bold py-1 px-2 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#E1306C"
                  className="bi bi-instagram"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.41 0 5.127.014 4.362.068c-.76.053-1.288.24-1.743.511a3.477 3.477 0 0 0-1.272 1.272c-.271.455-.458.983-.511 1.743C.014 5.127 0 5.41 0 8s.014 2.873.068 3.638c.053.76.24 1.288.511 1.743a3.477 3.477 0 0 0 1.272 1.272c.455.271.983.458 1.743.511C5.127 15.986 5.41 16 8 16s2.873-.014 3.638-.068c.76-.053 1.288-.24 1.743-.511a3.477 3.477 0 0 0 1.272-1.272c.271-.455.458-.983.511-1.743.054-.765.068-1.048.068-3.638s-.014-2.873-.068-3.638c-.053-.76-.24-1.288-.511-1.743a3.477 3.477 0 0 0-1.272-1.272c-.455-.271-.983-.458-1.743-.511C10.873.014 10.59 0 8 0zm0 1.478c2.641 0 2.952.01 3.671.054.707.043 1.087.203 1.34.337.336.174.576.383.824.824.134.253.294.633.337 1.34.043.72.054 1.031.054 3.671s-.01 2.952-.054 3.671c-.043.707-.203 1.087-.337 1.34-.174.336-.383.576-.824.824-.253.134-.633.294-1.34.337-.72.043-1.031.054-3.671.054s-2.952-.01-3.671-.054c-.707-.043-1.087-.203-1.34-.337a2.09 2.09 0 0 1-.824-.824c-.134-.253-.294-.633-.337-1.34-.043-.72-.054-1.031-.054-3.671s.01-2.952.054-3.671c.043-.707.203-1.087.337-1.34a2.09 2.09 0 0 1 .824-.824c.253-.134.633-.294 1.34-.337.72-.043 1.031-.054 3.671-.054zM8 3.889a4.111 4.111 0 1 0 0 8.222A4.111 4.111 0 0 0 8 3.889zm0 1.478a2.633 2.633 0 1 1 0 5.266A2.633 2.633 0 0 1 8 5.367zm4.877-.912a.963.963 0 1 0 0 1.926.963.963 0 0 0 0-1.926z" />
                </svg>
              </button>
            </ul>
          </div>
        </div>

        <div className="flex justify-between items-center py-2">
          <p className="text-gray-600">Email:</p>
          <p>vmosciski@steex.com</p>
        </div>

        <div className="flex justify-between items-center py-2">
          <p className="text-gray-600">Contact:</p>
          <p>+(253) 12345 67890</p>
        </div>

        <div className="flex justify-between items-center py-2">
          <p className="text-gray-600">Joining Date:</p>
          <p>20 Feb, 2023</p>
        </div>

        <div className="flex justify-between items-center py-2">
          <p className="text-gray-600 mr-2">Status:</p>
          <button className="bg-red-200 text-red-400 rounded-lg px-4 py-1">
            Block
          </button>
        </div>

        <div className="py-2">
          <p className="text-gray-600 font-semibold">Private Notes:</p>
          <textarea
            className="w-full mt-2 p-2 border border-gray-300 rounded"
            rows="3"
            placeholder="Add notes here..."
          />
        </div>

        <div className="py-4">
          <p className="text-black font-semibold mb-3">Order History:</p>
          <div className="flex justify-between mb-3">
            <img
              src="placeholder.png"
              alt="Order Item"
              className="w-12 h-12 rounded"
            />
            <div className="ml-4 flex-grow">
              <h3 className="text-sm font-bold">Craft Women Black Sling Bag</h3>
              <p className="text-gray-600">☆ 487 🛒 936</p>
            </div>
            <div className="flex items-center">
              <p className="text-blue-600">$15.99</p>
              <button className="ml-2 bg-black hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded">
                <span role="img" aria-label="arrow">
                  →
                </span>
              </button>
            </div>
          </div>

          <div className="flex justify-between mb-3">
            <img
              src="placeholder.png"
              alt="Order Item"
              className="w-12 h-12 rounded"
            />
            <div className="ml-4 flex-grow">
              <h3 className="text-sm font-bold">Craft Women Black Sling Bag</h3>
              <p className="text-gray-600">☆ 487 🛒 936</p>
            </div>
            <div className="flex items-center">
              <p className="text-blue-600">$15.99</p>
              <button className="ml-2 bg-black hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded">
                <span role="img" aria-label="arrow">
                  →
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
