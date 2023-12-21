import { ORG_D_Results_FilterListMain } from "./ORG_D_Results_FilterListMain.js"
import { ORG_D_Results_HowMuchShowing } from "./ORG_D_Results_HowMuchShowing.js"
import { ORG_D_Results_Sortby } from "./ORG_D_Results_Sortby.js"
import { ORG_D_Results_FilterSortbyHeaderWrapper } from "./styles/ORG_D_Results_FilterSortbyHeaderWrapper.js"

export const ORG_D_Results_FilterSortbyHeader = () => {
  return (
    <ORG_D_Results_FilterSortbyHeaderWrapper>
      <ORG_D_Results_HowMuchShowing />

      <div>
        <ORG_D_Results_FilterListMain />
        <ORG_D_Results_Sortby />
      </div>
    </ORG_D_Results_FilterSortbyHeaderWrapper>
  )
}
