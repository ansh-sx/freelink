// components/LinkItem.tsx
import React from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react'; // Added Iconify

interface LinkItemProps {
  label: string;
  url: string;
  icon?: string;
}

const LinkItem: React.FC<LinkItemProps> = ({ label, url, icon = 'ph:link-simple' }) => {
  if (!label || !url) return null;

  return (
    <li>
      <Link href={url} target="_blank">
        <dt className="flex items-center space-x-2 p-1 -m-1 rounded-xl hover:bg-slate-100 bg-slate-50">
          <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-lg text-slate-500">
            {icon ? (
              <Icon name={icon} className="h-5 w-5" />
            ) : (
              <Icon name="ph:link-simple" className="h-5 w-5" />
            )}
          </div>
          <div className="w-full flex-grow min-w-0">
            <p className="font-medium text-sm leading-6 text-gray-900">
              {label}
            </p>
          </div>
        </dt>
      </Link>
    </li>
  );
};

export default LinkItem;
