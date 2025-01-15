import { ALL_ROUTES_INTERNAL } from "@/utils/ALL_ROUTES"
import {
  ComponentsToRenderAvailable_Type,
  useDynamicComponentToRender,
} from "@/utils/useDynamicComponentToRender"
import { cloneElement, isValidElement } from "react"
import { OrgFirst } from "./org/00-first"
import { OrgSecond } from "./org/01-second"
import { OrgThird } from "./org/02-third"

const componentsToRenderAvailable: ComponentsToRenderAvailable_Type = [
  {
    route: ALL_ROUTES_INTERNAL.RESOURCES_SECTION.FIRST,
    component: <OrgFirst />,
  },
  {
    route: ALL_ROUTES_INTERNAL.RESOURCES_SECTION.SECOND,
    component: <OrgSecond />,
  },
  {
    route: ALL_ROUTES_INTERNAL.RESOURCES_SECTION.THIRD,
    component: <OrgThird />,
  },
]

export const DYNAMIC_TeamsNewSearchResources = () => {
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
