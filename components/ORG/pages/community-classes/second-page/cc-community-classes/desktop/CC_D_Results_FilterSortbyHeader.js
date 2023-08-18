import { useORG_CtxShowFiltersDesktop } from "../../../../../../../context/ORG_CtxShowFiltersDesktop_Provider"
import { CC_D_Results_FilterListMain } from "./CC_D_Results_FilterListMain.js"
import { CC_D_Results_HowMuchShowing } from "./CC_D_Results_HowMuchShowing.js"
import { CC_D_Results_Sortby } from "./CC_D_Results_Sortby.js"
import { CC_D_Results_FilterSortbyHeaderWrapper } from "./styles/CC_D_Results_FilterSortbyHeaderWrapper.js"

export const CC_D_Results_FilterSortbyHeader = ({ refUserViewShowFullMapButton, refUserViewShowFullMapFilter }) => {
  const { ORGShowFullMapFilter } = useORG_CtxShowFiltersDesktop()

  return (
    <CC_D_Results_FilterSortbyHeaderWrapper
      ref={refUserViewShowFullMapButton}
      ORGShowFullMapFilter={ORGShowFullMapFilter}>
      <CC_D_Results_HowMuchShowing />

      <div>
        <CC_D_Results_FilterListMain refUserViewShowFullMapFilter={refUserViewShowFullMapFilter} />
        <CC_D_Results_Sortby />
      </div>
    </CC_D_Results_FilterSortbyHeaderWrapper>
  )
}
