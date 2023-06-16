import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { STDetail_Main } from "../../../components/ORG/speech-therapists/third-page/STDetail_Main"
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
      <STDetail_Main />
    </>
  )
}

export default SPDetail

/* 
!FH
Make here the checking if the user is mobile or desktop. The idea is: check this in a page level, not in a component level

  const { isMobile } = useWidthWindow1024()
*/
