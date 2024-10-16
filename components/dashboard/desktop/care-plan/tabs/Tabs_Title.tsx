import { useCtxDataCreatePlan } from "@/context/dashboard/care_plan/ctx-create-plan-data"
import { DataTabs_Type } from "./INDEX_D_CarePlan_Tabs"
import { Tabs_Title_LI, Tabs_TitleWrapper } from "./styles/Tabs_TitleWrapper"

type Props = {
  dataTabs: DataTabs_Type
  activeTab: number
  handleActiveTab: ({ e, index }) => void
}

export const Tabs_Title = ({ dataTabs, activeTab, handleActiveTab }: Props) => {
  const { stateEditableDataSBSG3 } = useCtxDataCreatePlan().SBSG3

  return (
    <Tabs_TitleWrapper>
      {dataTabs.map((xDataTabs, index) => {
        const isActiveTab = index === activeTab

        return (
          <Tabs_Title_LI
            isActiveTab={isActiveTab}
            key={index}
            onClick={(e) => handleActiveTab({ e, index })}
          >
            {xDataTabs.title}
          </Tabs_Title_LI>
        )
      })}
    </Tabs_TitleWrapper>
  )
}
