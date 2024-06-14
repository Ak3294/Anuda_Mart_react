import React, { useState } from "react";

const BusinessInformation = () => {
  // State to manage dropdown options
  const [businessProfiles, setBusinessProfiles] = useState([
    { id: "", name: "Select Business Profile" },
    { id: "1035", name: "Beauty And Personal Care" },
    { id: "12", name: "Education" },
    { id: "54", name: "Entertainment & Arts" },
    { id: "97", name: "Finance & Insurance" },
    { id: "142", name: "Govt. & Public Services" },
    { id: "180", name: "Health & Wellness" },
    { id: "160", name: "Hotel & Accommodation" },
    { id: "1010", name: "Legal" },
    { id: "346", name: "Nightlife & Drinks" },
    { id: "1055", name: "Others" },
    { id: "357", name: "Property" },
    { id: "421", name: "Religious Place" },
    { id: "424", name: "Restaurants & Cafes" },
    { id: "702", name: "Services" },
    { id: "559", name: "Shopping & Convenience Stores" },
    { id: "190", name: "Sports And Fitness Recreation" },
    { id: "891", name: "Transportation / Automotive" },
    { id: "953", name: "Travel & Tourism" },
  ]);

  const [businessTypes, setBusinessTypes] = useState([
    { id: "", name: "Select Business Type" },
    { id: "358", name: "Caravan" },
    { id: "359", name: "Caravan Park" },
    { id: "360", name: "Commercial Property Agent" },
    { id: "361", name: "Escrow Service" },
    { id: "362", name: "Estate Agent" },
    { id: "363", name: "Home Inspector" },
    { id: "364", name: "Home Staging Service" },
    { id: "365", name: "Housing Assistance Service" },
    { id: "366", name: "Mortgage Brokers" },
    { id: "367", name: "Property Company" },
    { id: "368", name: "Property Developer" },
    { id: "372", name: "Property Development" },
    { id: "374", name: "Property Expert" },
    { id: "369", name: "Property Investment company" },
    { id: "370", name: "Property management company" },
    { id: "371", name: "Property Service" },
    { id: "373", name: "Property valuation" },
  ]);

  const [selectedProfile, setSelectedProfile] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [businessAddress, setBusinessAddress] = useState("");

  const handleProfileChange = (e) => setSelectedProfile(e.target.value);
  const handleTypeChange = (e) => setSelectedType(e.target.value);
  const handleNameChange = (e) => setBusinessName(e.target.value);
  const handleAddressChange = (e) => setBusinessAddress(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({
      selectedProfile,
      selectedType,
      businessName,
      businessAddress,
    });
    // You can add logic here to submit data to your backend or perform other actions
  };

  return (
    <div className="tab-pane bg-white shadow-md">
      <div className="card-body p-2 mt-4">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap mt-3">
            <div className="w-full md:w-1/2 px-4 mb-4">
              <div className="auth-pass-inputgroup">
                <label htmlFor="businessprofile" className="flex form-label text-sm font-medium">
                  Business Profile
                </label>
                <div className="relative">
                  <select
                    className="form-control text-sm font-medium "
                    id="businessprofile"
                    name="p_id"
                    value={selectedProfile}
                    onChange={handleProfileChange}
                  >
                    {businessProfiles.map((profile) => (
                      <option key={profile.id} value={profile.id}>
                        {profile.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 px-4 mb-4">
              <div className="auth-pass-inputgroup">
                <label htmlFor="businesstype" className="flex form-label text-sm font-medium">
                  Business Type
                </label>
                <div className="relative">
                  <select
                    className="text-sm font-medium form-control"
                    id="businesstype"
                    value={selectedType}
                    onChange={handleTypeChange}
                  >
                    {businessTypes.map((type) => (
                      <option key={type.id} value={type.id}>
                        {type.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 px-4 mb-4">
              <div className="auth-pass-inputgroup">
                <label htmlFor="businessname" className="flex form-label text-sm font-medium">
                  Business Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    className="form-control text-sm text-grey-200"
                    value={businessName}
                    onChange={handleNameChange}
                    placeholder="Business Name"
                  />
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 px-4 mb-4">
              <div className="auth-pass-inputgroup">
                <label htmlFor="businessaddress" className="flex form-label text-sm font-medium">
                  Business Address
                </label>
                <div className="relative">
                  <input
                    type="text"
                    className="form-control text-sm text-grey-200"
                    value={businessAddress}
                    onChange={handleAddressChange}
                    placeholder="Address"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row gap-2 justify-between items-center mb-3">
            <div className="col-lg-12">
              <div className="d-flex justify-content-end">
                <button
                  type="changepass"
                  className="bg-[#E40F15] text-white hover:bg-black text-sm font-medium btn btn-thm"
                >
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BusinessInformation;
