import { ALL_ROUTES_INTERNAL } from "@/utils/ALL_ROUTES"
import {
  ComponentsToRenderAvailable_Type,
  useDynamicComponentToRender,
} from "@/utils/useDynamicComponentToRender"
import { cloneElement, isValidElement } from "react"

const componentsToRenderAvailable: ComponentsToRenderAvailable_Type = [
  {
    route: ALL_ROUTES_INTERNAL.RESOURCES_SECTION.FIRST,
    component: <h1>Resources First here</h1>,
  },
  {
    route: ALL_ROUTES_INTERNAL.RESOURCES_SECTION.SECOND,
    component: <h1>Resources SECOND here</h1>,
  },
  {
    route: ALL_ROUTES_INTERNAL.RESOURCES_SECTION.THIRD,
    component: <h1>Resources THIRD here</h1>,
  },
]

export const TeamsNewSearchResourcesDynamic = () => {
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
