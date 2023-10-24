import { useORG_CtxShowFiltersDesktop } from "../../../../../../../context/ORG_CtxShowFiltersDesktop_Provider"
import { AT_D_Results_FilterListMain } from "./AT_D_Results_FilterListMain.js"
import { AT_D_Results_HowMuchShowing } from "./AT_D_Results_HowMuchShowing..js"
import { AT_D_Results_Sortby } from "./AT_D_Results_Sortby.js"
import { AT_D_Results_FilterSortbyHeaderWrapper } from "./styles/AT_D_Results_FilterSortbyHeaderWrapper.js"

export const AT_D_Results_FilterSortbyHeader = ({ refUserViewShowFullMapButton, refUserViewShowFullMapFilter }) => {
  const { ORGShowFullMapFilter } = useORG_CtxShowFiltersDesktop()

  return (
    <AT_D_Results_FilterSortbyHeaderWrapper
      ref={refUserViewShowFullMapButton}
      ORGShowFullMapFilter={ORGShowFullMapFilter}>
      <AT_D_Results_HowMuchShowing />

      <div>
        <AT_D_Results_FilterListMain refUserViewShowFullMapFilter={refUserViewShowFullMapFilter} />
        <AT_D_Results_Sortby />
      </div>
    </AT_D_Results_FilterSortbyHeaderWrapper>
  )
}
