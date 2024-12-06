import { LoadingComponent } from "@/components/loading/LoadingComponent"
import { useCtxCreatePlanData } from "@/context/dashboard/care_plan/ctx-create-plan-data"
import { useCtxOrgTabsFlow } from "@/context/dashboard/care_plan/ctx-org-tabs-flow"
import { ReactElement, useState } from "react"
import { INDEX_D_OrgOnTabsFirstPage } from "./flow/first_page"
import { INDEX_D_OrgOnTabsSecondPage } from "./flow/second_page"
import { INDEX_D_OrgOnTabsThirdPage } from "./flow/third_page"
import { OrgTabsChooser } from "./org-tabs-chooser"
import { INDEX_D_OrgOnTabWrapper } from "./styles/index-wrapper"

type Component_Type = ReactElement

export type ComponentList_Type = {
  component: Component_Type
  props?: any
}[]

const componentList: ComponentList_Type = [
  {
    component: <INDEX_D_OrgOnTabsFirstPage />,
  },
  {
    component: <INDEX_D_OrgOnTabsSecondPage />,
  },
  {
    component: <INDEX_D_OrgOnTabsThirdPage />,
  },
]

type Props = {
  isVisible?: boolean
}

export const INDEX_D_OrgOnTab = ({ isVisible }: Props) => {
  const {
    dataTabsStateTABS,
    dataActiveTabsTABS,
    handleActiveTabTABS,
    handleRemoveORGTABS,
    handleAddORGTABS,
  } = useCtxCreatePlanData().TABS

  const handleMoveSight = (e) => {
    if (e.key === "Enter") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const [actualComponentShowed, setActualComponentShowed] = useState(0)

  const handleNextComponent = (e) => {
    if (
      actualComponentShowed >= 0 &&
      actualComponentShowed < componentList.length - 1
    ) {
      /* 
      !FH Make all validations to pass the data to the second page
      */

      return setActualComponentShowed((prevState) => prevState + 1)
    }
  }

  const handlePreviousComponent = (e) => {
    if (e.type === "click" || e.key === "Enter") {
      if (
        actualComponentShowed > 0 &&
        actualComponentShowed <= componentList.length - 1
      ) {
        return setActualComponentShowed((prevState) => prevState - 1)
      }
    }
  }

  const handleMoveCustom = ({ customMovement }) => {
    return setActualComponentShowed(customMovement)
  }

  const { fetchedData } = useCtxOrgTabsFlow().ORG_TABS_FLOW_FIRST_PAGE

  if (fetchedData === null) {
    return <LoadingComponent />
  }

  return (
    <INDEX_D_OrgOnTabWrapper onKeyDown={handleMoveSight}>
      <OrgTabsChooser
        componentList={componentList}
        actualComponentShowed={actualComponentShowed}
        handleNextComponent={handleNextComponent}
        handlePreviousComponent={handlePreviousComponent}
        handleMoveCustom={handleMoveCustom}
      />
    </INDEX_D_OrgOnTabWrapper>
  )
}
