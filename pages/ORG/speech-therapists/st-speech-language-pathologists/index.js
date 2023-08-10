import { INDEX_D_SpeechLanguagePathologists_Results } from "../../../../components/ORG/pages/speech-therapists/second-page/st-speech-language-pathologists/desktop/INDEX_D_SpeechLanguagePathologists_Results";
import { useCheckUserWidth } from "../../../../context/CheckUserWidth";

export default function ORG_INDEX_ST_SpeechLanguagePathologists_Results() {
  const { isMobile } = useCheckUserWidth()

  return (
    <>
      {isMobile === false ? (
        <>
          <INDEX_D_SpeechLanguagePathologists_Results />
        </>
      ) : (
        <>{/* Mobile component. We dont have design for this in this path */}</>
      )}
    </>
  )

}