// components/Step1.tsx
'use client'
// components/Step1.tsx
import React, { useEffect } from 'react';

interface StepProps {
  formData: Record<string, any>;
  updateFormData: (newData: Record<string, any>) => void;
}

const Step1: React.FC<StepProps> = ({ formData, updateFormData }) => {
  const options = [
    'Myself', 'My Son', 'My Daughter', 'My Brother', 'My Sister', 'My Friend', 'My Relative'
  ];

  const genders = ['Male', 'Female'];

  useEffect(() => {
    if (formData.profileFor === 'My Son' && formData.gender !== 'Male') {
      updateFormData({ gender: 'Male' });
    } else if (formData.profileFor === 'My Brother' && formData.gender !== 'Male') {
      updateFormData({ gender: 'Male' });
    } else if (formData.profileFor === 'My Daughter' && formData.gender !== 'Female') {
      updateFormData({ gender: 'Female' });
    } else if (formData.profileFor === 'My Sister' && formData.gender !== 'Female') {
      updateFormData({ gender: 'Female' });
    }else{
        updateFormData({ gender: '' });
    }
  }, [formData.profileFor]);

  return (
    <div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Profile For</label>
        <div className="flex flex-wrap gap-2">
          {options.map((option) => (
            <div
              key={option}
              className={`flex items-center p-2 border rounded cursor-pointer ${formData.profileFor === option ? 'border-blue-500' : 'border-gray-300'}`}
              onClick={() => updateFormData({ profileFor: option })}
            >
              <div className="w-4 h-4 mr-2 rounded-full border flex items-center justify-center">
                {formData.profileFor === option && <div className="w-2 h-2 bg-blue-500 rounded-full"></div>}
              </div>
              <span>{option}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
        <div className="flex gap-2">
          {genders.map((gender) => (
            <div
              key={gender}
              className={`flex items-center p-2 border rounded cursor-pointer ${formData.gender === gender ? 'border-blue-500' : 'border-gray-300'}`}
              onClick={() => updateFormData({ gender })}
            >
              <div className="w-4 h-4 mr-2 rounded-full border flex items-center justify-center">
                {formData.gender === gender && <div className="w-2 h-2 bg-blue-500 rounded-full"></div>}
              </div>
              <span>{gender}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Step1;
