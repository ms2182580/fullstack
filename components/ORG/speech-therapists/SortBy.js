import { ORG_SortByOrder, ORG_SortBy_Default } from "../../../utils/ORG_SortByOrder"
import { CustomDropdownFilters } from "../dropdownFilters/CustomDropdownFilters"
import { HeaderSPList_SortByWrapper } from "./styles/HeaderSPListWrapper"




const SortBy = () => {
  return (
    <HeaderSPList_SortByWrapper>
      <CustomDropdownFilters
        suggestions={ORG_SortByOrder}
        defaultWord={ORG_SortBy_Default}
        noIcon
      />
    </HeaderSPList_SortByWrapper>
  )
}

export default SortBy
