// components/Step4.tsx
import React from 'react';

interface StepProps {
  formData: Record<string, any>;
  updateFormData: (newData: Record<string, any>) => void;
}

const Step4: React.FC<StepProps> = ({ formData, updateFormData }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">Email ID</label>
      <input
        type="email"
        value={formData.email || ''}
        onChange={(e) => updateFormData({ email: e.target.value })}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />

      <label className="block text-sm font-medium text-gray-700 mt-4">Mobile no.</label>
      <div className="flex space-x-2">
        <select
          value={formData.countryCode || '+91'}
          onChange={(e) => updateFormData({ countryCode: e.target.value })}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="+91">+91</option>
          <option value="+1">+1</option>
          <option value="+44">+44</option>
          <option value="+61">+61</option>
          <option value="+81">+81</option>
        </select>
        <input
          type="text"
          value={formData.mobileNo || ''}
          onChange={(e) => updateFormData({ mobileNo: e.target.value })}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
    </div>
  );
};

export default Step4;
