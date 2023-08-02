import { ORG_Sortby_Desktop } from "../../../../../../../utils/ORG_SortByData"
import { CustomDropdownFilters } from "../../../../../dropdownFilters/CustomDropdownFilters.js"
import { AT_D_Results_SortbyWrapper } from "./styles/AT_D_Results_SortbyWrapper.js"

export const AT_D_Results_Sortby = () => {
  return (
    <AT_D_Results_SortbyWrapper>
      <CustomDropdownFilters
        suggestions={ORG_Sortby_Desktop.data}
        defaultWord={ORG_Sortby_Desktop.default}
      />
    </AT_D_Results_SortbyWrapper>
  )
}
