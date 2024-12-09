import { OrgOnTabsSecondPageFilterPlusSortbyWrapper } from "./styles/org-on-tabs-second-page-filter-plus-sortby-wrapper"

import { ORG_D_Results_FilterListMain } from "@/components/org/flow/second-page/desktop/ORG_D_Results_FilterListMain"
import { ORG_D_Results_Sortby } from "@/components/org/flow/second-page/desktop/ORG_D_Results_Sortby"
import { useCtxOrgTabsFlow } from "@/context/dashboard/care_plan/ctx-org-tabs-flow"

/* 
!FH0
- When there's no flters, like in "Assistive Software" the filter list should keep using their space
- When the user change to this second page, the url should be updated
- Sort by should be displayed with the approach used so far: "dataComesFromOutside"
*/

export const OrgOnTabsSecondPageFilterPlusSortby = () => {
  const { dataToSecondPage } = useCtxOrgTabsFlow().ORG_TABS_FLOW_SECOND_PAGE

  return (
    <OrgOnTabsSecondPageFilterPlusSortbyWrapper>
      <ORG_D_Results_FilterListMain dataComesFromParent={dataToSecondPage} />
      <ORG_D_Results_Sortby />
    </OrgOnTabsSecondPageFilterPlusSortbyWrapper>
  )
}
