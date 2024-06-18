import React,{useState} from 'react';
import { Modal } from 'react-modal';

function EditCustomer({onClose}) {
  const [customerName, setCustomerName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [joiningDate, setJoiningDate] = useState("");
  const [status, setStatus] = useState("");

  const handleCustomerNameChange = (event) => {
    setCustomerName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleContactNoChange = (event) => {
    setContactNo(event.target.value);
  };

  const handleJoiningDateChange = (event) => {
    setJoiningDate(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log("Customer Name:", customerName);
    console.log("Email:", email);
    console.log("Contact No:", contactNo);
    console.log("Joining Date:", joiningDate);
    console.log("Status:", status);
  };

  return (
    <Modal isOpen={true} onRequestClose={onClose}>
      <div className="p-4 rounded-md shadow-md bg-white">
        <h2 className="text-xl font-bold mb-4">Edit Customer</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="customer-name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Customer Name
            </label>
            <input
              type="text"
              id="customer-name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={customerName}
              onChange={handleCustomerNameChange}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={email}
              onChange={handleEmailChange}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="contact-no"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Contact No.
            </label>
            <input
              type="tel"
              id="contact-no"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={contactNo}
              onChange={handleContactNoChange}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="joining-date"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Joining Date
            </label>
            <input
              type="date"
              id="joining-date"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={joiningDate}
              onChange={handleJoiningDateChange}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="status"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Status
            </label>
            <input
              type="text"
              id="status"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={status}
              onChange={handleStatusChange}
            />
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-4"
            >
              Close
            </button>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Update
            </button>
          </div>
        </form>
        <button onClick={onClose}>Close</button>
        <button>Update</button>
      </div>
    </Modal>
  );
}

export default EditCustomer;
