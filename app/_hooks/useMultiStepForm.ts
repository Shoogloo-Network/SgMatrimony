// hooks/useMultiStepForm.ts
import { useState } from 'react';

const useMultiStepForm = (steps: React.ReactNode[]) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const next = () => {
    setCurrentStepIndex((i) => (i >= steps.length - 1 ? i : i + 1));
  };

  const back = () => {
    setCurrentStepIndex((i) => (i <= 0 ? i : i - 1));
  };

  const goToStep = (index: number) => {
    if (index >= 0 && index < steps.length) {
      setCurrentStepIndex(index);
    }
  };

  const reset = () => {
    setCurrentStepIndex(0);
  };

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    next,
    back,
    goToStep,
    reset,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
  };
};

export default useMultiStepForm;
