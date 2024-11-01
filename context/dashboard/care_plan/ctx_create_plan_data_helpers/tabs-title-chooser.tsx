import { Editor } from "@/components/dashboard/desktop/care-plan/editor"
import { ReactElement, useState } from "react"
import { NAME_COMPONENTS_EDITOR } from "./consts"

const NAME_STATES_TABS = {
  DATA_TABS_STATE: `dataTabsState${NAME_COMPONENTS_EDITOR.TABS}`,
  DATA_ACTIVE_TABS: `dataActiveTabs${NAME_COMPONENTS_EDITOR.TABS}`,
  HANDLE_ACTIVE_TAB: `handleActiveTab${NAME_COMPONENTS_EDITOR.TABS}`,
  HANDLE_REMOVE_ORG: `handleRemoveORG${NAME_COMPONENTS_EDITOR.TABS}`,
  HANDLE_ADD_ORG: `handleAddORG${NAME_COMPONENTS_EDITOR.TABS}`,
} as const

type TabsTitleChooserTypes = {
  [NAME_STATES_TABS.DATA_TABS_STATE]: DataTabs_Type
  [NAME_STATES_TABS.DATA_ACTIVE_TABS]: number
  [NAME_STATES_TABS.HANDLE_ACTIVE_TAB]: ({ index }: { index: number }) => void
  [NAME_STATES_TABS.HANDLE_REMOVE_ORG]: () => void
  [NAME_STATES_TABS.HANDLE_ADD_ORG]: () => void
}

type Component_Type = ReactElement

export type DataTabs_Type = {
  title: string
  component: Component_Type
  props?: any
}[]

const dataTabs: DataTabs_Type = [
  {
    title: "Editor",
    component: <Editor />,
  },
  {
    title: "Resource Directory",
    component: <div style={{ minHeight: "150dvh" }}>Component ORG</div>,
  },
]

const useHooksTabsTitleChooser = (): TabsTitleChooserTypes => {
  const [dataTabsState, setDataTabsState] = useState(dataTabs)

  const [activeTab, setActiveTab] = useState(0)

  const handleActiveTab = ({ index }) => {
    setActiveTab(index)
  }

  const handleRemoveORG = () => {
    setDataTabsState((prevState) =>
      prevState.filter(({ title }) => title !== "Resource Directory")
    )
  }

  const handleAddORG = () => {
    setDataTabsState((prevState) => {
      if (prevState.length === 1) {
        return [
          ...prevState,
          {
            title: "Resource Directory",
            component: <div style={{ minHeight: "150dvh" }}>Component ORG</div>,
          },
        ]
      } else {
        return prevState
      }
    })
  }
  // useEffect(() => {
  //   console.log("Render this!!", dataTabsState)
  // }, [dataTabsState])

  return {
    dataTabsStateTABS: dataTabsState,
    dataActiveTabsTABS: activeTab,
    handleActiveTabTABS: handleActiveTab,
    handleRemoveORGTABS: handleRemoveORG,
    handleAddORGTABS: handleAddORG,
  }
}

export const TABSTitleChooserProps = {
  name: `${NAME_COMPONENTS_EDITOR.TABS}` as const,
  types: {} as TabsTitleChooserTypes,
  hooks: useHooksTabsTitleChooser,
}
