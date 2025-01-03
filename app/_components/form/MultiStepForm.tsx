// components/MultiStepForm.tsx
'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import useMultiStepForm from '../../_hooks/useMultiStepForm';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';

const MultiStepForm: React.FC = () => {
  const [formData, setFormData] = useState<Record<string, any>>({});
  const router = useRouter();
  const updateFormData = (newData: Record<string, any>) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  const steps = [
    <Step1 formData={formData} updateFormData={updateFormData} />,
    <Step2 formData={formData} updateFormData={updateFormData} />,
    <Step3 formData={formData} updateFormData={updateFormData} />,
    <Step4 formData={formData} updateFormData={updateFormData} />,
  ];

  const { currentStepIndex, step, next, back, isFirstStep, isLastStep } = useMultiStepForm(steps);

  const [isNextDisabled, setIsNextDisabled] = useState(true);

  const isCurrentStepValid = () => {
    switch (currentStepIndex) {
      case 0:
        return formData.profileFor && formData.gender;
      case 1:
        return formData.firstName && formData.lastName && formData.day && formData.month && formData.year;
      case 2:
        return formData.religion && formData.community && formData.country;
      case 3:
        return formData.email && formData.mobileNo;
      default:
        return false;
    }
  };

  useEffect(() => {
    setIsNextDisabled(!isCurrentStepValid());
  }, [formData, currentStepIndex]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isCurrentStepValid()) {
      // Handle form submission
      console.log('Form submitted:', formData);
      // Optionally reset the form after submission
      // reset();
      router.push('/');
    }
  };

  return (
    <div className=" w-full mx-auto p-4 bg-white shadow-md rounded-lg">
      <form onSubmit={handleSubmit}>
        {step}
        <div className="flex justify-between mt-4">
          {!isFirstStep && (
            <button type="button" onClick={back} className="px-4 py-2 bg-gray-300 text-gray-700 rounded">
              Back
            </button>
          )}
          {!isLastStep && (
            <button type="button" onClick={next} disabled={isNextDisabled} className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50">
              Continue
            </button>
          )}
          {isLastStep && (
            <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default MultiStepForm;
