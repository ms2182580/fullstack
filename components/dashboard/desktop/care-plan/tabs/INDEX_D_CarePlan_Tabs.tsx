import { ReactElement, useState } from "react"
import { INDEX_D_CarePlan_TabsWrapper } from "./styles/INDEX_D_CarePlan_TabsWrapper"
import { Tabs_Content } from "./Tabs_Content"
import { Tabs_Title } from "./Tabs_Title"

type Component_Type = ReactElement

export type DataTabs_Type = {
  title: string
  component: Component_Type
  props?: any
}[]

const dataTabs: DataTabs_Type = [
  {
    title: "Tab 1",
    component: <div style={{ minHeight: "200dvh" }}>Component Tab 1</div>,
  },
  {
    title: "Tab 2",
    component: <div style={{ minHeight: "150dvh" }}>Component Tab 2</div>,
  },
  {
    title: "Tab 3",
    component: <div style={{ minHeight: "120dvh" }}>Component Tab 3</div>,
  },
]

export const INDEX_D_CarePlan_Tabs = () => {
  const [activeTab, setActiveTab] = useState(0)

  const handleActiveTab = ({ e, index }) => {
    setActiveTab(index)
  }

  return (
    <INDEX_D_CarePlan_TabsWrapper>
      <Tabs_Title
        dataTabs={dataTabs}
        activeTab={activeTab}
        handleActiveTab={handleActiveTab}
      />

      <Tabs_Content dataTabs={dataTabs} activeTab={activeTab} />
    </INDEX_D_CarePlan_TabsWrapper>
  )
}
