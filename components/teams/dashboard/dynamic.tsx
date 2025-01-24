import { ALL_ROUTES_INTERNAL } from "@/utils/ALL_ROUTES"
import {
  ComponentsToRenderAvailable_Type,
  useDynamicComponentToRender,
} from "@/utils/useDynamicComponentToRender"
import { cloneElement, isValidElement } from "react"
import { INDEX_Categories } from "./categories"
import { INDEX_Resources } from "./resources"
import { INDEX_Saved } from "./saved"
import { INDEX_WriteContent } from "./write_content"

const componentsToRenderAvailable: ComponentsToRenderAvailable_Type = [
  {
    route: ALL_ROUTES_INTERNAL.DASHBOARD_SECTIONS.RESOURCES,
    component: <INDEX_Resources />,
  },
  {
    route: ALL_ROUTES_INTERNAL.DASHBOARD_SECTIONS.CATEGORIES,
    component: <INDEX_Categories />,
  },
  {
    route: ALL_ROUTES_INTERNAL.DASHBOARD_SECTIONS.WRITE_CONTENT,
    component: <INDEX_WriteContent />,
  },
  {
    route: ALL_ROUTES_INTERNAL.DASHBOARD_SECTIONS.SAVED,
    component: <INDEX_Saved />,
  },
]

export const DYNAMIC_TeamsDashboard = () => {
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
