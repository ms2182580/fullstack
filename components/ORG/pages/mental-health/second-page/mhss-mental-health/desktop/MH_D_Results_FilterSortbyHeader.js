import { useORG_CtxShowFiltersDesktop } from "../../../../../../../context/ORG_CtxShowFiltersDesktop_Provider"
import { MH_D_Results_FilterListMain } from "./MH_D_Results_FilterListMain.js"
import { MH_D_Results_HowMuchShowing } from "./MH_D_Results_HowMuchShowing.js"
import { MH_D_Results_Sortby } from "./MH_D_Results_Sortby.js"
import { MH_D_Results_FilterSortbyHeaderWrapper } from "./styles/MH_D_Results_FilterSortbyHeaderWrapper.js"

export const MH_D_Results_FilterSortbyHeader = ({ refUserViewShowFullMapButton, refUserViewShowFullMapFilter }) => {
  const { ORGShowFullMapFilter } = useORG_CtxShowFiltersDesktop()

  return (
    <MH_D_Results_FilterSortbyHeaderWrapper
      ref={refUserViewShowFullMapButton}
      ORGShowFullMapFilter={ORGShowFullMapFilter}>
      <MH_D_Results_HowMuchShowing />

      <div>
        <MH_D_Results_FilterListMain refUserViewShowFullMapFilter={refUserViewShowFullMapFilter} />
        <MH_D_Results_Sortby />
      </div>
    </MH_D_Results_FilterSortbyHeaderWrapper>
  )
}
