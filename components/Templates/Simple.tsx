// components/ProfileSection.tsx
import React from 'react';
import ExternalLink from '@/components/ExternalLink';
import { Icon } from '@iconify/react'; // Adjust import based on your Icon component location

interface ExternalLinkItem {
  l: string;
  i?: string;
  u: string;
}

interface ProfileProps {
  acc: {
    i?: string;
    n?: string;
    d?: string;
    f?: string;
    t?: string;
    ig?: string;
    m?: string;
    tg?: string;
    w?: string;
    y?: string;
    e?: string;
    gh?: string;
    l?: string;
    ls?: ExternalLinkItem[];
  };
}

const ProfileSection: React.FC<ProfileProps> = ({ acc }) => {
  const allSocialLinksAreEmpty =
    !acc.f &&
    !acc.t &&
    !acc.ig &&
    !acc.m &&
    !acc.tg &&
    !acc.w &&
    !acc.y &&
    !acc.e &&
    !acc.gh &&
    !acc.l;

  return (
    <main className="p-4 bg-white h-full w-full space-y-8 pt-12 max-w-lg mx-auto">
      <div className="text-center">
        {acc.i && (
          <div className="h-20 w-20 rounded-full overflow-hidden ring ring-slate-200 mx-auto">
            <img src={acc.i} alt="name" className="h-full w-full object-cover" />
          </div>
        )}
        {acc.n && <h1 className="text-2xl font-bold mt-4 text-slate-800">{acc.n}</h1>}
        {acc.d && <p className="text-sm mt-2 text-slate-600">{acc.d}</p>}
      </div>

      {!allSocialLinksAreEmpty && (
        <div className="flex items-center justify-center flex-wrap">
          {acc.f && (
            <span className="p-1">
              <a href={acc.f} target="_blank" rel="noopener noreferrer">
                <Icon name="ph:facebook-logo-duotone" className="h-6 w-6" />
              </a>
            </span>
          )}
          {acc.t && (
            <span className="p-1">
              <a href={acc.t} target="_blank" rel="noopener noreferrer">
                <Icon name="ph:twitter-logo-duotone" className="h-6 w-6" />
              </a>
            </span>
          )}
          {acc.ig && (
            <span className="p-1">
              <a href={acc.ig} target="_blank" rel="noopener noreferrer">
                <Icon name="ph:instagram-logo-duotone" className="h-6 w-6" />
              </a>
            </span>
          )}
          {acc.m && (
            <span className="p-1">
              <a href={acc.m} target="_blank" rel="noopener noreferrer">
                <Icon name="ph:envelope-duotone" className="h-6 w-6" />
              </a>
            </span>
          )}
          {acc.tg && (
            <span className="p-1">
              <a href={acc.tg} target="_blank" rel="noopener noreferrer">
                <Icon name="ph:telegram-logo-duotone" className="h-6 w-6" />
              </a>
            </span>
          )}
          {acc.w && (
            <span className="p-1">
              <a href={`https://wa.me/${acc.w}`} target="_blank" rel="noopener noreferrer">
                <Icon name="ph:whatsapp-logo-duotone" className="h-6 w-6" />
              </a>
            </span>
          )}
          {acc.y && (
            <span className="p-1">
              <a href={acc.y} target="_blank" rel="noopener noreferrer">
                <Icon name="ph:youtube-logo-duotone" className="h-6 w-6" />
              </a>
            </span>
          )}
          {acc.e && (
            <span className="p-1">
              <a href={`mailto:${acc.e}`} target="_blank" rel="noopener noreferrer">
                <Icon name="ph:envelope-duotone" className="h-6 w-6" />
              </a>
            </span>
          )}
          {acc.gh && (
            <span className="p-1">
              <a href={acc.gh} target="_blank" rel="noopener noreferrer">
                <Icon name="ph:github-logo-duotone" className="h-6 w-6" />
              </a>
            </span>
          )}
          {acc.l && (
            <span className="p-1">
              <a href={acc.l} target="_blank" rel="noopener noreferrer">
                <Icon name="ph:linkedin-logo-duotone" className="h-6 w-6" />
              </a>
            </span>
          )}
        </div>
      )}

      <ul className="space-y-2">
        {acc.ls?.map((link, id) => (
          <ExternalLink key={id} label={link.l} icon={link.i} url={link.u} />
        ))}
      </ul>
    </main>
  );
};

export default ProfileSection;
