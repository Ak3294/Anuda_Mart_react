import React, { useState } from "react";

// BankInfoCard Component
const BankInfoCard = ({
  title,
  bankName,
  accountHolder,
  accountNumber,
  ifsc,
}) => (
  <div className="flex flex-col space-y-2">
    <h2 className="flex font-semibold text-sm">{title}</h2>
    <div className="bg-[#E40F15] text-medium text-white p-3 rounded-lg flex flex-col space-y-2">
      <div className="flex justify-between">
        <p>Bank Name</p>
        <p className="">{bankName}</p>
      </div>
      <div className="flex justify-between">
        <p>A/c Holder's Name</p>
        <p className="font-medium">{accountHolder}</p>
      </div>
      <div className="flex justify-between">
        <p>A/c Number</p>
        <p className="font-medium">{accountNumber}</p>
      </div>
      <div className="flex justify-between">
        <p>IFSC</p>
        <p className="font-medium">{ifsc}</p>
      </div>
    </div>
  </div>
);

// BankAccountsTable Component
const BankAccountsTable = ({
  accounts,
  primaryIndex,
  onFileChange,
  onPrimaryChange,
}) => (
  <table className="min-w-full bg-white border border-gray-200">
    <thead>
      <tr className="text-center border-b text-xs bg-[#EEF0F7] font-medium">
        <th className="px-2 py-1">S. No.</th>
        <th className="px-2 py-1">IFSC</th>
        <th className="px-2 py-1">Bank Name</th>
        <th className="px-2 py-1">A/C Holder Name</th>
        <th className="px-2 py-1">Account Number</th>
        <th className="px-2 py-1">Upload Cancelled Cheque</th>
        <th className="px-2 py-1">Action</th>
      </tr>
    </thead>
    <tbody>
      {accounts.map((account, index) => (
        <tr key={index} className="border-b text-sm">
          <td className="px-2 py-1">{index + 1}</td>
          <td className="px-2 py-1">{account.ifsc}</td>
          <td className="px-2 py-1">{account.bankName}</td>
          <td className="px-2 py-1">{account.accountHolder}</td>
          <td className="px-2 py-1">{account.accountNumber}</td>
          <td className="px-2 py-1">
            <input
              type="file"
              onChange={(e) => onFileChange(index, e.target.files[0])}
              className="file-input text-sm"
            />
            {account.cheque && (
              <img
                src={URL.createObjectURL(account.cheque)}
                alt="Cheque"
                className="w-12 h-12 mt-2"
              />
            )}
          </td>
          <td className="px-2 py-1">
            <label className="flex items-center">
              <input
                type="radio"
                name="primary"
                checked={primaryIndex === index}
                onChange={() => onPrimaryChange(index)}
                className="mr-2"
              />
              <span className="text-sm">Primary</span>
            </label>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

// BankingInformation Component
const BankingInformation = () => {
  const [accounts, setAccounts] = useState([
    {
      ifsc: "SBIN0054114",
      bankName: "State Bank",
      accountHolder: "Ram Kumar",
      accountNumber: "7744561240",
    },
    {
      ifsc: "SBIN0054114",
      bankName: "State Bank",
      accountHolder: "Ram Kumar",
      accountNumber: "7744561240",
    },
  ]);

  const [primaryIndex, setPrimaryIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [newAccount, setNewAccount] = useState({
    ifsc: "",
    bankName: "",
    accountHolder: "",
    accountNumber: "",
  });

  const handleFileChange = (index, file) => {
    const updatedAccounts = accounts.map((account, i) =>
      i === index ? { ...account, cheque: file } : account
    );
    setAccounts(updatedAccounts);
  };

  const handlePrimaryChange = (index) => {
    setPrimaryIndex(index);
  };

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setNewAccount((prevAccount) => ({
      ...prevAccount,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAccounts((prevAccounts) => [...prevAccounts, newAccount]);
    toggleModal();
    setNewAccount({
      ifsc: "",
      bankName: "",
      accountHolder: "",
      accountNumber: "",
    });
  };

  return (
    <div className="p-4 bg-white mt-3 rounded">
      <h1 className="flex text-lg font-semibold mb-4">Banking Information</h1>
      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <BankInfoCard
          title="Withdrawal Account"
          bankName="ICICI Bank"
          accountHolder="Anuda Live"
          accountNumber="cashfree000045641"
          ifsc="ICIC0000104"
        />
        <BankInfoCard
          title="Deposit Account"
          bankName="ICICI Bank"
          accountHolder="Anuda Live"
          accountNumber="cashfree000045641"
          ifsc="ICIC0000104"
        />
      </div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="flex text-sm font-semibold">Add User Bank Account</h2>
        <button
          type="button"
          onClick={toggleModal}
          className="btn btn-thm bg-red-600 hover:bg-black hover:text-white text-white px-2 py-1 rounded-md flex items-center space-x-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-plus-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
          </svg>
          <span className="text-xs">Add New Bank Account</span>
        </button>
      </div>
      <BankAccountsTable
        accounts={accounts}
        primaryIndex={primaryIndex}
        onFileChange={handleFileChange}
        onPrimaryChange={handlePrimaryChange}
      />

      <div
        className={`modal fixed inset-0 flex items-center justify-center ${
          isOpen ? "visible" : "invisible"
        }`}
      >
        <div
          className="modal-overlay absolute inset-0 bg-black opacity-30"
          onClick={toggleModal}
        ></div>

        <div className="modal-container bg-white w-100 md:max-w-lg mx-auto rounded shadow-lg z-50 overflow-y-auto">
          <div className="modal-content py-2 text-left px-6">
            <div className="modal-header px-2 pt-2 flex items-center justify-between">
              <h5 className="modal-title font-semibold">
                Add New Bank Account
              </h5>
              <button type="button" onClick={toggleModal}>
                <i className="bi bi-x-lg align-baseline me-1 text"></i>
              </button>
            </div>

            <form
              className="tablelist-form"
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit}
            >
              <div className="modal-body p-1">
                <div className="mb-2">
                  <label
                    htmlFor="ifsc"
                    className="form-label text-sm font-semibold"
                  >
                    Bank IFSC
                  </label>
                  <input
                    type="text"
                    id="ifsc"
                    className="form-control text-grey-200"
                    placeholder="Enter IFSC Code"
                    required
                    value={newAccount.ifsc}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-2">
                  <label
                    htmlFor="bankName"
                    className="form-label text-sm font-semibold"
                  >
                    Bank Name
                  </label>
                  <input
                    type="text"
                    id="bankName"
                    className="form-control"
                    placeholder="Enter Bank Name"
                    required
                    value={newAccount.bankName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-2">
                  <label
                    htmlFor="accountHolder"
                    className="form-label text-sm font-semibold"
                  >
                    Account Holder Name
                  </label>
                  <input
                    type="text"
                    id="accountHolder"
                    className="form-control"
                    placeholder="Enter Account Holder Name"
                    required
                    value={newAccount.accountHolder}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-2">
                  <label
                    htmlFor="accountNumber"
                    className="form-label text-sm font-semibold"
                  >
                    Account Number
                  </label>
                  <input
                    type="text"
                    id="accountNumber"
                    className="form-control"
                    placeholder="Enter Account Number"
                    required
                    value={newAccount.accountNumber}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="modal-footer">
                <div className="hstack gap-2 justify-end">
                  <button
                    type="submit"
                    className="btn btn-thm bg-[#E40F15] hover:bg-black text-white"
                  >
                    Add Bank
                  </button>
                  <button
                    type="button"
                    className="btn btn-ghost-danger text-[#E40F15] hover:bg-[#eec8c5]"
                    onClick={toggleModal}
                  >
                    <i className="bi bi-x-lg align-baseline me-1 text-red "></i>{" "}
                    Close
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankingInformation;
