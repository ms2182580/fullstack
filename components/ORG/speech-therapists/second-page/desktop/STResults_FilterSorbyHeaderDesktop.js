import { useORG_CtxShowFiltersDesktop } from "../../../../../context/ORG_CtxShowFiltersDesktop_Provider"
import { STResults_FilterList } from "../STResults_FilterList"
import { STResults_HowMuchShowing } from "../STResults_HowMuchShowing"
import { STResults_SortbyDesktop } from "./STResults_SortbyDesktop"
import { STResults_FilterSortbyHeaderDesktopWrapper } from "./styles/STResults_FilterSortbyHeaderDesktopWrapper"

export const STResults_FilterSortbyHeaderDesktop = ({ refUserViewShowFullMapButton, refUserViewShowFullMapFilter }) => {
  const { showFullMapButton, ORGShowFullMapFilter, setShowFullMapButton, setORGShowFullMapFilter } =
    useORG_CtxShowFiltersDesktop()

  return (
    <STResults_FilterSortbyHeaderDesktopWrapper
      ref={refUserViewShowFullMapButton}
      ORGShowFullMapFilter={ORGShowFullMapFilter}>
      <STResults_HowMuchShowing />

      <div>
        <STResults_FilterList refUserViewShowFullMapFilter={refUserViewShowFullMapFilter} />
        <STResults_SortbyDesktop />
      </div>
    </STResults_FilterSortbyHeaderDesktopWrapper>
  )
}
