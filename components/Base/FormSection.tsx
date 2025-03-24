// components/FormSection.tsx
import React from 'react';

interface FormSectionProps {
  title?: string;
  description?: string;
  helpertext?: React.ReactNode;
  children: React.ReactNode;
}

const FormSection: React.FC<FormSectionProps> = ({ title = '', description = '', helpertext, children }) => {
  return (
    <div className="md:grid md:grid-cols-3 md:gap-6">
      <div className="md:col-span-1">
        <div className="px-4 sm:px-0 sticky top-0">
          <h3 className="text-lg font-medium leading-6 text-gray-900">{title}</h3>
          <p className="mt-1 text-sm text-gray-600">{description}</p>
          {helpertext && <div>{helpertext}</div>}
        </div>
      </div>
      <div className="mt-5 md:col-span-2 md:mt-0 relative">{children}</div>
    </div>
  );
};

export default FormSection;
