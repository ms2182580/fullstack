import { ORG_SortByData, ORG_SortByDefault } from "../../../../../utils/ORG_SortByData"
import { CustomDropdownFilters } from "../../../dropdownFilters/CustomDropdownFilters"
import { STResults_SortbyDesktopWrapper } from "./styles/STResults_SortbyDesktopWrapper"




export const STResults_SortbyDesktop = () => {
  return (
    <STResults_SortbyDesktopWrapper>
      <CustomDropdownFilters
        suggestions={ORG_SortByData}
        defaultWord={ORG_SortByDefault}
        noIcon
      />
    </STResults_SortbyDesktopWrapper>
  )
}

