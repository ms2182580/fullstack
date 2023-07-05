import { INDEX_D_STDetail } from "../../../components/ORG/speech-therapists/third-page/dekstop/INDEX_D_STDetail"
import { INDEX_M_STDetail } from "../../../components/ORG/speech-therapists/third-page/mobile/INDEX_M_STDetail"
import { useCheckUserWidth } from "../../../context/CheckUserWidth"
const SPDetail = () => {
  const { isMobile } = useCheckUserWidth()

  /* 
  !FH0
  Clean all the desktop and mobile from each other
  Finish the name of all the components
  */


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
