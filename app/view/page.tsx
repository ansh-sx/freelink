'use client'
// pages/your-page.tsx
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import ProfileSection from '@/components/Templates/Simple'
import Spinner from '@/components/Base/Loading'
import { decodeData } from '@/utils/transformer'

const YourPage = () => {
  const router = useRouter()
  const [decodedData, setDecodedData] = useState<any>(null)

  useEffect(() => {
    if (router.isReady) {
      const acc = router.query.data
      if (acc) {
        const result = decodeData(acc as string)
        setDecodedData(result)
      }
    }
  }, [router.isReady, router.query.data])

  return (
    <div>
      {decodedData ? (
        <ProfileSection acc={decodedData} />
      ) : (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Spinner className="h-5 w-5" />
        </div>
      )}
    </div>
  )
}

export default YourPage;
