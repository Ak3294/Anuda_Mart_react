import React from "react";

const InvoiceCard = () => {
  const items = [
    {
      id: 1,
      name: "Branded T-Shirts",
      category: "Fashion",
      rate: 161.25,
      quantity: 3,
      amount: 483.75,
    },
    {
      id: 2,
      name: "Fossil gen 5E smart watch",
      category: "32.5mm (1.28 Inch) TFT Color Touch Display",
      rate: 69.6,
      quantity: 2,
      amount: 139.2,
    },
    {
      id: 3,
      name: "Blive Printed Men Round Neck",
      category: "Fashion",
      rate: 250.0,
      quantity: 6,
      amount: 1500.0,
    },
    {
      id: 4,
      name: "Flip-Flops and House Slippers",
      category: "Footwear",
      rate: 150.0,
      quantity: 1,
      amount: 150.0,
    },
  ];

  const subTotal = items.reduce((sum, item) => sum + item.amount, 0);
  const taxRate = 0.18;
  const estimatedTax = subTotal * taxRate;
  const discount = 681.88;
  const shippingCharges = 65.0;
  const total = subTotal + estimatedTax - discount;

  return (
    <div className="card overflow-hidden max-w-4xl mx-auto" id="invoice">
      {/* Top decorative SVG */}
      <div className="-ml-20 invoice-effect-top position-absolute start-0 w-full">
        <svg
          className="w-[90%]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 764 182"
          width="764"
          height="182"
        >
          <title>&lt;Group&gt;</title>
          <g id="<Group>">
            <g id="<Group>">
              <path
                id="<Path>"
                className="fill-current text-[#eef0f7]" // Replace with Tailwind classes
                d="m-6.6 177.4c17.5 0.1 35.1 0 52.8-0.4 286.8-6.6 537.6-77.8 700.3-184.6h-753.1z"
              />
            </g>
            <g id="<Group>">
              <path
                id="<Path>"
                className="fill-current text-black" // Replace with Tailwind classes
                d="m-6.6 132.8c43.5 2.1 87.9 2.7 132.9 1.7 246.9-5.6 467.1-59.2 627.4-142.1h-760.3z"
              />
            </g>
            <g id="<Group>">
              <path
                id="<Path>"
                className="fill-current text-[#e40f15]" // Replace with Tailwind classes
                d="m-6.6 87.2c73.2 7.4 149.3 10.6 227.3 8.8 206.2-4.7 393.8-42.8 543.5-103.6h-770.8z"
              />
            </g>
          </g>
        </svg>
      </div>

      {/* Card body */}
      <div className="card-body z-1 position-relative">
        {/* Header section */}
        <div className="flex">
          <div className="flex-grow-1">
            <img
              src="../../../w-logo.png"
              className="card-logo"
              alt="logo light"
              height="28"
            />
          </div>
          <div className="flex-shrink-0 text-sm mt-2 flex flex-col text-left">
            <div className="mb-2 flex items-center">
              <h6 className="text-muted fw-normal mr-2 text-[#878A99]">
                Legal Registration No:
              </h6>
              <span className="legal-register-no font-bold ">32654 9851</span>
            </div>
            <div className="mb-2 flex items-center">
              <h6 className="text-muted fw-normal mr-2 text-[#878A99]">
                Email:
              </h6>
              <span className="font-bold " id="legal-register-no">
                anudalive@gmail.com
              </span>
            </div>
            <div className="mb-2 flex items-center">
              <h6 className="text-muted fw-normal mr-2 text-[#878A99]">
                Website:
              </h6>
              <a className="text-blue-500 font-bold" href="www.anudamart.com">
                www.anudamart.com
              </a>
            </div>
            <div className="mb-2 flex items-center">
              <h6 className="text-muted fw-normal mr-2 text-[#878A99]">
                Contact No.:
              </h6>
              <span id="legal-register-no">+(01) 234 6789</span>
            </div>
          </div>
        </div>

        {/* Invoice details section */}
        <div className="mt-5 pt-4">
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 text-sm">
            <div className="col">
              <p className="text-muted mb-2 text-uppercase text-[#878A99]">
                INVOICE NO
              </p>
              <span className="fs-md mb-0 font-bold">
                #TBS<span id="invoice-no">24301901</span>
              </span>
            </div>
            <div className="col">
              <p className="text-muted mb-2 text-uppercase text-[#878A99]">
                DATE
              </p>
              <span className="date">10 April, 2023</span>
            </div>
            <div className="col">
              <p className="text-muted mb-2 text-uppercase text-[#878A99]">
                DUE DATE
              </p>
              <span className="date">10 April, 2023</span>
            </div>
            <div className="col">
              <p className="text-muted mb-2 text-uppercase text-[#878A99]">
                PAYMENT STATUS
              </p>
              <div className="w-10 text-xs  h-4 flex justify-center rounded-2 bg-green-100 text-green-500">
                Paid
              </div>
            </div>
            <div className="col">
              <p className="text-muted mb-2 text-uppercase text-[#878A99]">
                TOTAL AMOUNT
              </p>
              <span className="font-bold">$2,050.18</span>
            </div>
            {/* ... */}
          </div>
        </div>

        {/* Shipping Address */}
        <div className="mt-3 pt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div className="col">
              <h6 className="text-uppercase text-[#878A99] mb-3">
                Billing Address
              </h6>
              <div className="font-bold text-sm">Jennifer Mayert</div>
              <p className="text-[#878A99] text-sm">
                6382 Cerromar Cir, Orangevale, California, US.
              </p>

              <div>
                <div className="mb-1">
                  <span className="fs-md mb-0 text-[#878A99] text-sm">
                    Phone:<span id="invoice-no">+(909) 594 2812</span>
                  </span>
                </div>
                <div className="mb-1">
                  <span className="fs-md mb-0 text-[#878A99] text-sm">
                    Tax:<span id="invoice-no">12-3456789</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col ">
              <h6 className="text-uppercase text-[#878A99] mb-3">
                SHIPPING ADDRESS
              </h6>
              <div className="font-bold text-sm ">Jennifer Mayert</div>
              <p className="text-[#878A99] text-sm">
                1234, 5th Street, New York, NY 10001
              </p>

              <div>
                <div className="mb-1">
                  <span className="fs-md mb-0 text-[#878A99] text-sm">
                    Phone:<span id="invoice-no">+(909) 594 2812</span>
                  </span>
                </div>
                <div className="mb-1">
                  <span className="fs-md mb-0 text-[#878A99] text-sm">
                    Tax:<span id="invoice-no">12-3456789</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Products list */}
        <div className="p-2 overflow-x-auto mt-3 text-sm ">
          <table className="min-w-full ">
            <thead className="bg-gray-100 text-center px-4 py-4">
              <tr>
                <th className="px-4 py-2 font-semibold ">#</th>
                <th className="px-4 py-2 font-semibold">Product Details</th>
                <th className="px-4 py-2 font-semibold text-center">Rate</th>
                <th className="px-4 py-2 font-semibold text-center">
                  Quantity
                </th>
                <th className="px-4 py-2 font-semibold text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={item.id} className="bg-white">
                  <td className="px-4 py-2 font-semibold ">{`0${item.id}`}</td>
                  <td className="px-4 py-2 ">
                    <div className="font-bold">{item.name}</div>
                    <div className="text-gray-500 text-sm">{item.category}</div>
                  </td>
                  <td className="px-4 py-2 text-center">{`$${item.rate.toFixed(
                    2
                  )}`}</td>
                  <td className="px-4 py-2 text-center">{`0${item.quantity}`}</td>
                  <td className="px-4 py-2 text-right">{`$${item.amount.toFixed(
                    2
                  )}`}</td>
                </tr>
              ))}
            </tbody>

            <tfoot className="border-top">
              <tr className="mb-3">
                <td colSpan="4" className="px-4 py-2 text-right ">
                  Sub Total
                </td>
                <td className="px-4 py-2 ">{`$${subTotal.toFixed(2)}`}</td>
              </tr>
              <tr className="mb-3">
                <td colSpan="4" className="px-4 py-2 text-right ">
                  Estimated Tax <span className="text-[#878A99]">(18%)</span>
                </td>
                <td className="px-4 py-2 ">{`$${estimatedTax.toFixed(2)}`}</td>
              </tr>
              <tr className="mb-3">
                <td colSpan="4" className="px-4 py-2 text-right">
                  Discount <span className="text-[#878A99]">(STEEX30)</span>
                </td>
                <td className="px-4 py-2  text-red-500">{`-$${discount.toFixed(
                  2
                )}`}</td>
              </tr>
              <tr className="mb-3">
                <td colSpan="4" className="px-4 py-2 text-right">
                  Shipping Charges
                </td>
                <td className="px-4 py-2  text-black">{`$${shippingCharges.toFixed(
                  2
                )}`}</td>
              </tr>
              <tr className="font-semibold mb-3">
                <td colSpan="4" className="px-4 py-2 text-right ">
                  Total
                </td>
                <td className="px-4 py-2">{`$${total.toFixed(2)}`}</td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Payment details */}
        <div className="mt-3 text-[#878A99]">
          <h6 className="text-[#878A99] uppercase font-bold text=sm mb-2">
            Payment Details:
          </h6>
          <p className="text-sm mb-1">
            Payment Method: <span className="font-bold">Mastercard</span>
          </p>
          <p className="text-sm mb-1">
            Card Holder : <span className="font-bold">Jennifer Mayert</span>
          </p>
          <p className="text-sm mb-1">
            Account Number :{" "}
            <span className="font-bold">xxx xxxx xxxx 1234</span>
          </p>
          <p className="text-sm mb-1">
            Total Amount:{" "}
            <span className="font-bold">{`$${total.toFixed(2)}`}</span>
          </p>
          {/* ... */}
        </div>

        {/* Notes */}
        <div className="mt-4 mb-4 ">
          <div className="bg-[#FFE9E9] p-3 rounded-2 border-1 border-[#E66161]">
            <span className="font-bold text-[#E66161] text-sm">NOTES: </span>
            <span className="text-[#E66161] text-sm">
              {/* Note content */}
              All accounts are to be paid within 7 days from receipt of invoice.
              To be paid by cheque or credit card or direct payment online. If
              account is not paid within 7 days the credits details supplied as
              confirmation of work undertaken will be charged the agreed quoted
              fee noted above.
            </span>
          </div>
        </div>

        {/* Footer message */}
        <div>
          <p className="mb-4  text-sm">
            <b>Congratulations on your recent purchase!</b> It has been our
            pleasure to serve you, and we hope we see you again soon.
          </p>
          {/* Signature */}
          <div className="invoice-signature text-center">
            <img
              src="../../../invoice-signature.svg"
              alt=""
              id="sign-img"
              className="h-8 "
            />
            <h6 className="mb-0 mt-3 ml-4 text-left">Authorized Sign</h6>
          </div>
        </div>
      </div>

      <div
        className="invoice-effect-top position-absolute end-0"
        style={{ transform: "rotate(180deg)", bottom: "-70px" }}
      >
        <svg
          className="w-[90%]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 764 182"
          width="764"
          height="182"
        >
          <title>&lt;Group&gt;</title>
          <g id="<Group>">
            <g id="<Group>">
              <path
                id="<Path>"
                className="fill-current text-[#eef0f7]" // Replace with Tailwind classes
                d="m-6.6 177.4c17.5 0.1 35.1 0 52.8-0.4 286.8-6.6 537.6-77.8 700.3-184.6h-753.1z"
              />
            </g>
            <g id="<Group>">
              <path
                id="<Path>"
                className="fill-current text-black" // Replace with Tailwind classes
                d="m-6.6 132.8c43.5 2.1 87.9 2.7 132.9 1.7 246.9-5.6 467.1-59.2 627.4-142.1h-760.3z"
              />
            </g>
            <g id="<Group>">
              <path
                id="<Path>"
                className="fill-current text-[#e40f15]" // Replace with Tailwind classes
                d="m-6.6 87.2c73.2 7.4 149.3 10.6 227.3 8.8 206.2-4.7 393.8-42.8 543.5-103.6h-770.8z"
              />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default InvoiceCard;
