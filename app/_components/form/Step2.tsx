// components/Step2.tsx
import React from 'react';

interface StepProps {
  formData: Record<string, any>;
  updateFormData: (newData: Record<string, any>) => void;
}

const Step2: React.FC<StepProps> = ({ formData, updateFormData }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">First Name</label>
      <input
        type="text"
        value={formData.firstName || ''}
        onChange={(e) => updateFormData({ firstName: e.target.value })}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />

      <label className="block text-sm font-medium text-gray-700 mt-4">Last Name</label>
      <input
        type="text"
        value={formData.lastName || ''}
        onChange={(e) => updateFormData({ lastName: e.target.value })}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />

      <label className="block text-sm font-medium text-gray-700 mt-4">Date of Birth</label>
      <div className="flex space-x-2">
        <input
          type="text"
          placeholder="DD"
          value={formData.day || ''}
          onChange={(e) => updateFormData({ day: e.target.value })}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        <input
          type="text"
          placeholder="MM"
          value={formData.month || ''}
          onChange={(e) => updateFormData({ month: e.target.value })}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        <input
          type="text"
          placeholder="YYYY"
          value={formData.year || ''}
          onChange={(e) => updateFormData({ year: e.target.value })}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
    </div>
  );
};

export default Step2;
