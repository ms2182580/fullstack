import SVGTabsTitleChooser from "@/assets/icons/file-text.svg"
import { useCtxDataCreatePlan } from "@/context/dashboard/care_plan/ctx-create-plan-data"
import { Fragment, useMemo } from "react"
import {
  Tabs_Title_LI,
  TabsTitleChooserWrapper,
} from "./styles/tabs-title-chooser-wrapper"

const DEFAULT_CARE_PLAN_NAME = "My Care Plan"

export const TabsTitleChooser = () => {
  const {
    dataTabsStateTABS,
    dataActiveTabsTABS,
    handleActiveTabTABS,
    handleRemoveORGTABS,
    handleAddORGTABS,
  } = useCtxDataCreatePlan().TABS

  const { stateProfileSelectedSBSG1, handleProfileSelectedSBSG1 } =
    useCtxDataCreatePlan().SBSG1

  const { stateEditableDataSBSG3 } = useCtxDataCreatePlan().SBSG3

  const handleTheActiveTab = ({ e, index }) => {
    if (e.type === "click" || e.key === "Enter") {
      handleActiveTabTABS({ index })
    }
  }

  const profileSelected = useMemo(() => {
    return stateProfileSelectedSBSG1 || DEFAULT_CARE_PLAN_NAME
  }, [stateProfileSelectedSBSG1])

  const theHandleRemoveORG = (e) => {
    if (e.type === "click" || e.key === "Enter") {
      handleRemoveORGTABS()
    }
  }

  return (
    <TabsTitleChooserWrapper>
      {dataTabsStateTABS.map(({ title }, index) => {
        const isActiveTab = index === dataActiveTabsTABS

        const customTitle = title === "Editor" ? profileSelected : title

        return (
          <Fragment>
            <Tabs_Title_LI
              key={`${title}_${index}`}
              isActiveTab={isActiveTab}
              onClick={(e) => handleTheActiveTab({ e, index })}
              onKeyDown={(e) => handleTheActiveTab({ e, index })}
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
            </Tabs_Title_LI>
          </Fragment>
        )
      })}
    </TabsTitleChooserWrapper>
  )
}
