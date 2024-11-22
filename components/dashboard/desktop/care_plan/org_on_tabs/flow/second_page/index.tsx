import { INDEX_ORG_Results_D } from "@/components/org/flow/second-page/desktop/INDEX_ORG_Results_D"
import { ORG_D_Results_HowMuchShowing } from "@/components/org/flow/second-page/desktop/ORG_D_Results_HowMuchShowing"
import { useCtxOrgTabsFlow } from "@/context/dashboard/care_plan/ctx-org-tabs-flow"
import { INDEX_D_OrgOnTabsSecondPageWrapper } from "./styles/index-wrapper"

type Props = {
  handleNextComponent?: (e) => void
  handlePreviousComponent?: (e) => void
}

export const INDEX_D_OrgOnTabsSecondPage = ({
  handleNextComponent,
  handlePreviousComponent,
}: Props) => {
  const { DATA } = useCtxOrgTabsFlow().ORG_TABS_FLOW_SECOND_PAGE

  return (
    <INDEX_D_OrgOnTabsSecondPageWrapper>
      <div>
        {/* <ORG_D_Results_HowMuchShowing dataComesFromDashboard={DATA} /> */}
        <ORG_D_Results_HowMuchShowing />
      </div>

      <button onClick={handleNextComponent}>To Next Component</button>
      <button onClick={handlePreviousComponent}>To Previous Component</button>

      <INDEX_ORG_Results_D />
    </INDEX_D_OrgOnTabsSecondPageWrapper>
  )
}
