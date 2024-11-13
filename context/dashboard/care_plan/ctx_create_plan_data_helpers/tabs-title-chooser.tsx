import { Editor } from "@/components/dashboard/desktop/care_plan/editor/editor"
import { INDEX_D_OrgOnTab } from "@/components/dashboard/desktop/care_plan/org_on_tabs"
import { ReactElement, RefObject, useEffect, useRef, useState } from "react"
import { NAME_COMPONENTS_EDITOR } from "./consts"

const NAME_STATES_TABS = {
  DATA_TABS_STATE: `dataTabsState${NAME_COMPONENTS_EDITOR.TABS}`,
  DATA_ACTIVE_TABS: `dataActiveTabs${NAME_COMPONENTS_EDITOR.TABS}`,
  HANDLE_ACTIVE_TAB: `handleActiveTab${NAME_COMPONENTS_EDITOR.TABS}`,
  HANDLE_REMOVE_ORG: `handleRemoveORG${NAME_COMPONENTS_EDITOR.TABS}`,
  HANDLE_ADD_ORG: `handleAddORG${NAME_COMPONENTS_EDITOR.TABS}`,
  FOCUS_TARGET_ELEMENT_TABS_ORG: `focusTargetElementTABSORG`,
  HANDLE_FOCUS_TARGET_ELEMENT_TABS_ORG: `handleFocusTargetElementTABSORG`,
} as const

type TabsTitleChooserTypes = {
  [NAME_STATES_TABS.DATA_TABS_STATE]: DataTabs_Type
  [NAME_STATES_TABS.DATA_ACTIVE_TABS]: number
  [NAME_STATES_TABS.HANDLE_ACTIVE_TAB]: ({ index }: { index: number }) => void
  [NAME_STATES_TABS.HANDLE_REMOVE_ORG]: () => void
  [NAME_STATES_TABS.HANDLE_ADD_ORG]: () => void
  [NAME_STATES_TABS.FOCUS_TARGET_ELEMENT_TABS_ORG]: RefObject<HTMLLIElement>
  [NAME_STATES_TABS.HANDLE_FOCUS_TARGET_ELEMENT_TABS_ORG]: () => void
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
    component: <INDEX_D_OrgOnTab />,
  },
]

const useHooksTabsTitleChooser = (): TabsTitleChooserTypes => {
  const [dataTabsState, setDataTabsState] = useState(dataTabs)
  const [activeTab, setActiveTab] = useState(0)

  const focusTargetElement = useRef<HTMLLIElement>(null)

  const handleFocusTargetElement = () => {
    if (focusTargetElement.current) {
      focusTargetElement.current.focus()
    }
  }

  const handleActiveTab = ({ index }) => {
    setActiveTab(index)
  }

  const handleRemoveORG = () => {
    setDataTabsState((prevState) =>
      prevState.filter(({ title }) => title !== "Resource Directory")
    )
  }

  const handleAddORG = () => {
    if (dataTabsState.length === 1) {
      setDataTabsState((prevState) => [
        ...prevState,
        {
          title: "Resource Directory",
          component: <INDEX_D_OrgOnTab />,
        },
      ])
    }
    setActiveTab(1)
  }

  useEffect(() => {
    if (dataTabsState.length === 1) {
      setActiveTab(0)
    }
  }, [dataTabsState])

  return {
    dataTabsStateTABS: dataTabsState,
    dataActiveTabsTABS: activeTab,
    handleActiveTabTABS: handleActiveTab,
    handleRemoveORGTABS: handleRemoveORG,
    handleAddORGTABS: handleAddORG,
    focusTargetElementTABSORG: focusTargetElement,
    handleFocusTargetElementTABSORG: handleFocusTargetElement,
  }
}

export const TABSTitleChooserProps = {
  name: `${NAME_COMPONENTS_EDITOR.TABS}` as const,
  types: {} as TabsTitleChooserTypes,
  hooks: useHooksTabsTitleChooser,
}
