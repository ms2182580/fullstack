import { LoadingComponent } from "@/components/loading/LoadingComponent"
import { useCtxDataCreatePlan } from "@/context/dashboard/care_plan/ctx-create-plan-data"
import { useFetchData } from "@/utils/org/useFetchData"
import { ReactElement, useEffect, useRef, useState } from "react"
import { INDEX_D_OrgOnTabsFirstPage } from "./flow/first_page"
import { INDEX_D_OrgOnTabWrapper } from "./styles/index-wrapper"
// import { INDEX_D_OrgOnTabsWrapper } from "./flow/styles/index-wrapper"
import { OrgTabsChooser } from "./org-tabs-chooser"

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
    component: (
      <div style={{ height: "100dvh", border: "2px solid red" }}>
        Second page
      </div>
    ),
  },
  {
    component: (
      <div style={{ height: "100dvh", border: "2px solid green" }}>
        Third page
      </div>
    ),
  },
]

export const INDEX_D_OrgOnTab = (allBackendData) => {
  const {
    dataTabsStateTABS,
    dataActiveTabsTABS,
    handleActiveTabTABS,
    handleRemoveORGTABS,
    handleAddORGTABS,
  } = useCtxDataCreatePlan().TABS

  const theRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (theRef.current) {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }, [])

  const handleMoveSight = (e) => {
    if (e.key === "Enter") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const theData = useFetchData()
  console.log("theData:", theData)

  const [actualComponentShowed, setActualComponentShowed] = useState(0)

  const handleNextComponent = (e) => {
    if (e.type === "click" || e.key === "Enter") {
      if (
        actualComponentShowed >= 0 &&
        actualComponentShowed < componentList.length - 1
      ) {
        return setActualComponentShowed((prevState) => prevState + 1)
      }
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

  return (
    <INDEX_D_OrgOnTabWrapper ref={theRef} onKeyDown={handleMoveSight}>
      {theData === null ? (
        <LoadingComponent />
      ) : (
        /* Create the "chooser" here, like «SBSG_Content.tsx» */
        // <INDEX_D_OrgOnTabsFirstPage allBackendData={theData} />
        <OrgTabsChooser
          componentList={componentList}
          actualComponentShowed={actualComponentShowed}
          handleNextComponent={handleNextComponent}
          allBackendData={theData}
        />
      )}
    </INDEX_D_OrgOnTabWrapper>
  )
}

/* 

import styled from "styled-components"

export const INDEX_D_OrgOnTabsWrapper = styled.div`
  margin-inline: clamp(16px, 3.855vw - 23.52px, 32px);

  padding-top: calc(8px * 4);
`
*/
