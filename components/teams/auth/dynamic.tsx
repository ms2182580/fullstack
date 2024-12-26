import { ALL_ROUTES_INTERNAL } from "@/utils/ALL_ROUTES"
import {
  ComponentsToRenderAvailable_Type,
  useDynamicComponentToRender,
} from "@/utils/useDynamicComponentToRender"
import { cloneElement, isValidElement } from "react"
import { Signin } from "./signin"
import { Signup } from "./signup"
import { TellUsAboutYou } from "./tell_us_about_you"

const componentsToRenderAvailable: ComponentsToRenderAvailable_Type = [
  {
    route: ALL_ROUTES_INTERNAL.AUTHENTICATION.TELL_US_ABOUT_YOU,
    component: <TellUsAboutYou />,
  },
  {
    route: ALL_ROUTES_INTERNAL.AUTHENTICATION.SIGNIN,
    component: <Signin />,
  },
  {
    route: ALL_ROUTES_INTERNAL.AUTHENTICATION.SIGNUP,
    component: <Signup />,
  },
]

export const TeamDashboardDynamic = () => {
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
