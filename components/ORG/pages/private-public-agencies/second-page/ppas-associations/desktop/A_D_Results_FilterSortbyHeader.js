import { useORG_CtxShowFiltersDesktop } from "../../../../../../../context/ORG_CtxShowFiltersDesktop_Provider"
import { A_D_Results_FilterListMain } from "./A_D_Results_FilterListMain.js"
import { A_D_Results_HowMuchShowing } from "./A_D_Results_HowMuchShowing.js"
import { A_D_Results_Sortby } from "./A_D_Results_Sortby.js"
import { A_D_Results_FilterSortbyHeaderWrapper } from "./styles/MH_D_Results_FilterSortbyHeaderWrapper.js"

export const A_D_Results_FilterSortbyHeader = ({ refUserViewShowFullMapButton, refUserViewShowFullMapFilter }) => {
  const { ORGShowFullMapFilter } = useORG_CtxShowFiltersDesktop()

  return (
    <A_D_Results_FilterSortbyHeaderWrapper
      ref={refUserViewShowFullMapButton}
      ORGShowFullMapFilter={ORGShowFullMapFilter}>
      <A_D_Results_HowMuchShowing />

      <div>
        <A_D_Results_FilterListMain refUserViewShowFullMapFilter={refUserViewShowFullMapFilter} />
        <A_D_Results_Sortby />
      </div>
    </A_D_Results_FilterSortbyHeaderWrapper>
  )
}
