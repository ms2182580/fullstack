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
        <ORG_D_Results_HowMuchShowing dataComesFromParent={DATA} />
      </div>

      <button onClick={handleNextComponent}>To Next Component</button>
      <button onClick={handlePreviousComponent}>To Previous Component</button>
    </INDEX_D_OrgOnTabsSecondPageWrapper>
  )
}
