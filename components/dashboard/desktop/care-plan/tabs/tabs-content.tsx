import { useCtxDataCreatePlan } from "@/context/dashboard/care_plan/ctx-create-plan-data"
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
  } = useCtxDataCreatePlan().TABS

  const { stateProfileSelectedSBSG1 } = useCtxDataCreatePlan().SBSG1

  return (
    <TabsContentWrapper>
      {dataTabsStateTABS.map(({ component, props }, index) => {
        const propsToComponent = {
          stateProfileSelectedSBSG1,
          ...props,
        }

        const isVisible = index === dataActiveTabsTABS

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
