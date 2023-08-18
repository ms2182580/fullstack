import { useORG_CtxShowFiltersDesktop } from "../../../../../../../context/ORG_CtxShowFiltersDesktop_Provider"
import { DAY_D_Results_FilterListMain } from "./DAY_D_Results_FilterListMain.js"
import { DAY_D_Results_HowMuchShowing } from "./DAY_D_Results_HowMuchShowing.js"
import { DAY_D_Results_Sortby } from "./DAY_D_Results_Sortby.js"
import { DAY_D_Results_FilterSortbyHeaderWrapper } from "./styles/DAY_D_Results_FilterSortbyHeaderWrapper.js"

export const DAY_D_Results_FilterSortbyHeader = ({ refUserViewShowFullMapButton, refUserViewShowFullMapFilter }) => {
  const { ORGShowFullMapFilter } = useORG_CtxShowFiltersDesktop()

  return (
    <DAY_D_Results_FilterSortbyHeaderWrapper
      ref={refUserViewShowFullMapButton}
      ORGShowFullMapFilter={ORGShowFullMapFilter}>
      <DAY_D_Results_HowMuchShowing />

      <div>
        <DAY_D_Results_FilterListMain refUserViewShowFullMapFilter={refUserViewShowFullMapFilter} />
        <DAY_D_Results_Sortby />
      </div>
    </DAY_D_Results_FilterSortbyHeaderWrapper>
  )
}
