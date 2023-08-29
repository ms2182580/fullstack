import { useORG_CtxShowFiltersDesktop } from "../../../../../../../context/ORG_CtxShowFiltersDesktop_Provider"
import { SES_D_Results_FilterListMain } from "./SES_D_Results_FilterListMain.js"
import { SES_D_Results_HowMuchShowing } from "./SES_D_Results_HowMuchShowing.js"
import { SES_D_Results_Sortby } from "./SES_D_Results_Sortby.js"
import { SES_D_Results_FilterSortbyHeaderWrapper } from "./styles/SES_D_Results_FilterSortbyHeaderWrapper.js"

export const SES_D_Results_FilterSortbyHeader = ({ refUserViewShowFullMapButton, refUserViewShowFullMapFilter }) => {
  const { ORGShowFullMapFilter } = useORG_CtxShowFiltersDesktop()

  return (
    <SES_D_Results_FilterSortbyHeaderWrapper
      ref={refUserViewShowFullMapButton}
      ORGShowFullMapFilter={ORGShowFullMapFilter}>
      <SES_D_Results_HowMuchShowing />

      <div>
        <SES_D_Results_FilterListMain refUserViewShowFullMapFilter={refUserViewShowFullMapFilter} />
        <SES_D_Results_Sortby />
      </div>
    </SES_D_Results_FilterSortbyHeaderWrapper>
  )
}
