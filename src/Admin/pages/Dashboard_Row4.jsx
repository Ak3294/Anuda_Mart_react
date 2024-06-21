import { useState, React } from "react";
import "../../index.css";

function ProgressBar({ progress, color }) {
  // Calculate width percentage for progress bar
  const progressBarStyle = {
    width: `${progress}%`,
  };

  // Generate class for progress bar based on color prop
  const progressBarColorClass = `bg-${color}-500`;

  return (
    <div className="col-lg-12">
      <div className="progress animated-progress">
        <div
          className={`progress-bar progress-bar-striped progress-bar-animated ${progressBarColorClass}`}
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin="0"
          aria-valuemax="100"
          style={progressBarStyle}
        ></div>
      </div>
    </div>
  );
}
const Dashboard_Row4 = () => {
  const [orderStatus, setOrderStatus] = useState([
    { label: "New", progress: 60, count: 307, color: "primary" },
    { label: "Pending", progress: 37, count: 177, color: "warning" },
    { label: "Rejected", progress: 37, count: 39, color: "black" },
    { label: "Returns", progress: 12, count: 27, color: "info" },
    { label: "Dispatched", progress: 75, count: 661, color: "teal" },
    { label: "Delivered", progress: 95, count: 1320, color: "success" },
    { label: "Cancelled", progress: 17, count: 74, color: "danger" },
  ]);

  const [activityData] = useState([
    {
      title: "Purchased by James Price",
      description: "Product noise evolve smartwatch",
      time: "05:57 AM Today",
      icon: "bi bi-cart3",
      iconBgColor: "bg-success-subtle",
      textColor: "text-success",
    },
    {
      title: "Natasha Carey have liked the products",
      description: "Allow users to like products in your WooCommerce store.",
      time: "25 Dec, 2022",
      icon: "bi bi-hand-thumbs-up-fill",
      iconBgColor: "bg-blue",
      textColor: "text-black",
      // avatar: "assets/images/users/32/avatar-2.jpg",
    },
    {
      title: "Today offers by Digitech Galaxy",
      description:
        "Offer is valid on orders of $230 Or above for selected products only.",
      time: "12 Dec, 2022",
      icon: "bi bi-bag fs-5",
      iconBgColor: "bg-secondary-subtle",
      textColor: "text-secondary",
    },
    {
      title: "Favorited Product",
      description: "Esther James have favorited product.",
      time: "25 Nov, 2022",
      icon: "bi bi-bookmark-fill",
      iconBgColor: "bg-warning-subtle",
      textColor: "text-warning",
    },
    {
      title: "Flash sale starting Tomorrow.",
      description: "Flash sale by Zoetic Fashion",
      time: "22 Oct, 2022",
      icon: "bi bi-bag fs-5",
      iconBgColor: "bg-secondary-subtle",
      textColor: "text-secondary",
    },
    {
      title: "Monthly sales report",
      description:
        "2 days left notification to submit the monthly sales report.",
      time: "15 Oct, 2022",
      icon: "bi bi-bar-chart-line",
      iconBgColor: "bg-info-subtle",
      textColor: "text-info",
    },
  ]);

  const [isInsightsdropdownOpen, setisInsightsdropdownOpen] = useState(false);
  const toggleInsightsdropdown = () => {
    setisInsightsdropdownOpen(!isInsightsdropdownOpen);
  };

  const [isStatusDropdownOpen, setisStatusDropdownOpen] = useState(false);

  const toggleStatusDropdown = () => {
    setisStatusDropdownOpen(!isStatusDropdownOpen);
  };
  const [insights] = useState([
    { text: "The recognition that one has a mental illness" },
    { text: "Review market characteristics and trends" },
    { text: "Digital analytics data including site analytics" },
    { text: "Check uikings theme and give customer support" },
    { text: "Success stories and case studies" },
    { text: "Preferences & purchase activity" },
    // Add more insights as needed
  ]);
  return (
    <>
      <div className="flex flex-col gap-3 sm:flex-row w-full ">
        <div className="relative w-full sm:w-1/3 p-4 bg-[#FFFFFF] rounded-lg shadow-md h-5/6">
          <h2 className="text-lg font-bold">Orders Status</h2>
          <div className="absolute top-2 right-2 mt-3">
            <button
              className="text-gray-400 focus:outline-none"
              onClick={toggleStatusDropdown}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-three-dots-vertical"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
                />
              </svg>
            </button>
            {isStatusDropdownOpen && (
              <div className="absolute right-0 mt-1 w-40 bg-[#FFFFFF] rounded-lg shadow-lg py-1 text-sm">
                <button className="block px-2 py-1 text-gray-800 hover:bg-[#F3F6F9] w-full text-left">
                  Today
                </button>
                <button className="block px-2 py-1 text-gray-800 hover:bg-[#F3F6F9] w-full text-left">
                  Last Week
                </button>
                <button className="block px-2 py-1 text-gray-800 hover:bg-[#F3F6F9] w-full text-left">
                  Last Month
                </button>
                <button className="block px-2 py-1 text-gray-800 hover:bg-[#F3F6F9] w-full text-left">
                  Current Year
                </button>
              </div>
            )}
          </div>
          <div className="text-gray-600 text-sm font-bold text-center mt-3 mb-3">
            01 Jan, 2022 - 01 Jan, 2023
          </div>
          {orderStatus.map((status, index) => (
            <div key={index} className=" flex items-center mb-1 ">
              <div className="w-1/4 text-gray-500">{status.label}</div>
              <div className="w-3/4 mt-3 ml-3">
                <ProgressBar
                  progress={status.progress}
                  color={setOrderStatus.color}
                />
                <div className="text-gray-600 text-sm font-bold">
                  {status.count}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full sm:w-1/3 p-2 bg-white rounded-lg shadow-md">
          <div className="flex items-center justify-between p-2 mb-3 mt-1">
            <h2 className="text-lg font-bold ml-1">Recent Activity</h2>
            <button className="text-[#4AB0C1] bg-[#c5e5f1] hover:bg-[#4AB0C1] hover:text-white text-xs rounded-sm px-3 py-1 flex justify-center">
              View More
            </button>
          </div>
          <div data-simplebar className="px-3 overflow-y-auto h-[58vh]">
            <div className="activity-timeline activity-main ">
              {activityData.map((activity, index) => (
                <div key={index} className="activity-item py-3 d-flex">
                  {activity.icon ? (
                    <div className="flex-shrink-0 avatar-xs activity-avatar">
                      <div
                        className={`avatar-title rounded-circle w-[3vh] h-[4vh]  ${activity.iconBgColor} ${activity.textColor}`}
                      >
                        <i className={activity.icon}></i>
                      </div>
                    </div>
                  ) : (
                    <div className="flex-shrink-0">
                      <img
                        src={activity.avatar}
                        alt=""
                        className="avatar-xs rounded-circle activity-avatar"
                      />
                    </div>
                  )}
                  <div className="flex-grow-1 ms-3">
                    <h6 className="mb-1 lh-base">{activity.title}</h6>
                    <p className="text-muted mb-2">{activity.description}</p>
                    <small className="mb-0 text-muted">{activity.time}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full sm:w-1/3 p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-4 -mt-1">Insight</h2>
          <div className="relative flex align-center justify-end mb-2 -mt-3">
            <p className="-mt-9 ml-1 text-sm text-[#CCCDD4]">This Month </p>
            <button
              className="text-gray-400 focus:outline-none -mt-12 ml-1"
              onClick={toggleInsightsdropdown}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chevron-down"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                />
              </svg>
            </button>
            {isInsightsdropdownOpen && (
              <div className="absolute right-0 mt-0 w-40 bg-[#FFFFFF] rounded-lg shadow-lg py-1  text-sm">
                <button className="block px-2 py-1 text-gray-800 hover:bg-[#F3F6F9] w-full text-left">
                  This Month
                </button>
                <button className="block px-2 py-1 text-gray-800 hover:bg-[#F3F6F9] w-full text-left">
                  Last Month
                </button>
              </div>
            )}
          </div>
          {insights.map((insight, index) => (
            <div key={index} className="flex items-center mb-2">
              <div className="border py-2 px-3 w-full rounded flex items-center gap-2">
                <i className="bi bi-check2-square text-primary"></i>
                <h6 className="mb-0 ml-2 text-sm">
                  <strong>{insight.text}</strong>
                </h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard_Row4;
