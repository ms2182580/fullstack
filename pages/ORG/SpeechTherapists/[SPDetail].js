import { useRouter } from "next/router"
import { useEffect } from "react"
import { INDEX_D_STDetail } from "../../../components/ORG/speech-therapists/third-page/dekstop/INDEX_D_STDetail"
import { INDEX_M_STDetail } from "../../../components/ORG/speech-therapists/third-page/mobile/INDEX_M_STDetail"
import { useCheckUserWidth } from "../../../context/CheckUserWidth"
import { useORG_Ctx_STDataThirdpage_D } from "../../../context/ORG_Ctx_STDataThirdpageDesktop_Provider"
import { useORG_Ctx_STDataThirdpage_M } from "../../../context/ORG_Ctx_STDataThirdpageMobile_Provider"
const SPDetail = () => {
  // const [loaded, setLoaded] = useState(false)
  // const router = useRouter()

  // useEffect(() => {
  //   if (router.isReady) {
  //     setLoaded(true)
  //   }
  // }, [router.isReady])

  // if (!loaded) {
  //   return null
  // }

  // const goBack = () => {
  //   router.back()
  // }

  const { STDataThirdpage_D } = useORG_Ctx_STDataThirdpage_D()
  const { STDataThirdpage_M } = useORG_Ctx_STDataThirdpage_M()

  const route = useRouter()

  const { isMobile } = useCheckUserWidth()

  // useLayoutEffect(() => {
  //   if (STDataThirdpage_D === "" && isMobile === false) {
  //     route.push("/ORG/SpeechTherapists")
  //     return
  //   }
  // }, [isMobile])


  useEffect(() => {
    if (STDataThirdpage_M === "" && isMobile) {
      route.push("/ORG/SpeechTherapists")
      return
    }
  }, [])
  // useEffect(() => {
  //   if (STDataThirdpage_M === "" && isMobile) {
  //     route.push("/ORG/SpeechTherapists")
  //     return
  //   }
  // }, [])

  return (
    <>
      {isMobile === false ? (
        <>
          <INDEX_D_STDetail />
        </>
      ) : (
        <>
          <INDEX_M_STDetail />
        </>
      )}
    </>
  )
}

export default SPDetail
