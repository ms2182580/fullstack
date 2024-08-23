import { ALL_ROUTES } from "@/utils/ALL_ROUTES"
import {
  ComponentsToRenderAvailable_Type,
  useDynamicComponentToRender,
} from "@/utils/useDynamicComponentToRender"
import { cloneElement, isValidElement } from "react"
import { Dashboard_D_Sections_AIChat } from "./Dashboard_D_Sections_AIChat"
import { Dashboard_D_Sections_CarePlan } from "./Dashboard_D_Sections_CarePlan"
import { Dashboard_D_Sections_Documents } from "./Dashboard_D_Sections_Documents"
import { Dashboard_D_Sections_ORG } from "./Dashboard_D_Sections_ORG"
import { Dashboard_D_Sections_Saved } from "./Dashboard_D_Sections_Saved"

const componentsToRenderAvailable: ComponentsToRenderAvailable_Type = [
  {
    route: ALL_ROUTES.DASHBOARD_SECTIONS.DOCUMENTS,
    component: <Dashboard_D_Sections_Documents />,
  },
  {
    route: ALL_ROUTES.DASHBOARD_SECTIONS.AI_CHAT,
    component: <Dashboard_D_Sections_AIChat />,
  },
  {
    route: ALL_ROUTES.DASHBOARD_SECTIONS.RESOURCE_DIRECTORY,
    component: <Dashboard_D_Sections_ORG />,
  },
  {
    route: ALL_ROUTES.DASHBOARD_SECTIONS.SAVED,
    component: <Dashboard_D_Sections_Saved />,
  },
  {
    route: ALL_ROUTES.DASHBOARD_SECTIONS.CARE_PLAN,
    component: <Dashboard_D_Sections_CarePlan />,
  },
]

export const Dashboard_D_Sections = () => {
  const { componentToRender, propsToComponent } = useDynamicComponentToRender({
    componentsToRenderAvailable,
  })

  return (
    <>
      {isValidElement(componentToRender) &&
        cloneElement(componentToRender, propsToComponent)}
    </>
  )
}
