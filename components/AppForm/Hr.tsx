// components/SectionDivider.tsx
import React from 'react';

const SectionDivider: React.FC = () => {
  return (
    <div className="hidden sm:block" aria-hidden="true">
      <div className="py-5">
        <div className="border-t border-gray-200" />
      </div>
    </div>
  );
};

export default SectionDivider;
