import { CustomDropdownFilters } from "@/components/org/dropdownFilters/CustomDropdownFilters"
import { ORG_Sortby_Desktop } from "@/utils/ORG_SortByData"

export const ORG_D_Results_Sortby = () => {
  return <CustomDropdownFilters suggestions={ORG_Sortby_Desktop.data} />
}
