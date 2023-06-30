import { INDEX_D_STDetail } from "../../../components/ORG/speech-therapists/third-page/dekstop/INDEX_D_STDetail"
import { useCheckUserWidth } from "../../../context/CheckUserWidth"
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

  // const { STDataThirdpage_D } = useORG_Ctx_STDataThirdpage_D()
  // const { STDataThirdpage_M } = useORG_Ctx_STDataThirdpage_M()

  // const route = useRouter()

  const { isMobile } = useCheckUserWidth()

  // useEffect(() => {
  //   if ((STDataThirdpage_D === "" && isMobile === false) || (STDataThirdpage_M === "" && isMobile)) {
  //     route.push("/ORG/SpeechTherapists")
  //     return
  //   }
  // }, [STDataThirdpage_D, STDataThirdpage_M, isMobile])

  return (
    <>
      {isMobile === false ? (
        <>

          <INDEX_D_STDetail />
        </>
      ) : (
        <>
          <p>...</p>
          <p>INDEX_M_STDetail</p>
          <p>...</p>
        </>
      )}
    </>
  )
}

export default SPDetail
