import React, { useState, useEffect } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaPenNib } from "react-icons/fa";

const invoices = [
  {
    id: "#TBS24301901",
    name: "Themesbrand",
    email: "themesbrand@steex.com",
    createDate: "28 Mar, 2023",
    dueDate: "06 Apr, 2023",
    amount: "$381.76",
    status: "Paid",
  },
  {
    id: "#TBS24301902",
    name: "Ayaan Bowen",
    email: "ayaan@steex.com",
    createDate: "21 Mar, 2023",
    dueDate: "21 Mar, 2023",
    amount: "$359.77",
    status: "Unpaid",
  },
  {
    id: "#TBS24301903",
    name: "Zachary Stokes",
    email: "zachary@steex.com",
    createDate: "16 Mar, 2023",
    dueDate: "21 Mar, 2023",
    amount: "$276.18",
    status: "Paid",
  },
  {
    id: "#TBS24301904",
    name: "Nelson Schaden",
    email: "nelson@steex.com",
    createDate: "27 Feb, 2023",
    dueDate: "05 Mar, 2023",
    amount: "$509.34",
    status: "Pending",
  },
  {
    id: "#TBS24301905",
    name: "Ophelia Steuber",
    email: "ophelia@steex.com",
    createDate: "06 Apr, 2023",
    dueDate: "12 Apr, 2023",
    amount: "$170.58",
    status: "Unpaid",
  },
  {
    id: "#TBS24301906",
    name: "Sarai Schmidt",
    email: "sarai@steex.com",
    createDate: "20 Feb, 2023",
    dueDate: "26 Feb, 2023",
    amount: "$254.18",
    status: "Paid",
  },
  {
    id: "#TBS24301907",
    name: "Deondre Huel",
    email: "deondre@steex.com",
    createDate: "13 Feb, 2023",
    dueDate: "19 Feb, 2023",
    amount: "$86.99",
    status: "Paid",
  },
  {
    id: "#TBS24301908",
    name: "Nelson Schaden",
    email: "nelson@steex.com",
    createDate: "01 Feb, 2023",
    dueDate: "07 Feb, 2023",
    amount: "$213.49",
    status: "Unpaid",
  },
  {
    id: "#TBS24301909",
    name: "Prezy Mark",
    email: "prezy@steex.com",
    createDate: "29 Jan, 2023",
    dueDate: "06 Feb, 2023",
    amount: "$381.76",
    status: "Paid",
  },
  {
    id: "#TBS24301910",
    name: "Domenic Dach",
    email: "domenic@steex.com",
    createDate: "17 Jan, 2023",
    dueDate: "23 Jan, 2023",
    amount: "$276.18",
    status: "Refund",
  },
];

const statusClasses = {
  Paid: "bg-green-100 text-green-800",
  Unpaid: "bg-red-100 text-red-800",
  Pending: "bg-yellow-100 text-yellow-800",
  Refund: "bg-purple-100 text-purple-800",
};

const InvoiceTable = () => {
  // Checkbox selected delete button
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const handleDeleteSelected = () => {
    setShowDeleteConfirm(true);
  };

  const handleSelectRow = (id) => {
    setSelectedRows((prevSelectedRows) =>
      prevSelectedRows.includes(id)
        ? prevSelectedRows.filter((rowId) => rowId !== id)
        : [...prevSelectedRows, id]
    );
  };

  const handleDelete = () => {
    // Filter out the selected rows
    const updatedInvoices = filteredInvoices.filter(
      (invoice) => !selectedRows.includes(invoice.id)
    );

    // Update the state with the remaining invoices
    setFilteredInvoices(updatedInvoices);

    // Clear selected rows
    setSelectedRows([]);

    // Close delete confirmation dialog
    setShowDeleteConfirm(false);
  };

  // To delete the Single row via using the delete button
  const [showDeleteConfirmSingle, setShowDeleteConfirmSingle] = useState(false);
  const [selectedInvoiceId, setSelectedInvoiceId] = useState(null);

  const handleDeleteConfirmation = (id) => {
    setSelectedInvoiceId(id);
    setShowDeleteConfirmSingle(true);
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredInvoices, setFilteredInvoices] = useState(invoices);
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedRows([]);
    } else {
      setSelectedRows(filteredInvoices.map((invoice) => invoice.id));
    }
    setSelectAll(!selectAll);
  };

  const handleDeleteSingle = () => {
    // Filter out the invoice with the selected ID
    const updatedInvoices = filteredInvoices.filter(
      (invoice) => invoice.id !== selectedInvoiceId
    );

    // Update the state with the remaining invoices
    setFilteredInvoices(updatedInvoices);

    // Clear the selected invoice ID
    setSelectedInvoiceId(null);

    // Close the delete confirmation dialog
    setShowDeleteConfirmSingle(false);
  };

  useEffect(() => {
    // Function to handle sorting of invoices
    const sortInvoices = () => {
      let sortedInvoices = [...invoices];

      if (sortConfig.key !== null) {
        sortedInvoices.sort((a, b) => {
          if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === "ascending" ? -1 : 1;
          }
          if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === "ascending" ? 1 : -1;
          }
          return 0;
        });
      }

      return sortedInvoices;
    };

    // Filter invoices based on search term
    const filterInvoices = (sortedInvoices) => {
      return sortedInvoices.filter((invoice) =>
        Object.values(invoice).some((value) =>
          value.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    };

    // Apply sorting and filtering
    let sortedInvoices = sortInvoices();
    let filteredInvoices = filterInvoices(sortedInvoices);

    setFilteredInvoices(filteredInvoices);
  }, [searchTerm, sortConfig]);

  // Function to handle sorting request
  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  // Function to handle search input change
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="flex flex-col gap-1 w-full mb-4 p-4 bg-white overflow-x-auto">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">Invoices List</h1>
        <div className="searchBox ml-auto">
          <input
            type="text"
            placeholder="Search"
            className="px-2 py-1.5 w-56 border rounded"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        {selectedRows.length > 0 && (
          <button
            className="bg-[#ffe9e9] text-[#ff7676]  hover:bg-[#ef5151] hover:text-white px-2.5 py-2.5 ml-1 rounded-1"
            onClick={handleDeleteSelected}
          >
            <RiDeleteBin6Line />
          </button>
        )}

        {showDeleteConfirmSingle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-auto overflow-y-auto   outline-none focus:outline-none bg-gray-900 bg-opacity-50">
            <div className="relative w-auto max-w-md mx-auto my-6">
              <div className="bg-white rounded-lg shadow-lg w-[60vh] h-[40vh]">
                <div className="flex justify-end">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className=" cursor-pointer mr-3 mt-2 bi bi-x-lg"
                    viewBox="0 0 16 16"
                    onClick={() => setShowDeleteConfirmSingle(false)}
                  >
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                  </svg>
                </div>
                <div className="flex items-center justify-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="60"
                    fill="currentColor"
                    className="mt-10 text-red-400 bi bi-trash-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                  </svg>
                </div>
                <div className="flex flex-col p-4">
                  <h3 className="text-2xl font-semibold mb-2 items-center flex justify-center">
                    Are you sure?
                  </h3>
                  <p className="text-sm text-[#b2b4be] mb-4 justify-center flex">
                    Are you sure you want to remove this record?
                  </p>
                  <div className="flex justify-center">
                    <button
                      className="px-3 py-2 text-sm font-medium  bg-[#eef0f7] text-gray-800 rounded-1 transition-transform duration-200 hover:-translate-y-1 mr-3"
                      onClick={() => setShowDeleteConfirmSingle(false)}
                    >
                      Close
                    </button>
                    <button
                      className="mr-2 text-sm font-medium px-3 py-1  transition-transform duration-200 hover:-translate-y-1  bg-[#f46767] text-white rounded-1  "
                      onClick={handleDeleteSingle}
                    >
                      Yes,delete it!
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {showDeleteConfirm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50 mt-3">
            <div className="bg-white rounded-lg shadow-lg w-[70vh] h-[50vh] p-6">
              <div className="flex justify-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  className=" -mr-2 -mt-2 cursor-pointer bi bi-x-lg"
                  viewBox="0 0 16 16"
                  onClick={() => setShowDeleteConfirm(false)}
                >
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                </svg>
              </div>
              <div className="flex flex-col items-center">
                <div className="mb-4 text-yellow-400 text-4xl">
                  <img
                    src="../../../exclamation-circle.webp"
                    className="h-[20vh] w-[20vh]"
                    alt=""
                  />
                </div>
                <h2 className="text-2xl  mb-2">Are you sure?</h2>
                <p className="text-grey-500 text-xl mb-4 text-center">
                  You won't be able to revert this!
                </p>
                <div className="flex space-x-2">
                  <button
                    onClick={handleDelete}
                    className="bg-[#3762ea]  text-white py-2 px-3 rounded-1"
                  >
                    Yes, delete it!
                  </button>
                  <button
                    onClick={() => setShowDeleteConfirm(false)}
                    className=" bg-red-600 text-white py-2 px-4 rounded-1"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <button className="ml-1 flex bg-[#E40F15] text-white hover:text-white hover:bg-black px-3 py-2 rounded-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="mt-0.5 bi bi-plus-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
          </svg>
          <div className="ml-1 text-center text-sm">Add Invoice</div>
        </button>
      </div>
      <div className="mt-4 text-sm overflow-x-auto">
        <table className="max-w-full bg-white border rounded-lg sm:overflow-x-auto">
          <thead className="bg-[#eef0f7]">
            <tr>
              <th className="py-1 px-3 border-b cursor-pointer">
                <input
                  className=""
                  type="checkbox"
                  checked={selectAll}
                  onChange={handleSelectAll}
                />
              </th>
              {[
                "ID",
                "Customer Name",
                "Email",
                "Create Date",
                "Due Date",
                "Amount",
                "Status",
              ].map((header) => (
                <th
                  key={header}
                  className="py-1 px-3 border-b cursor-pointer"
                  onClick={() =>
                    requestSort(header.toLowerCase().replace(" ", ""))
                  }
                >
                  <div className="flex items-center">
                    {header}
                    {sortConfig.key ===
                      header.toLowerCase().replace(" ", "") && (
                      <span className="ml-2">
                        {sortConfig.direction === "ascending" ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 inline-block"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 inline-block"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M14.707 10.707a1 1 0 01-1.414 0L10 7.414l-3.293 3.293a1 1 0 11-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </span>
                    )}
                  </div>
                </th>
              ))}
              <th className="py-2 px-4 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredInvoices.map((invoice) => (
              <tr key={invoice.id}>
                <td className="py-1 px-3 border-b">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(invoice.id)}
                    onChange={() => handleSelectRow(invoice.id)}
                  />
                </td>
                <td className="py-1 px-3 border-b text-blue-500">
                  <a href="">{invoice.id}</a>
                </td>
                <td className="py-1 px-3 border-b">{invoice.name}</td>
                <td className="py-1 px-3 border-b">{invoice.email}</td>
                <td className="py-1 px-3 border-b">{invoice.createDate}</td>
                <td className="py-1 px-3 border-b">{invoice.dueDate}</td>
                <td className="py-1 px-3 border-b">{invoice.amount}</td>
                <td className="py-1 px-3 border-b">
                  <span
                    className={`px-2 py-1 text-xs rounded ${
                      statusClasses[invoice.status]
                    }`}
                  >
                    {invoice.status}
                  </span>
                </td>
                <td className="py-2 px-4 border-b sm:mb-1">
                  <button className="mr-1 hover:bg-[#3762EA] hover:text-white bg-[#7aafeb] s:mb-1 text-white px-2 py-2 rounded-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      class="bi bi-eye"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                    </svg>
                  </button>
                  <button className="mr-1 bg-[#c4c2c2be] text-[#0c0c0c] hover:bg-black s:mb-1 hover:text-[#ffffff] px-2 py-2 rounded-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      className="bi bi-pen"
                      viewBox="0 0 16 16"
                    >
                      <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z" />
                    </svg>
                  </button>
                  <button
                    className="bg-[#FFE9E9] text-[#FF6C6C] hover:bg-[#FF6C6C] xs:mb-1 hover:text-white px-2 py-2 rounded-2"
                    onClick={() => handleDeleteConfirmation(invoice.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      className="bi bi-trash-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InvoiceTable;
