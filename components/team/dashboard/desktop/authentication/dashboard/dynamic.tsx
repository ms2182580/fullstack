import { ALL_ROUTES_INTERNAL } from "@/utils/ALL_ROUTES"
import {
  ComponentsToRenderAvailable_Type,
  useDynamicComponentToRender,
} from "@/utils/useDynamicComponentToRender"
import { cloneElement, isValidElement } from "react"

const componentsToRenderAvailable: ComponentsToRenderAvailable_Type = [
  {
    route: ALL_ROUTES_INTERNAL.AUTHENTICATION.TELL_US_ABOUT_YOU,
    component: <h1>TELL_US_ABOUT_YOU</h1>,
  },
  {
    route: ALL_ROUTES_INTERNAL.AUTHENTICATION.SIGNIN,
    component: <h1>SIGNIN</h1>,
  },
  {
    route: ALL_ROUTES_INTERNAL.AUTHENTICATION.SIGNUP,
    component: <h1>SIGNUP</h1>,
  },
]

export const TeamDashboardDynamic = (parameters) => {
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
