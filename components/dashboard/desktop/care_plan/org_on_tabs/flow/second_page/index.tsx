import { ORG_D_Results_HowMuchShowing } from "@/components/org/flow/second-page/desktop/ORG_D_Results_HowMuchShowing"
import { useCtxOrgTabsFlow } from "@/context/dashboard/care_plan/ctx-org-tabs-flow"
import { OrgOnTabsSecondPageCardPlusMap } from "./org-on-tabs-second-page-card-plus-map"
import { OrgOnTabsSecondPageFilterPlusSortby } from "./org-on-tabs-second-page-filter-plus-sortby"
import {
  INDEX_D_OrgOnTabsSecondPageWrapper,
  OrgOnTabsHowMuchShowingWrapper,
} from "./styles/index-wrapper"

type Props = {
  handleNextComponent?: (e) => void
  handlePreviousComponent?: (e) => void
}

export const INDEX_D_OrgOnTabsSecondPage = ({
  handleNextComponent,
  handlePreviousComponent,
}: Props) => {
  const { dataToSecondPage } = useCtxOrgTabsFlow().ORG_TABS_FLOW_SECOND_PAGE

  return (
    <INDEX_D_OrgOnTabsSecondPageWrapper>
      <OrgOnTabsHowMuchShowingWrapper>
        <ORG_D_Results_HowMuchShowing dataComesFromParent={dataToSecondPage} />
      </OrgOnTabsHowMuchShowingWrapper>

      {/* 
      //!FH0
      Code this and lift the state to the parent
      
      //?TODO
      For the component "ORG_D_Results_FilterListMain" and their childrens (buttons that open filters):
      - It should display only three per row
      - The filter with the button name "More Filters" should have a higher z-index or it should make a portal in order to not colide with other UI elements
      
      - Check everything on 1025px widht screen
      
      
      */}

      <OrgOnTabsSecondPageFilterPlusSortby />

      <OrgOnTabsSecondPageCardPlusMap />

      <button onClick={handleNextComponent}>To Next Component</button>
      <button onClick={handlePreviousComponent}>To Previous Component</button>
    </INDEX_D_OrgOnTabsSecondPageWrapper>
  )
}
