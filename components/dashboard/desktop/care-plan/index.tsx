import { Editor_Header } from "./editor/Editor_Header"
import { INDEX_D_CarePlan_StepByStepGuide } from "./step-by-step-guide"
import { INDEX_D_CarePlanWrapper } from "./styles/INDEX_D_CarePlanWrapper"
import { INDEX_D_CarePlan_Tabs } from "./tabs/INDEX_D_CarePlan_Tabs"

export const INDEX_D_CarePlan = () => {
  return (
    <INDEX_D_CarePlanWrapper>
      <Editor_Header />
      <INDEX_D_CarePlan_Tabs />
      <INDEX_D_CarePlan_StepByStepGuide />
    </INDEX_D_CarePlanWrapper>
  )
}
