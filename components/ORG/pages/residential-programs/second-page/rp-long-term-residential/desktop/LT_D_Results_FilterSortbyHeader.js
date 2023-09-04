import { useORG_CtxShowFiltersDesktop } from "../../../../../../../context/ORG_CtxShowFiltersDesktop_Provider"
import { LT_D_Results_FilterListMain } from "./LT_D_Results_FilterListMain.js"
import { LT_D_Results_HowMuchShowing } from "./LT_D_Results_HowMuchShowing.js"
import { LT_D_Results_Sortby } from "./LT_D_Results_Sortby.js"
import { LT_D_Results_FilterSortbyHeaderWrapper } from "./styles/LT_D_Results_FilterSortbyHeaderWrapper.js"

export const LT_D_Results_FilterSortbyHeader = ({ refUserViewShowFullMapButton, refUserViewShowFullMapFilter }) => {
  const { ORGShowFullMapFilter } = useORG_CtxShowFiltersDesktop()

  return (
    <LT_D_Results_FilterSortbyHeaderWrapper
      ref={refUserViewShowFullMapButton}
      ORGShowFullMapFilter={ORGShowFullMapFilter}>
      <LT_D_Results_HowMuchShowing />

      <div>
        <LT_D_Results_FilterListMain refUserViewShowFullMapFilter={refUserViewShowFullMapFilter} />
        <LT_D_Results_Sortby />
      </div>
    </LT_D_Results_FilterSortbyHeaderWrapper>
  )
}
