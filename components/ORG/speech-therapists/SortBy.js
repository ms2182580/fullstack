import { Caption } from "../../ui/heading_body_text/DesktopMobileFonts"
import { CustomDropdownFilters } from "../dropdownFilters/CustomDropdownFilters"
import { HeaderSPList_SortByWrapper } from "./styles/HeaderSPListWrapper"

const SortBy = () => {
  const toSort = ["Nearest", "Highest Rating", "Review Count"]

  return (
    <HeaderSPList_SortByWrapper>
      <CustomDropdownFilters title="Sort By" suggestions={toSort} noIcon />
    </HeaderSPList_SortByWrapper>
  )
}

export default SortBy
