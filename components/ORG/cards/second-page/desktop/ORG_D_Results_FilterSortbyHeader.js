import { useORG_CtxShowFiltersDesktop } from "../../../../../context/ORG_CtxShowFiltersDesktop_Provider"
import { ORG_D_Results_FilterListMain } from "./ORG_D_Results_FilterListMain.js"
import { ORG_D_Results_HowMuchShowing } from "./ORG_D_Results_HowMuchShowing.js"
import { ORG_D_Results_Sortby } from "./ORG_D_Results_Sortby.js"
import { ORG_D_Results_FilterSortbyHeaderWrapper } from "./styles/ORG_D_Results_FilterSortbyHeaderWrapper.js"

export const ORG_D_Results_FilterSortbyHeader = ({ refUserViewShowFullMapButton, refUserViewShowFullMapFilter }) => {
  const { ORGShowFullMapFilter } = useORG_CtxShowFiltersDesktop()

  return (
    <ORG_D_Results_FilterSortbyHeaderWrapper
      ref={refUserViewShowFullMapButton}
      ORGShowFullMapFilter={ORGShowFullMapFilter}>
      <ORG_D_Results_HowMuchShowing />

      <div>
        <ORG_D_Results_FilterListMain refUserViewShowFullMapFilter={refUserViewShowFullMapFilter} />
        <ORG_D_Results_Sortby />
      </div>
    </ORG_D_Results_FilterSortbyHeaderWrapper>
  )
}
