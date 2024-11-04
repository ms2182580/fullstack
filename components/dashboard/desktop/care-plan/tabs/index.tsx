import { INDEX_D_CarePlan_TabsWrapper } from "./styles/index-wrapper"
import { TabsContent } from "./tabs-content"
import { TabsTitleChooser } from "./tabs-title-chooser"

export const INDEX_D_CarePlanTabs = () => {
  return (
    <INDEX_D_CarePlan_TabsWrapper>
      <TabsTitleChooser />

      <TabsContent />
    </INDEX_D_CarePlan_TabsWrapper>
  )
}
