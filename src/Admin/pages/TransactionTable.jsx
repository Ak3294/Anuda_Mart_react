import React, { useState } from "react";
const transactionsData = [
  {
    id: 1,
    date: "26 March 2023 12:52 PM",
    name: "Jonathan",
    accountNumber: "6524812523",
    debit: 500.5,
    credit: 500.5,
    balance: 10500.5,
    status: "Success",
  },
  {
    id: 2,
    date: "26 March 2023 12:52 PM",
    name: "Harold",
    accountNumber: "6524812523",
    debit: 500.5,
    credit: 500.5,
    balance: 10500.5,
    status: "Success",
  },
  {
    id: 3,
    date: "26 March 2023 12:52 PM",
    name: "Shannon",
    accountNumber: "6524812523",
    debit: 500.5,
    credit: 500.5,
    balance: 10500.5,
    status: "Success",
  },
  {
    id: 4,
    date: "26 March 2023 12:52 PM",
    name: "Robert",
    accountNumber: "6524812523",
    debit: 500.5,
    credit: 500.5,
    balance: 10500.5,
    status: "Success",
  },
  {
    id: 5,
    date: "26 March 2023 12:52 PM",
    name: "Noel",
    accountNumber: "6524812523",
    debit: 500.5,
    credit: 500.5,
    balance: 10500.5,
    status: "Success",
  },
];

const depositData = [
  {
    id: 1,
    date: "26 March 2023 12:52 PM",
    name: "John Doe",
    accountNumber: "6524812523",
    debit: 500.5,
    credit: 500.5,
    balance: 10500.5,
    status: "Pending",
  },
  {
    id: 2,
    date: "26 March 2023 12:52 PM",
    name: "Jane Doe",
    accountNumber: "6524812523",
    debit: 500.5,
    credit: 500.5,
    balance: 10500.5,
    status: "Success",
  },
  {
    id: 3,
    date: "26 March 2023 12:52 PM",
    name: "Peter Pan",
    accountNumber: "6524812523",
    debit: 500.5,
    credit: 500.5,
    balance: 10500.5,
    status: "Success",
  },
  {
    id: 4,
    date: "26 March 2023 12:52 PM",
    name: "Alice Wonderland",
    accountNumber: "6524812523",
    debit: 500.5,
    credit: 500.5,
    balance: 10500.5,
    status: "Success",
  },
  {
    id: 5,
    date: "26 March 2023 12:52 PM",
    name: "Bob Ross",
    accountNumber: "6524812523",
    debit: 500.5,
    credit: 500.5,
    balance: 10500.5,
    status: "Success",
  },
];

const withdrawalData = [
  {
    id: 1,
    date: "26 March 2023 12:52 PM",
    name: "Mickey Mouse",
    accountNumber: "6524812523",
    debit: 500.5,
    balance: 10500.5,
    status: "Failed",
  },
  {
    id: 2,
    date: "26 March 2023 12:52 PM",
    name: "Donald Duck",
    accountNumber: "6524812523",
    debit: 500.5,
    balance: 10500.5,
    status: "Success",
  },
  {
    id: 3,
    date: "26 March 2023 12:52 PM",
    name: "Goofy",
    accountNumber: "6524812523",
    debit: 500.5,
    balance: 10500.5,
    status: "Success",
  },
  {
    id: 4,
    date: "26 March 2023 12:52 PM",
    name: "Minnie Mouse",
    accountNumber: "6524812523",
    debit: 500.5,
    balance: 10500.5,
    status: "Success",
  },
  {
    id: 5,
    date: "26 March 2023 12:52 PM",
    name: "Pluto",
    accountNumber: "6524812523",
    debit: 500.5,
    balance: 10500.5,
    status: "Success",
  },
];

const TestPage = () => {
  const [selectedTable, setSelectedTable] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredTransactions = transactionsData.filter((transaction) =>
    transaction.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredTransactions2 = depositData.filter((transaction) =>
    transaction.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredTransactions3 = withdrawalData.filter((transaction) =>
    transaction.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="flex flex-col md:flex-row w-full bg-[#FFFFFF] shadow-md p-4">
        <div className="text-lg font-semibold">Statement</div>

        <div className="-ml-[13vh]">
          <div className="flex justify-start space-x-3 mt-12 mb-3 ">
            <button
              className={`font-medium text-sm py-2 px-3 rounded-1 focus:outline-none focus:shadow-outline ${
                selectedTable === 1
                  ? "bg-[#E40F15] text-white"
                  : "bg-white text-black"
              }`}
              onClick={() => setSelectedTable(1)}
            >
              All Transactions
            </button>
            <button
              className={`font-medium text-sm py-2 px-3 rounded-1 focus:outline-none focus:shadow-outline ${
                selectedTable === 2
                  ? "bg-[#E40F15] text-white"
                  : "bg-white text-black"
              }`}
              onClick={() => setSelectedTable(2)}
            >
              Deposit
            </button>
            <button
              className={`font-medium text-sm py-2 px-3 rounded-1 focus:outline-none focus:shadow-outline ${
                selectedTable === 3
                  ? "bg-[#E40F15] text-white"
                  : "bg-white text-black"
              }`}
              onClick={() => setSelectedTable(3)}
            >
              Withdrawal
            </button>
          </div>

          <div className="mb-3 relative">
            <input
              type="text"
              className="border border-gray-400 rounded-sm py-1 px-8 w-64 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Type a keyword..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 absolute block left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          {selectedTable === 1 && (
            <div className="overflow-x-auto">
              <table className="w-full table-auto border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-[#F1F2F8] text-black font-base text-sm leading-normal">
                    <th className="py-2  px-7 text-left border border-gray-300">
                      ID
                    </th>
                    <th className="py-2  px-7 text-left border border-gray-300">
                      Transaction Date & Time
                    </th>
                    <th className="py-2  px-7 text-left border border-gray-300">
                      Name
                    </th>
                    <th className="py-2  px-7 text-left border border-gray-300">
                      A/C Number
                    </th>
                    <th className="py-2  px-7 text-left border border-gray-300">
                      Debit
                    </th>
                    <th className="py-2  px-7 text-left border border-gray-300">
                      Credit
                    </th>
                    <th className="py-2  px-7 text-left border border-gray-300">
                      Available Balance
                    </th>
                    <th className="py-2  px-7 text-left border border-gray-300">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm leading-normal">
                  {filteredTransactions.map((transaction) => (
                    <tr key={transaction.id} className="hover:bg-gray-100">
                      <td className="py-2  px-7 text-left border border-gray-300">
                        {transaction.id}
                      </td>
                      <td className="py-2  px-7 text-left border border-gray-300">
                        {transaction.date}
                      </td>
                      <td className="py-2  px-7 text-left border border-gray-300">
                        {transaction.name}
                      </td>
                      <td className="py-2  px-7 text-left border border-gray-300">
                        {transaction.accountNumber}
                      </td>
                      <td className="py-2  px-7 text-left border border-gray-300">
                        {transaction.debit}
                      </td>
                      <td className="py-2  px-7 text-left border border-gray-300">
                        {transaction.credit}
                      </td>
                      <td className="py-2  px-7 text-left border border-gray-300">
                        {transaction.balance}
                      </td>
                      <td className="py-2  px-7 text-left border border-gray-300">
                        {transaction.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {selectedTable === 2 && (
            <div className="overflow-x-auto">
              <table className="w-full table-auto border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-[#F1F2F8] text-black font-base text-sm leading-normal">
                    <th className="py-2  px-7 text-left border border-gray-300">
                      ID
                    </th>
                    <th className="py-2  px-7 text-left border border-gray-300">
                      Transaction Date & Time
                    </th>
                    <th className="py-2  px-7 text-left border border-gray-300">
                      Name
                    </th>
                    <th className="py-2  px-7 text-left border border-gray-300">
                      A/C Number
                    </th>
                    <th className="py-2  px-7 text-left border border-gray-300">
                      Debit
                    </th>
                    <th className="py-2  px-7 text-left border border-gray-300">
                      Credit
                    </th>
                    <th className="py-2  px-7 text-left border border-gray-300">
                      Available Balance
                    </th>
                    <th className="py-2  px-7 text-left border border-gray-300">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm leading-normal">
                  {filteredTransactions2.map((transaction) => (
                    <tr key={transaction.id} className="hover:bg-gray-100">
                      <td className="py-2  px-7 text-left border border-gray-300">
                        {transaction.id}
                      </td>
                      <td className="py-2  px-7 text-left border border-gray-300">
                        {transaction.date}
                      </td>
                      <td className="py-2  px-7 text-left border border-gray-300">
                        {transaction.name}
                      </td>
                      <td className="py-2  px-7 text-left border border-gray-300">
                        {transaction.accountNumber}
                      </td>
                      <td className="py-2  px-7 text-left border border-gray-300">
                        {transaction.debit}
                      </td>
                      <td className="py-2  px-7 text-left border border-gray-300">
                        {transaction.credit}
                      </td>
                      <td className="py-2  px-7 text-left border border-gray-300">
                        {transaction.balance}
                      </td>
                      <td className="py-2  px-7 text-left border border-gray-300">
                        {transaction.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {selectedTable === 3 && (
            <div className="overflow-x-auto">
              <table className="w-full table-auto border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-[#F1F2F8] text-black font-base text-sm leading-normal">
                    <th className="py-2  px-7 text-left border border-gray-300">
                      ID
                    </th>
                    <th className="py-2  px-7 text-left border border-gray-300">
                      Transaction Date & Time
                    </th>
                    <th className="py-2  px-7 text-left border border-gray-300">
                      Name
                    </th>
                    <th className="py-2  px-7 text-left border border-gray-300">
                      A/C Number
                    </th>
                    <th className="py-2  px-7 text-left border border-gray-300">
                      Debit
                    </th>
                    <th className="py-2  px-7 text-left border border-gray-300">
                      Available Balance
                    </th>
                    <th className="py-2  px-7 text-left border border-gray-300">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm leading-normal">
                  {filteredTransactions3.map((transaction) => (
                    <tr key={transaction.id} className="hover:bg-gray-100">
                      <td className="py-2  px-7 text-left border border-gray-300">
                        {transaction.id}
                      </td>
                      <td className="py-2  px-7 text-left border border-gray-300">
                        {transaction.date}
                      </td>
                      <td className="py-2  px-7 text-left border border-gray-300">
                        {transaction.name}
                      </td>
                      <td className="py-2  px-7 text-left border border-gray-300">
                        {transaction.accountNumber}
                      </td>
                      <td className="py-2  px-7 text-left border border-gray-300">
                        {transaction.debit}
                      </td>
                      <td className="py-2  px-7 text-left border border-gray-300">
                        {transaction.balance}
                      </td>
                      <td className="py-2  px-7 text-left border border-gray-300">
                        {transaction.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        
      </div>
    </>
  );
};

export default TestPage;
