import { ALL_ROUTES } from "@/utils/ALL_ROUTES"
import {
  ComponentsToRenderAvailable_Type,
  useDynamicComponentToRender,
} from "@/utils/useDynamicComponentToRender"
import { cloneElement, isValidElement } from "react"
import { INDEX_D_AIChat } from "./ai_chat"
import { INDEX_D_CarePlan } from "./care_plan"
import { INDEX_D_Documents } from "./documents"
import { INDEX_D_OrgDashboard } from "./org_dashboard"
import { INDEX_D_Saved } from "./saved"

const componentsToRenderAvailable: ComponentsToRenderAvailable_Type = [
  {
    route: ALL_ROUTES.DASHBOARD_SECTIONS.DOCUMENTS,
    component: <INDEX_D_Documents />,
  },
  {
    route: ALL_ROUTES.DASHBOARD_SECTIONS.AI_CHAT,
    component: <INDEX_D_AIChat />,
  },
  {
    route: ALL_ROUTES.DASHBOARD_SECTIONS.RESOURCE_DIRECTORY,
    component: <INDEX_D_OrgDashboard />,
  },
  {
    route: ALL_ROUTES.DASHBOARD_SECTIONS.SAVED,
    component: <INDEX_D_Saved />,
  },
  {
    route: ALL_ROUTES.DASHBOARD_SECTIONS.CARE_PLAN,
    component: <INDEX_D_CarePlan />,
  },
]

export const DYNAMIC_Dashboard = () => {
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
