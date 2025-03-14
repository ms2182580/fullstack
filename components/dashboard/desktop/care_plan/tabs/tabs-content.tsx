import { useCtxCreatePlanData } from "@/context/dashboard/care_plan/ctx-create-plan-data"
import { cloneElement, isValidElement } from "react"
import {
  DataContentComponentWrapper,
  TabsContentWrapper,
} from "./styles/tabs-content-wrapper"

export const TabsContent = () => {
  const {
    dataTabsStateTABS,
    dataActiveTabsTABS,
    handleActiveTabTABS,
    handleRemoveORGTABS,
    handleAddORGTABS,
  } = useCtxCreatePlanData().TABS

  const { stateProfileSelectedSBSG1 } = useCtxCreatePlanData().SBSG1

  return (
    <TabsContentWrapper>
      {dataTabsStateTABS.map(({ component, props }, index) => {
        const isVisible = index === dataActiveTabsTABS

        const propsToComponent = {
          stateProfileSelectedSBSG1,
          isVisible,
          ...props,
        }

        return (
          <DataContentComponentWrapper key={index} isVisible={isVisible}>
            {isValidElement(component) &&
              cloneElement(component, propsToComponent)}
          </DataContentComponentWrapper>
        )
      })}
    </TabsContentWrapper>
  )
}
