import { ALL_ROUTES_INTERNAL } from "@/utils/ALL_ROUTES"
import {
  ComponentsToRenderAvailable_Type,
  useDynamicComponentToRender,
} from "@/utils/useDynamicComponentToRender"
import { cloneElement, isValidElement } from "react"

const componentsToRenderAvailable: ComponentsToRenderAvailable_Type = [
  {
    route: ALL_ROUTES_INTERNAL.DASHBOARD_SECTIONS.DASHBOARD,
    component: <h1>Dashboard here</h1>,
  },
  {
    route: ALL_ROUTES_INTERNAL.DASHBOARD_SECTIONS.RESOURCES,
    component: <h1>ORG HERE</h1>,
  },
  {
    route: ALL_ROUTES_INTERNAL.DASHBOARD_SECTIONS.CATEGORIES,
    component: <h1>AI HERE</h1>,
  },
  {
    route: ALL_ROUTES_INTERNAL.DASHBOARD_SECTIONS.WRITE_CONTENT,
    component: <h1>Write content</h1>,
  },
  {
    route: ALL_ROUTES_INTERNAL.DASHBOARD_SECTIONS.SAVED,
    component: <h1>SAVED content</h1>,
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
