// components/ProfileForm.tsx
'use client';
import React from 'react';

interface ProfileFormProps {
  name: string;
  desc: string;
  image: string;
  onChange: (field: 'name' | 'desc' | 'image', value: string) => void;
}

const ProfileForm: React.FC<ProfileFormProps> = ({ name, desc, image, onChange }) => {
  return (
    <BaseFormSection
      title="Profile"
      description="Some public information about you"
    >
      <div className="shadow sm:overflow-hidden sm:rounded-md">
        <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              autoComplete="given-name"
              value={name}
              onChange={(e) => onChange('name', e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="about" className="block text-sm font-medium text-gray-700">
              About yourself
            </label>
            <div className="mt-1">
              <textarea
                id="about"
                name="about"
                rows={3}
                placeholder="I am an astronaut"
                maxLength={100}
                value={desc}
                onChange={(e) => onChange('desc', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm placeholder-slate-400"
              />
            </div>
          </div>
          <div className="flex-grow col-span-6 sm:col-span-3">
            <label htmlFor="photo-url" className="block text-sm font-medium text-gray-700">
              Photo Url
            </label>
            <input
              type="text"
              name="photo-url"
              id="photo-url"
              value={image}
              onChange={(e) => onChange('image', e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>
      </div>
    </BaseFormSection>
  );
};

export default ProfileForm;
