import { useRouter } from "next/router"
import { useState } from "react"
import { useEffect } from "react"
import { SpeechtherapistDetail } from "../../../components/ORG/speech-therapists/SpeechtherapistDetail"
const SPDetail = () => {
  const [loaded, setLoaded] = useState(false)
  const router = useRouter()
  
  useEffect(() => {
    if (router.isReady) {
      setLoaded(true)
    }
  }, [router.isReady])

  if (!loaded) {
    return null
  }

  // const goBack = () => {
  //   router.back()
  // }

  return (
    <>
      <SpeechtherapistDetail />
    </>
  )
}

export default SPDetail
