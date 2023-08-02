import { useORG_CtxShowFiltersDesktop } from "../../../../../context/ORG_CtxShowFiltersDesktop_Provider"
import { ST_D_Results_FilterListMain } from "./ST_D_Results_FilterListMain"
import { ST_D_Results_HowMuchShowing } from "./ST_D_Results_HowMuchShowing"
import { ST_D_Results_Sortby } from "./ST_D_Results_Sortby"
import { ST_D_Results_FilterSortbyHeaderWrapper } from "./styles/ST_D_Results_FilterSortbyHeaderWrapper"

export const ST_D_Results_FilterSortbyHeader = ({ refUserViewShowFullMapButton, refUserViewShowFullMapFilter }) => {
  const { ORGshowFullMapButton, ORGShowFullMapFilter, setORGShowFullMapButton, setORGShowFullMapFilter } =
    useORG_CtxShowFiltersDesktop()

  return (
    <ST_D_Results_FilterSortbyHeaderWrapper
      ref={refUserViewShowFullMapButton}
      ORGShowFullMapFilter={ORGShowFullMapFilter}>

      <ST_D_Results_HowMuchShowing />

      <div>
        <ST_D_Results_FilterListMain refUserViewShowFullMapFilter={refUserViewShowFullMapFilter} />
        <ST_D_Results_Sortby />
      </div>
    </ST_D_Results_FilterSortbyHeaderWrapper>
  )
}
