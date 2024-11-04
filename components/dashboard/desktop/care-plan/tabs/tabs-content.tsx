import { useCtxDataCreatePlan } from "@/context/dashboard/care_plan/ctx-create-plan-data"
import { cloneElement, Fragment, isValidElement } from "react"
import { TabsContentWrapper } from "./styles/tabs-content-wrapper"

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
        // if (index !== dataActiveTabsTABS) return null

        const propsToComponent = {
          stateProfileSelectedSBSG1,
          currentPosition: index,
          ...props,
        }

        return (
          <Fragment key={index}>
            {isValidElement(component) &&
              cloneElement(component, propsToComponent)}
          </Fragment>
        )
      })}
    </TabsContentWrapper>
  )
}
