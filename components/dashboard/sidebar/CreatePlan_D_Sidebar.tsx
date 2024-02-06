import {
  Dashboard_CreatePlanCreateSvg,
  Dashboard_CreatePlanSaveSvg,
  Dashboard_CreatePlanSidebarLogoSvg,
  Dashboard_CreatePlanUploadSvg,
} from "@/assets/icons"
import { CreatePlan_D_SidebarWrapper } from "./styles/CreatePlan_D_SidebarWrapper"
import { useState } from "react"

export const CreatePlan_D_Sidebar = () => {
  const [option, setOption] = useState(1)
  let options = [
    {
      name: "Create",
      icon: <Dashboard_CreatePlanCreateSvg />,
      hander: () => setOption(1),
      id: "#",
    },
    {
      name: "Upload",
      icon: <Dashboard_CreatePlanUploadSvg />,
      hander: () => setOption(2),
      id: "upload",
    },
    {
      name: "Saved",
      icon: <Dashboard_CreatePlanSaveSvg />,
      hander: () => setOption(3),
      id: "saved",
    },
  ]
  return (
    <CreatePlan_D_SidebarWrapper currentOption={option}>
      <span>
        <Dashboard_CreatePlanSidebarLogoSvg />
        <span>BETA</span>
      </span>
      <ul>
        {options.map((option, index) => (
          <li key={index} onClick={option.hander} id={option.id}>
            {option.icon}
            <span>{option.name}</span>
          </li>
        ))}
      </ul>
    </CreatePlan_D_SidebarWrapper>
  )
}
