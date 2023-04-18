import { ORG_SortByOrder, ORG_SortBy_Default } from "../../../../../utils/ORG_SortByOrder"
import { CustomDropdownFilters } from "../../../dropdownFilters/CustomDropdownFilters"
import { STResults_SortbyDesktopWrapper } from "./styles/STResults_SortbyDesktopWrapper"




export const STResults_SortbyDesktop = () => {
  return (
    <STResults_SortbyDesktopWrapper>
      <CustomDropdownFilters
        suggestions={ORG_SortByOrder}
        defaultWord={ORG_SortBy_Default}
        noIcon
      />
    </STResults_SortbyDesktopWrapper>
  )
}

