import SVGTabsTitleChooser from "@/assets/icons/file-text.svg"
import { useCtxCreatePlanData } from "@/context/dashboard/care_plan/ctx-create-plan-data"
import { useEffect, useMemo, useRef } from "react"
import { TabsTitleLiWrapper } from "./styles/tabs-title-chooser-li-wrapper"

const DEFAULT_CARE_PLAN_NAME = "My Care Plan"

export const TabsTitleChooserLI = ({ title, actualIndex }) => {
  const {
    dataTabsStateTABS,
    dataActiveTabsTABS,
    handleActiveTabTABS,
    handleRemoveORGTABS,
    handleAddORGTABS,
    focusTargetElementTABSORG,
    handleFocusTargetElementTABSORG,
  } = useCtxCreatePlanData().TABS

  const { stateProfileSelectedSBSG1, handleProfileSelectedSBSG1 } =
    useCtxCreatePlanData().SBSG1

  const profileSelected = useMemo(() => {
    return stateProfileSelectedSBSG1 || DEFAULT_CARE_PLAN_NAME
  }, [stateProfileSelectedSBSG1])

  const isActiveTab = actualIndex === dataActiveTabsTABS
  const customTitle = title === "Editor" ? profileSelected : title

  const theRef = useRef<HTMLLIElement>(null)

  const theHandleRemoveORG = (e) => {
    if (e.type === "click" || e.key === "Enter") {
      handleRemoveORGTABS()
    }
  }

  const handleTheActiveTab = ({ e, index }) => {
    if (e.type === "click" || e.key === "Enter") {
      handleActiveTabTABS({ index })

      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  useEffect(() => {
    if (isActiveTab) {
      handleFocusTargetElementTABSORG()
    }
  }, [focusTargetElementTABSORG])

  useEffect(() => {
    if (theRef.current && isActiveTab) {
      theRef.current.focus()
    }
  }, [isActiveTab])

  useEffect(() => {
    const isFocus = (e) => {
      if (
        e.target === focusTargetElementTABSORG.current ||
        e.target === theRef.current
      ) {
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
    }

    window.addEventListener("focusin", isFocus)

    return () => {
      window.removeEventListener("focusin", isFocus)
    }
  }, [])

  return (
    <TabsTitleLiWrapper
      ref={title === "Resource Directory" ? focusTargetElementTABSORG : theRef}
      isActiveTab={isActiveTab}
      onClick={(e) => handleTheActiveTab({ e, index: actualIndex })}
      onKeyDown={(e) => handleTheActiveTab({ e, index: actualIndex })}
      tabIndex={0}
    >
      <SVGTabsTitleChooser />

      <p>{customTitle}</p>

      {customTitle === "Resource Directory" && (
        <p
          onClick={theHandleRemoveORG}
          onKeyDown={theHandleRemoveORG}
          tabIndex={0}
        >
          X
        </p>
      )}
    </TabsTitleLiWrapper>
  )
}
