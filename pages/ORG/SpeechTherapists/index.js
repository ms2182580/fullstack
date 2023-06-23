import { INDEX_D_STResults } from "../../../components/ORG/speech-therapists/second-page/desktop/INDEX_D_STResults"
import { INDEX_M_STResults } from "../../../components/ORG/speech-therapists/second-page/mobile/INDEX_M_STResults"
import { useCheckUserWidth } from "../../../context/CheckUserWidth"

/* 

!FH
ISOLATE DESKTOP AND MOBILE!

*/

const ORG_SPEECHTHERAPISTS_INDEX = () => {
  const { isMobile } = useCheckUserWidth()


  return (
    <>

      {isMobile === false ? (
        <>
          <INDEX_D_STResults />
        </>
      ) : (

        <>
          <INDEX_M_STResults />
        </>
      )}
    </>
  )
}

export default ORG_SPEECHTHERAPISTS_INDEX
