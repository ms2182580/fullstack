import { ORG_SortByData, ORG_SortByDefault } from "../../../../../utils/ORG_SortByData"
import { CustomDropdownFilters } from "../../../dropdownFilters/CustomDropdownFilters"
import { ST_D_Results_SortbyWrapper } from "./styles/ST_D_Results_SortbyWrapper"




export const ST_D_Results_Sortby = () => {
  return (
    <ST_D_Results_SortbyWrapper>
      <CustomDropdownFilters
        suggestions={ORG_SortByData}
        defaultWord={ORG_SortByDefault}
      />
    </ST_D_Results_SortbyWrapper>
  )
}

