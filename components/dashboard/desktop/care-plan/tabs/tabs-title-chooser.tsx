import { useCtxDataCreatePlan } from "@/context/dashboard/care_plan/ctx-create-plan-data"
import { Fragment, useMemo } from "react"
import { TabsTitleChooserWrapper } from "./styles/tabs-title-chooser-wrapper"
import { TabsTitleChooserLI } from "./tabs-title-chooser-li"

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
          <Fragment key={`${title}_${index}`}>
            {/* <Tabs_Title_LIWrapper
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
            </Tabs_Title_LIWrapper> */}

            <TabsTitleChooserLI
              actualIndex={index}
              title={title}
              // handleTheActiveTab={handleTheActiveTab}
            />
          </Fragment>
        )
      })}
    </TabsTitleChooserWrapper>
  )
}
