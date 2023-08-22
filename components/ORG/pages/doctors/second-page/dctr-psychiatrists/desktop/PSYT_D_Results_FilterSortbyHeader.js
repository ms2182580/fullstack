import { useORG_CtxShowFiltersDesktop } from "../../../../../../../context/ORG_CtxShowFiltersDesktop_Provider"
import { PSYT_D_Results_FilterListMain } from "./PSYT_D_Results_FilterListMain.js"
import { PSYT_D_Results_HowMuchShowing } from "./PSYT_D_Results_HowMuchShowing.js"
import { PSYT_D_Results_Sortby } from "./PSYT_D_Results_Sortby.js"
import { PSYT_D_Results_FilterSortbyHeaderWrapper } from "./styles/PSYT_D_Results_FilterSortbyHeaderWrapper.js"

export const PSYT_D_Results_FilterSortbyHeader = ({ refUserViewShowFullMapButton, refUserViewShowFullMapFilter }) => {
  const { ORGShowFullMapFilter } = useORG_CtxShowFiltersDesktop()

  return (
    <PSYT_D_Results_FilterSortbyHeaderWrapper
      ref={refUserViewShowFullMapButton}
      ORGShowFullMapFilter={ORGShowFullMapFilter}>
      <PSYT_D_Results_HowMuchShowing />

      <div>
        <PSYT_D_Results_FilterListMain refUserViewShowFullMapFilter={refUserViewShowFullMapFilter} />
        <PSYT_D_Results_Sortby />
      </div>
    </PSYT_D_Results_FilterSortbyHeaderWrapper>
  )
}
