import { useORG_CtxShowFiltersDesktop } from "../../../../../context/ORG_CtxShowFiltersDesktop_Provider"
import { ST_D_Results_FilterList } from "../ST_D_Results_FilterList"
import { ST_D_Results_HowMuchShowing } from "../ST_D_Results_HowMuchShowing"
import { ST_D_Results_Sortby } from "./ST_D_Results_Sortby"
import { ST_D_Results_FilterSortbyHeaderDesktopWrapper } from "./styles/ST_D_Results_FilterSortbyHeaderDesktopWrapper"

export const ST_D_Results_FilterSortbyHeaderDesktop = ({ refUserViewShowFullMapButton, refUserViewShowFullMapFilter }) => {
  const { ORGshowFullMapButton, ORGShowFullMapFilter, setORGShowFullMapButton, setORGShowFullMapFilter } =
    useORG_CtxShowFiltersDesktop()

  return (
    <ST_D_Results_FilterSortbyHeaderDesktopWrapper
      ref={refUserViewShowFullMapButton}
      ORGShowFullMapFilter={ORGShowFullMapFilter}>
      <ST_D_Results_HowMuchShowing />

      <div>
        <ST_D_Results_FilterList refUserViewShowFullMapFilter={refUserViewShowFullMapFilter} />
        <ST_D_Results_Sortby />
      </div>
    </ST_D_Results_FilterSortbyHeaderDesktopWrapper>
  )
}
