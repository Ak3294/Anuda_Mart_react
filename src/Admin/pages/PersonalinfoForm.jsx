import React, { useState } from "react";

const PersonalDetails = () => {
  const [sameAddress, setSameAddress] = useState(true);
  const [formData, setFormData] = useState({
    firstName: "Richard",
    lastName: "Marshall",
    mobileNumber: "617 219 6245",
    email: "richardmarshall@steex.com",
    dateOfBirth: "",
    registrationDate: "",
    address: "",
    city: "Jaipur",
    state: "Rajasthan",
    pinCode: "302020",
    nomineeName: "",
    nomineeMobile: "",
    nomineeRelation: "",
    commAddress: "Ram Nagar Jaipur",
    commCity: "Jaipur",
    commState: "Rajasthan",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="tab-pane bg-white shadow-md mt-4">
      <div className="card-header">
        <h6 className="card-title mb-2 flex p-4 text-medium font-semibold">
          Personal Details
        </h6>
      </div>
      <div className="card-body p-4">
        <form>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-4 ">
              <label
                htmlFor="firstnameInput"
                className="flex text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full border border-blue-200 rounded-md p-2"
                id="firstnameInput"
                placeholder="Enter your firstname"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="w-full md:w-1/2 px-4 mb-4">
              <label
                htmlFor="lastnameInput"
                className="flex text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                id="lastnameInput"
                placeholder="Enter your last name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="w-full md:w-1/2 px-4 mb-4">
              <label
                htmlFor="phonenumberInput"
                className="flex text-sm font-medium text-gray-700"
              >
                Mobile Number
              </label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                id="phonenumberInput"
                placeholder="Enter your phone number"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
              />
            </div>
            <div className="w-full md:w-1/2 px-4 mb-4">
              <label
                htmlFor="emailInput"
                className="flex  text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                id="emailInput"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="w-full md:w-1/2 px-4 mb-4">
              <label
                htmlFor="birthDateInput"
                className="flex  text-sm font-medium text-gray-700"
              >
                Date Of Birth
              </label>
              <input
                type="date"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                id="birthDateInput"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
              />
            </div>
            <div className="w-full md:w-1/2 px-4 mb-4">
              <label
                htmlFor="registrationDate"
                className="flex text-sm font-medium text-gray-700"
              >
                Registration Date
              </label>
              <input
                type="date"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                id="registrationDate"
                name="registrationDate"
                value={formData.registrationDate}
                onChange={handleChange}
              />
            </div>
            <div className="w-full px-4 mb-4">
              <label
                htmlFor="address"
                className="flex block text-sm font-medium text-gray-700"
              >
                Address
              </label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                id="address"
                placeholder="Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>
            <div className="w-full md:w-1/3 px-4 mb-4">
              <label
                htmlFor="cityInput"
                className="flex  text-sm font-medium text-gray-700"
              >
                City
              </label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                id="cityInput"
                placeholder="City"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
            </div>
            <div className="w-full md:w-1/3 px-4 mb-4">
              <label
                htmlFor="stateInput"
                className="flex  text-sm font-medium text-gray-700"
              >
                State
              </label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                id="stateInput"
                placeholder="State"
                name="state"
                value={formData.state}
                onChange={handleChange}
              />
            </div>
            <div className="w-full md:w-1/3 px-4 mb-4">
              <label
                htmlFor="zipcodeInput"
                className="flex  text-sm font-medium text-gray-700"
              >
                Pin Code
              </label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                id="zipcodeInput"
                placeholder="Enter zipcode"
                name="pinCode"
                minLength={5}
                maxLength={6}
                value={formData.pinCode}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex mt-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={formData.sameAddress}
                // onChange={toggleSameAddress}
                className="flex form-checkbox h-4 w-4 text-indigo-600"
              />
              <span className="ml-2">
                {" "}
                Same comunication address If you want diffrent address then
                unchecked box
              </span>
            </label>
          </div>

          <h6 className="flex text-medium font-semibold mb-4 mt-2">
            Nominee Details
          </h6>
          <div className="flex flex-wrap mt-4">
            <div className="w-full md:w-1/3 px-2 mb-4">
              <label
                htmlFor="nomineeName"
                className="flex  text-sm font-medium text-gray-700"
              >
                Nominee Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                id="nomineeName"
                placeholder="Enter Nominee Name "
                name="nomineeName"
                value={formData.nomineeName}
                onChange={handleChange}
              />
            </div>
            <div className="w-full md:w-1/3 px-4 mb-4">
              <label
                htmlFor="nomineeMobile"
                className="flex  text-sm font-medium text-gray-700"
              >
                Nominee Mobile
              </label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                id="nomineemobile"
                placeholder="Enter Nominee Mobile"
                name="nomineeMobile"
                value={formData.nomineeMobile}
                onChange={handleChange}
              />
            </div>
            <div className="w-full md:w-1/3 px-4 mb-4">
              <label
                htmlFor="nomineeRelation"
                className="flex  text-sm font-medium text-gray-700"
              >
                Nominee Relation
              </label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                id="nomineeRelation"
                placeholder="Enter Nominee Relation"
                name="nomineeRelation"
                minLength={5}
                maxLength={6}
                value={formData.nomineeRelation}
                onChange={handleChange}
              />
            </div>
          </div>
        </form>
        <div className="col-lg-12">
          <div className="hstack gap-2 justify-content-end mrt-30">
            <button type="submit" className="btn btn-thm bg-[#E40F15] text-white hover:bg:black">
              Updates & Save
            </button>
            <button type="button" className="bg-[#e4a5a7] hover:bg-[#FF6C6C] text-[#E40F15] text-white hover:bg:black btn btn-subtle-danger">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
