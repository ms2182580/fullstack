import { Caption } from "../../ui/heading_body_text/DesktopMobileFonts"
import { CustomDropdownFilters } from "../dropdownFilters/CustomDropdownFilters"
import { HeaderSPList_SortByWrapper } from "./styles/HeaderSPListWrapper"

const SortBy = ({ userFetched, filtersST, setData, setFilters, handleSetData, handleSetFilters }) => {
  const toSort = ["Nearest", "Highest Rating", "Review Count"]

  return (
    <HeaderSPList_SortByWrapper>
      <CustomDropdownFilters
        title="Sort By"
        suggestions={toSort}
        noIcon
        userFetched={userFetched}
        filtersST={filtersST}
        setData={setData}
        setFilters={setFilters}
        handleSetData={handleSetData}
        handleSetFilters={handleSetFilters}
      />
    </HeaderSPList_SortByWrapper>
  )
}

export default SortBy
