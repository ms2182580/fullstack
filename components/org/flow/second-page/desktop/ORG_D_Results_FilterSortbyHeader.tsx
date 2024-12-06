import { ORG_D_Results_FilterListMain } from "./ORG_D_Results_FilterListMain"
import { ORG_D_Results_Sortby } from "./ORG_D_Results_Sortby"
import { ORG_D_Results_FilterSortbyHeaderWrapper } from "./styles/ORG_D_Results_FilterSortbyHeaderWrapper"

export const ORG_D_Results_FilterSortbyHeader = () => {
  return (
    <ORG_D_Results_FilterSortbyHeaderWrapper>
      {/* <ORG_D_Results_HowMuchShowing /> */}

      <div>
        <ORG_D_Results_FilterListMain />
        <ORG_D_Results_Sortby />
      </div>
    </ORG_D_Results_FilterSortbyHeaderWrapper>
  )
}
