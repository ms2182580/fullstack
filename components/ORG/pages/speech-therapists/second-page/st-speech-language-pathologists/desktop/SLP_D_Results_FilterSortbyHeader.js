import { useORG_CtxShowFiltersDesktop } from "../../../../../../../context/ORG_CtxShowFiltersDesktop_Provider"
import { SLP_D_Results_FilterListMain } from "./SLP_D_Results_FilterListMain.js"
import { SLP_D_Results_HowMuchShowing } from "./SLP_D_Results_HowMuchShowing.js"
import { SLP_D_Results_Sortby } from "./SLP_D_Results_Sortby.js"
import { SLP_D_Results_FilterSortbyHeaderWrapper } from "./styles/SLP_D_Results_FilterSortbyHeaderWrapper.js"

export const SLP_D_Results_FilterSortbyHeader = ({ refUserViewShowFullMapButton, refUserViewShowFullMapFilter }) => {
  const { ORGShowFullMapFilter } = useORG_CtxShowFiltersDesktop()

  return (
    <SLP_D_Results_FilterSortbyHeaderWrapper
      ref={refUserViewShowFullMapButton}
      ORGShowFullMapFilter={ORGShowFullMapFilter}>
      <SLP_D_Results_HowMuchShowing />

      <div>
        <SLP_D_Results_FilterListMain refUserViewShowFullMapFilter={refUserViewShowFullMapFilter} />
        <SLP_D_Results_Sortby />
      </div>
    </SLP_D_Results_FilterSortbyHeaderWrapper>
  )
}
