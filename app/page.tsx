// pages/editor.tsx
import { useState } from 'react'
import ProfileForm from '@/components/AppForm/Profile'
import SectionDivider from '@/components/AppForm/Hr'
import SocialLinksForm from '@/components/AppForm/SocialLinks'
import LinksForm from '@/components/AppForm/Links'
import PhonePreview from '@/components/AppForm/Preview'
import { encodeData } from '@/utils/transformer'

const EditorPage = () => {
  const [data, setData] = useState({
    n: '',
    d: '',
    i: '',
    f: '',
    t: '',
    ig: '',
    gh: '',
    tg: '',
    l: '',
    e: '',
    w: '',
    y: '',
    ls: [],
  })

  const prefillDemoData = () => {
    setData({
      n: 'John Snow',
      d: 'I’m John Snow, the king in the north. I know Nothing.',
      i: 'https://i.insider.com/56743fad72f2c12a008b6cc0',
      f: 'https://www.facebook.com/john_snow',
      t: 'https://twitter.com/john_snow',
      ig: 'https://www.instagram.com/john_snow',
      e: 'mail@john_snow.cc',
      gh: 'https://github.com/john_snow',
      tg: 'https://t.me/john_snow',
      w: '+918888888888',
      y: 'https://youtube.com/@john_snow',
      l: 'https://linkedin.com/john_snow',
      ls: [
        {
          l: 'My Website',
          i: 'ph:globe-duotone',
          u: 'https://example.com',
        },
        {
          l: 'Amazon wishlist',
          i: 'ant-design:amazon-outlined',
          u: 'https://amazon.in',
        },
        {
          l: 'React JS course',
          i: 'grommet-icons:reactjs',
          u: 'https://reactjs.org/',
        },
        {
          l: 'Donate for our cause',
          i: 'iconoir:donate',
          u: 'https://who.int',
        },
        {
          l: 'Download my resume',
          i: 'ph:file-pdf',
          u: 'https://google.com',
        },
      ],
    })
  }

  const publish = () => {
    const url = `${window.location.origin}/1?data=${encodeData(data)}`
    navigator.clipboard.writeText(url).then(() => {
      alert('Link copied to clipboard')
    })
  }

  return (
    <div className="h-screen grid grid-cols-3 divide-x">
      <div className="col-span-2 h-screen flex flex-col bg-slate-100">
        <div className="flex-1 overflow-y-auto p-8">
          <LinksForm
            name={data.n}
            desc={data.d}
            image={data.i}
            onChange={(updated: any) =>
              setData((prev) => ({ ...prev, ...updated }))
            }
          />
          <SectionDivider />
          <SocialLinksForm
            facebook={data.f}
            twitter={data.t}
            instagram={data.ig}
            github={data.gh}
            telegram={data.tg}
            linkedin={data.l}
            email={data.e}
            whatsapp={data.w}
            youtube={data.y}
            onChange={(updated: any) =>
              setData((prev) => ({ ...prev, ...updated }))
            }
          />
          <SectionDivider />
          <LinksForm
            links={data.ls}
            onChange={(ls: any[]) =>
              setData((prev) => ({ ...prev, ls }))
            }
          />
        </div>
        <div className="border-t bg-white flex items-center">
          <button
            onClick={prefillDemoData}
            className="h-12 flex items-center space-x-2 px-4 border-r text-xs font-medium bg-white text-slate-700"
          >
            <span>Add demo data</span>
            <i className="icon-[mdi--code-json] h-4 w-4" />
          </button>
          <button
            onClick={publish}
            className="h-12 flex items-center space-x-2 px-4 border-r text-xs font-medium bg-white text-slate-700"
          >
            <span>Publish</span>
            <i className="icon-[ph--paper-plane-tilt-bold] h-4 w-4" />
          </button>
          <a
            href="https://github.com/fayazara/onelink"
            target="_blank"
            className="h-12 flex items-center space-x-2 px-4 border-r text-xs font-medium bg-white text-slate-700"
          >
            <span>Github</span>
            <i className="icon-[mdi--github] h-4 w-4" />
          </a>
        </div>
      </div>
      <PhonePreview data={data} />
      <a
        href="https://twitter.com/fayazara"
        target="_blank"
        className="absolute bottom-0 right-0 bg-white rounded-tl-lg shadow px-4 py-1 font-medium text-sm text-gray-500"
      >
        Made by Ansh
      </a>
    </div>
  )
}

export default EditorPage
