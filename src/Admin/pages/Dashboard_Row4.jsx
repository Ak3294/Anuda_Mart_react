import { useState, React } from "react";
import { RiDiscountPercentFill } from "react-icons/ri";

function ProgressBar({ progress, color }) {
  return (
    <div className="col-lg-12">
      <div
        className={`progress animated-progress`}
        role="progressbar"
        aria-label="Basic example"
        aria-valuenow={progress}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div
          className={`progress-bar progress-bar-striped progress-bar-animated bg-${color} w-[${progress}%]`}
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
        <div className="w-full sm:w-1/3 p-4 bg-[#FFFFFF] rounded-lg shadow-md h-5/6">
          <h2 className="text-lg font-bold mb-4">Orders Status</h2>
          <div className="text-gray-600 text-sm font-bold text-center">
            01 Jan, 2022 - 01 Jan, 2023
          </div>
          {orderStatus.map((status, index) => (
            <div key={index} className="flex items-center mb-1">
              <div className="w-1/4 text-gray-500">{status.label}</div>
              <div className="w-3/4 mt-3 ml-3">
                <ProgressBar progress={status.progress} color={status.color} />
                <div className="text-gray-600 text-sm font-bold">
                  {status.count}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full sm:w-1/3 p-2 bg-white rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-4 mt-4 ml-3">Recent Activity</h2>
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
          <h2 className="text-lg font-bold mb-4">Insight</h2>
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
