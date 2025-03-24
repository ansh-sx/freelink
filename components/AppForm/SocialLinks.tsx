'use client';

import { FC } from 'react';
import { Icon } from '@iconify/react';

interface SocialLinksProps {
  facebook: string;
  twitter: string;
  instagram: string;
  linkedin: string;
  github: string;
  telegram: string;
  whatsapp: string;
  youtube: string;
  email: string;
  onChange: (field: string, value: string) => void;
}

const SocialLinksForm: FC<SocialLinksProps> = ({
  facebook,
  twitter,
  instagram,
  linkedin,
  github,
  telegram,
  whatsapp,
  youtube,
  email,
  onChange,
}) => {
  const socialFields = [
    { name: 'facebook', label: 'Facebook', icon: 'ph:facebook-logo-duotone', placeholder: 'https://fb.com/elonmusk', value: facebook },
    { name: 'twitter', label: 'Twitter', icon: 'ph:twitter-logo-duotone', placeholder: 'https://twitter.com/elonmusk', value: twitter },
    { name: 'instagram', label: 'Instagram', icon: 'ph:instagram-logo-duotone', placeholder: 'https://instagram.com/elonmusk', value: instagram },
    { name: 'linkedin', label: 'Linkedin', icon: 'ph:linkedin-logo-duotone', placeholder: 'https://linkedin.com/elonmusk', value: linkedin },
    { name: 'github', label: 'Github', icon: 'ph:github-logo-duotone', placeholder: 'https://github.com/elonmusk', value: github },
    { name: 'telegram', label: 'Telegram', icon: 'ph:telegram-logo-duotone', placeholder: 'https://t.me/elonmusk', value: telegram },
    { name: 'whatsapp', label: 'Whatsapp', icon: 'ph:whatsapp-logo-duotone', placeholder: '+9190000000000', value: whatsapp },
    { name: 'youtube', label: 'Youtube', icon: 'ph:youtube-logo-duotone', placeholder: 'https://youtube.com/elonmusk', value: youtube },
    { name: 'email', label: 'Email', icon: 'ph:envelope-duotone', placeholder: 'elonmusk@geemail.com', value: email },
  ];

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold text-gray-800">Social Links</h2>
      <p className="text-sm text-gray-500 mb-4">Add some social media links</p>

      <div className="shadow sm:overflow-hidden sm:rounded-md">
        <div className="grid grid-cols-2 gap-8 bg-white px-4 py-5 sm:p-6">
          {socialFields.map((field) => (
            <div key={field.name}>
              <label htmlFor={field.name} className="block text-sm font-medium text-gray-700">
                {field.label}
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
                  <Icon icon={field.icon} className="w-5 h-5" />
                </span>
                <input
                  type="search"
                  name={field.name}
                  id={field.name}
                  value={field.value}
                  onChange={(e) => onChange(field.name, e.target.value)}
                  className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder={field.placeholder}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialLinksForm;
