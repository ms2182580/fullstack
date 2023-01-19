import SpeechTherapistListFilter from "./SpeechTherapistListFilter"
import { SpeechtherapistFinalButtons } from "./SpeechtherapistFinalButtons"
import STFiltersTherapistsButtonsWrapper from "./styles/AllSpeechtherapistsWrapper"
import { SpeechtherapistList } from "./EverySingleSpeechTherapist"
import { useORG_Ctx_ShowFiltersMobile } from "../../../context/ORG_Ctx_ShowFiltersMobile"

const STFiltersTherapistsButtons = ({ widthWindow }) => {
  const { mustShowFiltersMobile } = useORG_Ctx_ShowFiltersMobile()
  return (
    <STFiltersTherapistsButtonsWrapper>
      <SpeechTherapistListFilter widthWindow={widthWindow} />

      {mustShowFiltersMobile === false ? (
        <>
          <SpeechtherapistList widthWindow={widthWindow} />

          <SpeechtherapistFinalButtons widthWindow={widthWindow} />
        </>
      ) : null}
      
      
      
      
    </STFiltersTherapistsButtonsWrapper>
  )
}

export default STFiltersTherapistsButtons
