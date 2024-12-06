import { ORG_D_Results_FilterListMain } from "@/components/org/flow/second-page/desktop/ORG_D_Results_FilterListMain"
import { useCtxOrgTabsFlow } from "@/context/dashboard/care_plan/ctx-org-tabs-flow"
import { css } from "styled-components"

const stylesOnDashboardForFilter = () => css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: calc(8px * 1);

  margin: 0;
  width: min-content;
`

/* 
!FH0
- When there's no flters, like in "Assistive Software" the filter list should keep using their space
- When the user change to this second page, the url should be updated
- Sort by should be displayed with the approach used so far: "dataComesFromOutside"
*/

export const OrgOnTabsSecondPageFilterPlusSortby = () => {
  const { dataToSecondPage } = useCtxOrgTabsFlow().ORG_TABS_FLOW_SECOND_PAGE

  return (
    <div>
      <ORG_D_Results_FilterListMain
        dataComesFromParent={dataToSecondPage}
        someStylesComeFromOutside={stylesOnDashboardForFilter}
      />
      <div>Sort by here</div>
      {/* <ORG_D_Results_Sortby /> */}
    </div>
  )
}
