import React, { useState } from "react";
import sellerImage from "../../../assets/images/admin/seller.png";
import Avatar from "../../components/Avatar";
import BusinessDetailsForm from "./BusinessDetailsForm";
import useMultiStepFormHook from "../../hooks/UseMultiStepFormHook";
import CategoriesForm from "./CategoriesForm";
import ProductsForm from "./ProductsForm";
import { useNavigate } from "react-router-dom";
export default function GettingStarted() {
  let stepsName = [
    {
      name: "Business Details",
      id: 1,
    },
    {
      name: "Categories",
      id: 2,
    },
    {
      name: "Products",
      id: 3,
    },
    {
      name: "Brands",
      id: 4,
    },
    {
      name: "Brand Varients",
      id: 5,
    },
    {
      name: "Product Overview",
      id: 6,
    },
  ];

  let INITIAL_VAL = {
    countryCode: "",
    contactNum: "",
    gstNumber: "",
    bussinessName: "",
    businessAddress: "",
    productName: "",
    productType: "",
    productValue: "",
    productCreator: "",
    productSize: "",
    categoryName: "",
    categoryType: "",
    categoryValue: "",
    categoryCreator: "",
    categoryItems: "",
  };

  const [formData, setFormData] = useState(INITIAL_VAL);

  function updateFields(fields) {
    setFormData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const {
    formSteps,
    currentStepIndex,
    prev,
    next,
    setCurrentStepIndex,
    isFirstStep,
    isLastStep,
  } = useMultiStepFormHook([
    <BusinessDetailsForm formData={formData} updateField={updateFields} />,
    <CategoriesForm formData={formData} updateField={updateFields} />,
    <ProductsForm formData={formData} updateField={updateFields} />,
  ]);

  let handleSubmit = (e) => {
    e.preventDefault();
    if (!isLastStep) return next();

    navigate("/admin/dashboard");
  };

  let navigate = useNavigate();
  console.log(currentStepIndex);

  let goTo = (id) => {
    console.log(id);
    setCurrentStepIndex(id - 1);
  };

  return (
    <>
      <div className="getting started  h-full bg-white rounded">
        <div className="formSteps flex items-center justify-center  h-[20%] mx-3">
          <ul className="flex gap-2  ">
            {stepsName.map((item, index) => {
              return (
                <li
                  key={index}
                  onClick={() => goTo(item.id)}
                  className={`text-xs font-semibold leading-5 tracking-wider cursor-pointer ${
                    currentStepIndex + 1 === item.id
                      ? "bg-[#E40F15] text-white"
                      : "bg-[#EBEBEB] "
                  } py-2 w-[12rem] text-center`}
                >
                  {item.name}
                </li>
              );
            })}
          </ul>
        </div>

        <form action="" onSubmit={handleSubmit}>
          <div className="formArea mx-3 grid grid-cols-12 ">
            <div className="image ml-2 col-span-4 ">
              <Avatar height={"20rem"} src={sellerImage} />
            </div>

            <div className="forms col-span-8 text-center place-items-center ">
              {formSteps[currentStepIndex]}
            </div>
          </div>

          <div className="buttons flex justify-end items-center gap-3 mx-5 pt-6">
            {!isFirstStep && (
              <button
                type="button"
                className="py-2 px-5 bg-red-500 hover:bg-red-600  rounded-md text-white font-normal tracking-wide text-md "
                onClick={prev}
              >
                Back
              </button>
            )}
            {
              <button
                type="submit"
                className={`py-2 px-5  ${
                  !isLastStep ? "bg-blue-500" : "bg-green-500"
                }  ${
                  !isLastStep ? "hover:bg-blue-600" : "hover:bg-green-600"
                }  rounded-md text-white font-normal tracking-wide text-md`}
              >
                {isLastStep ? "Submit" : "Next"}
              </button>
            }
          </div>
        </form>
      </div>
    </>
  );
}
