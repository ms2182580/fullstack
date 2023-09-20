import { INDEX_D_SLP_Results } from "../../../../components/ORG/pages/speech-therapists/second-page/st-speech-language-pathologists/desktop/INDEX_D_SLP_Results"
import { INDEX_M_STResults } from "../../../../components/ORG/pages/speech-therapists/second-page/st-speech-language-pathologists/mobile/INDEX_M_STResults"
import { useCheckUserWidth } from "../../../../context/CheckUserWidth"

export default function ORG_INDEX_ST_SpeechTherapists_Results() {
  const { isMobile } = useCheckUserWidth()

  return (
    <>
      {isMobile === false ? (
        <>
          <INDEX_D_SLP_Results />
        </>
      ) : (
        <>
          <INDEX_M_STResults />
        </>
      )}
    </>
  )
}
