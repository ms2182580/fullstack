import { useORG_Ctx_ShowFiltersMobile } from "../../../context/ORG_Ctx_ShowFiltersMobile"
import { useWidthWindow1024 } from "../../../utils/useWidthWindow1024"
import { SpeechtherapistList } from "./EverySingleSpeechTherapist"
import { SpeechTherapistMap } from "./second-page/desktop/SpeechTherapistMap.js"
import { STResultsHeader } from "./second-page/desktop/STResultsHeader.js"

import { SpeechtherapistFinalButtons } from "./SpeechtherapistFinalButtons"
import STFiltersTherapistsButtonsWrapper from "./styles/AllSpeechtherapistsWrapper"

const STFiltersTherapistsButtons = ({ widthWindow }) => {
  const { mustShowFiltersMobile } = useORG_Ctx_ShowFiltersMobile()
  const { isMobile } = useWidthWindow1024()
  return (
    <STFiltersTherapistsButtonsWrapper>
      {isMobile === false ? (
        <>
          <STResultsHeader />
        </>
      ) : null}

      {mustShowFiltersMobile === false ? (
        <>
          <div>
            <SpeechtherapistList widthWindow={widthWindow} />

            <SpeechTherapistMap />
          </div>

          <SpeechtherapistFinalButtons widthWindow={widthWindow} />
        </>
      ) : null}
    </STFiltersTherapistsButtonsWrapper>
  )
}

export default STFiltersTherapistsButtons
