// components/PhonePreview.tsx
'use client';
import React from 'react';
import ProfileSection from '@/components/Templates/Simple'

interface PhonePreviewProps {
  data: any;
}

const PhonePreview: React.FC<PhonePreviewProps> = ({ data }) => {
  return (
    <div className="h-screen grid place-items-center">
      <div className="h-[729px] w-[340px] overflow-y-auto rounded-[3rem] ring-8 ring-slate-800 overflow-hidden">
        <ProfileSection acc={data} />
      </div>
    </div>
  );
};

export default PhonePreview;
