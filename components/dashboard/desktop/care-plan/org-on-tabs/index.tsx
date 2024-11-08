import { LoadingComponent } from "@/components/loading/LoadingComponent"
import { useCtxDataCreatePlan } from "@/context/dashboard/care_plan/ctx-create-plan-data"
import { useFetchData } from "@/utils/org/useFetchData"
import { useEffect, useRef } from "react"
import { INDEX_D_OrgOnTabsFirstPage } from "./flow/first_page"
import { INDEX_D_OrgOnTabsWrapper } from "./flow/styles/index-wrapper"

export const INDEX_D_OrgOnTab = () => {
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

  return (
    <INDEX_D_OrgOnTabsWrapper ref={theRef} onKeyDown={handleMoveSight}>
      {theData === null ? (
        <LoadingComponent />
      ) : (
        <INDEX_D_OrgOnTabsFirstPage allBackendData={theData} />
      )}
    </INDEX_D_OrgOnTabsWrapper>
  )
}
