import { useORG_CtxShowFiltersDesktop } from "../../../../../../../context/ORG_CtxShowFiltersDesktop_Provider"
import { CR_D_Results_FilterListMain } from "./CR_D_Results_FilterListMain.js"
import { CR_D_Results_HowMuchShowing } from "./CR_D_Results_HowMuchShowing.js"
import { CR_D_Results_Sortby } from "./CR_D_Results_Sortby.js"
import { CR_D_Results_FilterSortbyHeaderWrapper } from "./styles/CR_D_Results_FilterSortbyHeaderWrapper.js"

export const CR_D_Results_FilterSortbyHeader = ({ refUserViewShowFullMapButton, refUserViewShowFullMapFilter }) => {
  const { ORGShowFullMapFilter } = useORG_CtxShowFiltersDesktop()

  return (
    <CR_D_Results_FilterSortbyHeaderWrapper
      ref={refUserViewShowFullMapButton}
      ORGShowFullMapFilter={ORGShowFullMapFilter}>
      <CR_D_Results_HowMuchShowing />

      <div>
        <CR_D_Results_FilterListMain refUserViewShowFullMapFilter={refUserViewShowFullMapFilter} />
        <CR_D_Results_Sortby />
      </div>
    </CR_D_Results_FilterSortbyHeaderWrapper>
  )
}
