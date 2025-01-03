// components/Step3.tsx
import React from 'react';

interface StepProps {
  formData: Record<string, any>;
  updateFormData: (newData: Record<string, any>) => void;
}

const Step3: React.FC<StepProps> = ({ formData, updateFormData }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">Religion</label>
      <select
        value={formData.religion || ''}
        onChange={(e) => updateFormData({ religion: e.target.value })}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        <option value="" disabled>Select your religion</option>
        <option value="Hindu">Hindu</option>
        <option value="Muslim">Muslim</option>
        <option value="Christian">Christian</option>
        <option value="Sikh">Sikh</option>
        <option value="Buddhist">Buddhist</option>
        <option value="Jain">Jain</option>
        <option value="Other">Other</option>
      </select>

      <label className="block text-sm font-medium text-gray-700 mt-4">Community</label>
      <select
        value={formData.community || ''}
        onChange={(e) => updateFormData({ community: e.target.value })}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        <option value="" disabled>Select your community</option>
        <option value="Community1">Community1</option>
        <option value="Community2">Community2</option>
        <option value="Community3">Community3</option>
      </select>
      <div className="text-xs text-gray-500 mt-1">Please select the native language that best represents your family background.</div>

      <label className="block text-sm font-medium text-gray-700 mt-4">Country</label>
      <select
        value={formData.country || ''}
        onChange={(e) => updateFormData({ country: e.target.value })}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        <option value="India">India</option>
        <option value="USA">USA</option>
        <option value="Canada">Canada</option>
        <option value="UK">UK</option>
        <option value="Australia">Australia</option>
      </select>
    </div>
  );
};

export default Step3;
