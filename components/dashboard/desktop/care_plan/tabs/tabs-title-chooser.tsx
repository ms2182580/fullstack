import { useCtxCreatePlanData } from "@/context/dashboard/care_plan/ctx-create-plan-data"
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
  } = useCtxCreatePlanData().TABS

  const { stateProfileSelectedSBSG1, handleProfileSelectedSBSG1 } =
    useCtxCreatePlanData().SBSG1

  const { stateEditableDataSBSG3 } = useCtxCreatePlanData().SBSG3

  const handleTheActiveTab = ({ e, index }) => {
    if (e.type === "click" || e.key === "Enter") {
      handleActiveTabTABS({ index })
    }
  }

  const profileSelected = useMemo(() => {
    return stateProfileSelectedSBSG1 || DEFAULT_CARE_PLAN_NAME
  }, [stateProfileSelectedSBSG1])

  return (
    <TabsTitleChooserWrapper>
      {dataTabsStateTABS.map(({ title }, index) => {
        const isActiveTab = index === dataActiveTabsTABS

        const customTitle = title === "Editor" ? profileSelected : title

        return (
          <Fragment key={`${title}_${index}`}>
            <TabsTitleChooserLI actualIndex={index} title={title} />
          </Fragment>
        )
      })}
    </TabsTitleChooserWrapper>
  )
}
