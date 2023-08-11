import { ORG_Sortby_Desktop } from "../../../../../../../utils/ORG_SortByData"
import { CustomDropdownFilters } from "../../../../../dropdownFilters/CustomDropdownFilters.js"
import { CR_D_Results_SortbyWrapper } from "./styles/CR_D_Results_SortbyWrapper.js"

export const CR_D_Results_Sortby = () => {
  return (
    <CR_D_Results_SortbyWrapper>
      <CustomDropdownFilters
        suggestions={ORG_Sortby_Desktop.data}
        defaultWord={ORG_Sortby_Desktop.default}
      />
    </CR_D_Results_SortbyWrapper>
  )
}
