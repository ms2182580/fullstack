import { INDEX_D_CarePlan_TabsWrapper } from "./styles/index-wrapper"
import { TabsContent } from "./tabs-content"
import { TabsTitleChooser } from "./tabs-title-chooser"

/* 
!FH0
Make the context for "dataTabs" because this is going to be used on SBSG_4 (Search the directory instead) and the tabs
*/

// const dataTabs: DataTabs_Type = [
//   {
//     title: "Editor",
//     component: <Editor />,
//   },
//   {
//     title: "Resource Directory",
//     component: <div style={{ minHeight: "150dvh" }}>Component ORG</div>,
//   },
// ]

export const INDEX_D_CarePlanTabs = () => {
  // const [dataTabsState, setDataTabsState] = useState(dataTabs)

  // const [activeTab, setActiveTab] = useState(0)

  // const handleActiveTab = ({ index }) => {
  //   setActiveTab(index)
  // }

  // const handleRemoveORG = () => {
  //   setDataTabsState(
  //     dataTabs.filter(({ title }) => title !== "Resource Directory")
  //   )
  // }

  return (
    <INDEX_D_CarePlan_TabsWrapper>
      {/* <TabsTitleChooser
        dataTabs={dataTabs}
        activeTab={activeTab}
        handleActiveTab={handleActiveTab}
      /> */}

      <TabsTitleChooser
      // dataTabs={dataTabsState}
      // activeTab={activeTab}
      // handleActiveTab={handleActiveTab}
      // handleRemoveORG={handleRemoveORG}
      />

      <TabsContent
      // dataTabs={dataTabsState}
      // activeTab={activeTab}
      />
    </INDEX_D_CarePlan_TabsWrapper>
  )
}
