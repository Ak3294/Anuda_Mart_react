import React, { useState, useEffect } from "react";
import InputSearch from "../components/InputSearch";
import { CiSearch } from "react-icons/ci";

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
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredInvoices, setFilteredInvoices] = useState(invoices);
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });

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

  // Existing state and other variables
  const [deleteId, setDeleteId] = useState(null); // State to track which row is being deleted
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false); // State to show/hide delete confirmation dialog

  // Function to handle opening delete confirmation dialog
  const handleDeleteConfirmation = (id) => {
    setDeleteId(id);
    setShowDeleteConfirm(true);
  };

  // Function to handle actual deletion after confirmation
  const handleDelete = () => {
    // Perform deletion logic here, e.g., filter out the row with deleteId
    const updatedInvoices = filteredInvoices.filter(
      (invoice) => invoice.id !== deleteId
    );
    setFilteredInvoices(updatedInvoices);

    // Close delete confirmation dialog
    setShowDeleteConfirm(false);

    // Optional: Show success message or perform any additional actions
    Swal.fire("Deleted!", "The invoice has been deleted.", "success");
  };

  return (
    <div className="flex flex-col gap-3 w-full mb-4 p-3 bg-white overflow-x-auto">
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
        <button className="ml-3 flex bg-[#E40F15] text-white hover:text-white hover:bg-black px-3 py-2 rounded-1">
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
        <table className="min-w-full bg-white border rounded-lg sm:overflow-x-auto">
          <thead>
            <tr>
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
                  className="py-2 px-4 border-b cursor-pointer"
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
            {showDeleteConfirm && (
              <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-auto overflow-y-auto outline-none focus:outline-none">
                <div className="relative w-auto max-w-md mx-auto my-6">
                  <div className="bg-white rounded-lg shadow-lg">
                    <div className="flex flex-col p-4">
                      <h3 className="text-lg font-semibold mb-2">
                        Delete Invoice
                      </h3>
                      <p className="text-sm mb-4">
                        Are you sure you want to delete this invoice?
                      </p>
                      <div className="flex justify-end">
                        <button
                          className="mr-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                          onClick={handleDelete}
                        >
                          Delete
                        </button>
                        <button
                          className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
                          onClick={() => setShowDeleteConfirm(false)}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}



            
            {filteredInvoices.map((invoice) => (
              <tr key={invoice.id}>
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
                <td className="py-2 px-4 border-b mb-1">
                  <button className="mr-1 hover:bg-[#3762EA] hover:text-white bg-[#7aafeb]  text-white px-2 py-2 rounded-2">
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
                  <button className="mr-1 bg-[#c4c2c2be] hover:bg-black hover:text-[#ffffff] text-black px-2 py-2 rounded-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      class="bi bi-vector-pen"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.646.646a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-1.902 1.902-.829 3.313a1.5 1.5 0 0 1-1.024 1.073L1.254 14.746 4.358 4.4A1.5 1.5 0 0 1 5.43 3.377l3.313-.828zm-1.8 2.908-3.173.793a.5.5 0 0 0-.358.342l-2.57 8.565 8.567-2.57a.5.5 0 0 0 .34-.357l.794-3.174-3.6-3.6z"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M2.832 13.228 8 9a1 1 0 1 0-1-1l-4.228 5.168-.026.086z"
                      />
                    </svg>
                  </button>
                  <button
                    className="bg-[#FFE9E9] text-[#FF6C6C] hover:bg-[#FF6C6C] hover:text-white px-2 py-2 rounded-2"
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
