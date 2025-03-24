'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import ProfileSection from '@/components/Templates/Simple'
import Spinner from '@/components/Base/Loading'
import { decodeData } from '@/utils/transformer'

const ViewPage = () => {
  const router = useRouter()
  const [decodedData, setDecodedData] = useState<any>(null)

  useEffect(() => {
    // This workaround fetches query params from the URL manually in App Router
    const searchParams = new URLSearchParams(window.location.search)
    const acc = searchParams.get('data')
    if (acc) {
      const result = decodeData(acc)
      setDecodedData(result)
    }
  }, [])

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

export default ViewPage
