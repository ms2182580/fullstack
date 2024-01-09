import { ORG_D_Results_HowMuchShowing } from "./ORG_D_Results_HowMuchShowing"
import { ORG_D_Results_FilterSortbyHeaderWrapper } from "./styles/ORG_D_Results_FilterSortbyHeaderWrapper.js"

export const ORG_D_Results_FilterSortbyHeader = () => {
  return (
    <ORG_D_Results_FilterSortbyHeaderWrapper>
      <ORG_D_Results_HowMuchShowing />

      {/* 
      //!FH0 Check this and follow with next components
      */}

      {/* <div>
        <ORG_D_Results_FilterListMain />
        <ORG_D_Results_Sortby />
      </div> */}
    </ORG_D_Results_FilterSortbyHeaderWrapper>
  )
}
