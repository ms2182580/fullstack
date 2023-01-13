import { CustomDropdownFilters } from "../dropdownFilters/CustomDropdownFilters"
import { HeaderSPList_SortByWrapper } from "./styles/HeaderSPListWrapper"
import { ORG_SortByOrder } from "../../../utils/ORG_SortByOrder"

const SortBy = () => {
  return (
    <HeaderSPList_SortByWrapper>
      <CustomDropdownFilters
        title="Sort By"
        suggestions={ORG_SortByOrder}
        noIcon
      />
    </HeaderSPList_SortByWrapper>
  )
}

export default SortBy
