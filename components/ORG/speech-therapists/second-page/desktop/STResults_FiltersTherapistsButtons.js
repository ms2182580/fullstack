import { useORG_Ctx_ShowFiltersMobile } from "../../../../../context/ORG_Ctx_ShowFiltersMobile"
import { useWidthWindow1024 } from "../../../../../utils/useWidthWindow1024"
import { STFilterSorbyHeaderMobile } from "../mobile/STFilterSorbyHeaderMobile"
import { STResults_Choisepath } from "../STResults_Choisepath"
import { SpeechtherapistFinalButtons } from "../STResults_FinalButtons"
import { STResults_FilterSorbyHeaderDesktop } from "./STResults_FilterSorbyHeaderDesktop"
import { STResults_Map } from "./STResults_Map"
import { STFiltersTherapistsButtonsWrapper } from "./styles/STFiltersTherapistsButtonsWrapper"

export const STResults_FiltersTherapistsButtons = ({ widthWindow }) => {
  const { mustShowFiltersMobile } = useORG_Ctx_ShowFiltersMobile()
  const { isMobile } = useWidthWindow1024()
  return (
    <STFiltersTherapistsButtonsWrapper>
      {isMobile === false ? (
        <>
          <STResults_FilterSorbyHeaderDesktop />
          
        </>
      ) : (
        <>
          <STFilterSorbyHeaderMobile/>
        </>
      )}
      
      
      

      {mustShowFiltersMobile === false ? (
        <>
          <div>
            <STResults_Choisepath  />

            <STResults_Map />
          </div>

          <SpeechtherapistFinalButtons widthWindow={widthWindow} />
        </>
      ) : null}
    </STFiltersTherapistsButtonsWrapper>
  )
}

