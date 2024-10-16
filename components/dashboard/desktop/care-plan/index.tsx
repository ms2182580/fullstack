import { CtxCreatePlanData_Provider } from "@/context/dashboard/care_plan/ctx-create-plan-data"
import { useCtxCreatePlanVisibility } from "@/context/dashboard/care_plan/ctx-create-plan-visibility"
import { Editor_Header } from "./editor/Editor_Header"
import { INDEX_D_CarePlan_StepByStepGuide } from "./step-by-step-guide"
import { INDEX_D_CarePlanWrapper } from "./styles/INDEX_D_CarePlanWrapper"
import { INDEX_D_CarePlan_Tabs } from "./tabs/INDEX_D_CarePlan_Tabs"

export const INDEX_D_CarePlan = () => {
  const { isCreatePlanVisibible } = useCtxCreatePlanVisibility()

  return (
    <INDEX_D_CarePlanWrapper isCreatePlanVisibible={isCreatePlanVisibible}>
      <CtxCreatePlanData_Provider>
        <Editor_Header />
        <INDEX_D_CarePlan_Tabs />
        <INDEX_D_CarePlan_StepByStepGuide />
      </CtxCreatePlanData_Provider>
    </INDEX_D_CarePlanWrapper>
  )
}
