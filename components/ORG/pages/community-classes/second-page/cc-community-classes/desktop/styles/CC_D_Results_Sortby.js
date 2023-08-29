import { ORG_Sortby_Desktop } from "../../../../../../../utils/ORG_SortByData"
import { CustomDropdownFilters } from "../../../../../dropdownFilters/CustomDropdownFilters.js"

export const CC_D_Results_Sortby = () => {
  return (
    <>
      <CustomDropdownFilters
        suggestions={ORG_Sortby_Desktop.data}
        defaultWord={ORG_Sortby_Desktop.default}
      />
    </>
  )
}
