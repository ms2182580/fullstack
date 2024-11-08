import { ORG_D_Results_Sortby } from "../desktop/ORG_D_Results_Sortby"
import { ORG_M_Results_FilterListMain } from "./ORG_M_Results_FilterListMain.js"
import { ORG_M_Results_FilterSortbyHeaderWrapper } from "./styles/ORG_M_Results_FilterSortbyHeaderWrapper"

export const ORG_M_Results_FilterSortbyHeader = () => {
  return (
    <ORG_M_Results_FilterSortbyHeaderWrapper>
      <div>
        <ORG_D_Results_Sortby />
      </div>
      <ORG_M_Results_FilterListMain />
    </ORG_M_Results_FilterSortbyHeaderWrapper>
  )
}
