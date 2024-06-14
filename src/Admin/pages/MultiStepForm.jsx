import React from "react";
import { useState } from "react";
import useMultiStepFormHook from "../hooks/UseMultiStepFormHook";
import { useNavigate } from "react-router-dom";
import KycForm from "./kycForm";
import PersonalinfoForm from "./PersonalinfoForm";
import BusinessInfoForm from "./BusinessInfoForm";
import BookingInfoForm from "./BookingInfoForm";
const MultiStepForm = () => {
  let stepsName = [
    {
      name: "KYC Information",
      id: 1,
    },
    {
      name: "Personal Information",
      id: 2,
    },
    {
      name: "Business Information",
      id: 3,
    },
    {
      name: "Banking Information",
      id: 4,
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
    <KycForm formData={formData} updateField={updateFields} />,
    <PersonalinfoForm formData={formData} updateField={updateFields} />,
    <BusinessInfoForm formData={formData} updateField={updateFields} />,
    <BookingInfoForm formData={formData} updateField={updateFields} />,
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
    <div>
      <div className="items-center justify-center mx-3">
        <ul className="flex gap-4  ">
          {stepsName.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => goTo(item.id)}
                className={`text-sm font-medium leading-5  rounded tracking-wider cursor-pointer ${
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
          <div className="forms col-span-12 text-center place-items-center ">
            {formSteps[currentStepIndex]}
          </div>
        </div>

        <div className="buttons flex justify-end items-center gap-3 mx-5 pt-6">
          {!isFirstStep && (
            <button
              type="button"
              className="py-2 px-4 bg-[#E40F15] hover:bg-black   text-white font-normal rounded  tracking-wide text-medium "
              onClick={prev}
            >
              Back
            </button>
          )}
          {
            <button
              type="submit"
              className={`py-2 px-4  ${
                !isLastStep ? "bg-[#3762EA]" : "bg-[#22C55E]"
              }  ${
                !isLastStep ? "hover:bg-black" : "hover:bg-black"
              }  rounded-md text-white font-normal tracking-wide text-md`}
            >
              {isLastStep ? "Submit" : "Next"}
            </button>
          }
        </div>
      </form>
    </div>
  );
};

export default MultiStepForm;
