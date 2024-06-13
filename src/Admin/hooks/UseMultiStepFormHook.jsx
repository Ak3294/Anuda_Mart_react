import React, { useState } from "react";

export default function useMultiStepFormHook(formSteps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  function next() {
    setCurrentStepIndex((step) => {
      if (step >= formSteps.length - 1) return step;
      return step + 1;
    });
  }

  function prev() {
    setCurrentStepIndex((step) => {
      if (step <= 0) return step;
      return step - 1;
    });
  }

  function gotoIndex(index) {
    setCurrentStepIndex(index);
  }

  return {
    currentStepIndex,
    formSteps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === formSteps.length - 1,
    gotoIndex,
    next,
    prev,
    setCurrentStepIndex,
  };
}
