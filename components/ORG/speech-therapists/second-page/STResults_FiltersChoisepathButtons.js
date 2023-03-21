import { useORG_Ctx_ShowFiltersMobile } from "../../../../context/ORG_Ctx_ShowFiltersMobile"
import { useWidthWindow1024 } from "../../../../utils/useWidthWindow1024"
import { STResults_FilterSorbyHeaderDesktop } from "./desktop/STResults_FilterSorbyHeaderDesktop"
import { STResults_Map } from "./desktop/STResults_Map"
import { STResults_FilterSorbyHeaderMobile } from "./mobile/STResults_FilterSorbyHeaderMobile"
import { STResults_Choisepath } from "./STResults_Choisepath"
import { STResults_FinalButtons } from './STResults_FinalButtons.js'
import { STResults_FiltersChoisepathButtonsWrapper } from "./styles/STResults_FiltersChoisepathButtonsWrapper"


export const STResults_FiltersChoisepathButtons = ({ widthWindow }) => {
  const { mustShowFiltersMobile } = useORG_Ctx_ShowFiltersMobile()
  const { isMobile } = useWidthWindow1024()
  return (
    <STResults_FiltersChoisepathButtonsWrapper>
      {isMobile === false ? (
        <>
          <STResults_FilterSorbyHeaderDesktop />
          
        </>
      ) : (
        <>
          <STResults_FilterSorbyHeaderMobile/>
        </>
      )}
      
      
      

      {mustShowFiltersMobile === false ? (
        <>
          <div>
            <STResults_Choisepath  />

            <STResults_Map />
          </div>

          <STResults_FinalButtons widthWindow={widthWindow} />
          
        </>
      ) : null}
    </STResults_FiltersChoisepathButtonsWrapper>
  )
}

