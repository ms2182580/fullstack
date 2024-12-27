import { ALL_ROUTES_INTERNAL } from "@/utils/ALL_ROUTES"
import {
  ComponentsToRenderAvailable_Type,
  useDynamicComponentToRender,
} from "@/utils/useDynamicComponentToRender"
import { cloneElement, isValidElement } from "react"
import { Signin } from "./signin"
import { Signup } from "./signup"

const componentsToRenderAvailable: ComponentsToRenderAvailable_Type = [
  {
    route: ALL_ROUTES_INTERNAL.AUTHENTICATION_SECTIONS.SIGNIN,
    component: <Signin />,
  },
  {
    route: ALL_ROUTES_INTERNAL.AUTHENTICATION_SECTIONS.SIGNUP,
    component: <Signup />,
  },
]

export const AuthDynamic = () => {
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
