import { CtxCreatePlanData_Provider } from "@/context/dashboard/care_plan/ctx-create-plan-data"
import { useCtxCreatePlanVisibility } from "@/context/dashboard/care_plan/ctx-create-plan-visibility"
import { Editor_Header } from "./editor/Editor_Header"
import { INDEX_D_CarePlan_StepByStepGuide } from "./step-by-step-guide"
import { INDEX_D_CarePlanWrapper } from "./styles/INDEX_D_CarePlanWrapper"
import { INDEX_D_CarePlanTabs } from "./tabs"

export const INDEX_D_CarePlan = () => {
  const { isCreatePlanVisibible } = useCtxCreatePlanVisibility()

  return (
    <CtxCreatePlanData_Provider>
      <INDEX_D_CarePlanWrapper isCreatePlanVisibible={isCreatePlanVisibible}>
        <Editor_Header />
        <INDEX_D_CarePlanTabs />
        <INDEX_D_CarePlan_StepByStepGuide />
      </INDEX_D_CarePlanWrapper>
    </CtxCreatePlanData_Provider>
  )
}
