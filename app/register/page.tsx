// pages/register.tsx
import React from 'react';
import MultiStepForm from '../_components/form/MultiStepForm';

const RegisterPage: React.FC = () => {
  return (
    <div className=" w-full flex items-center justify-center bg-gray-50 py-4 px-4 sm:px-6 lg:px-8 mb-4">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
        </div>
        <MultiStepForm />
      </div>
    </div>
  );
};

export default RegisterPage;
