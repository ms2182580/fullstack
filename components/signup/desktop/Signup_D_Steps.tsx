import { ALL_ROUTES } from "@/utils/ALL_ROUTES"
import {
  ComponentsToRenderAvailable_Type,
  useDynamicComponentToRender,
} from "@/utils/useDynamicComponentToRender"
import { cloneElement, isValidElement } from "react"
import { Signup_D_Steps_CreateProfile } from "./Signup_D_Steps_CreateProfile"
import { Signup_D_Steps_Demography } from "./Signup_D_Steps_Demography"
import { Signup_D_Steps_Finish } from "./Signup_D_Steps_Finish"
import { Signup_D_Steps_Review } from "./Signup_D_Steps_Review"
import { Signup_D_Steps_Situation } from "./Signup_D_Steps_Situation"
import { Signup_D_Steps_TellUs } from "./Signup_D_Steps_TellUs"
import { Signup_D_Steps_WhoAreYou } from "./Signup_D_Steps_WhoAreYou"

const componentsToRenderAvailable: ComponentsToRenderAvailable_Type = [
  {
    route: ALL_ROUTES.SIGNUP_STEPS.WHO_ARE_YOU,
    component: <Signup_D_Steps_WhoAreYou />,
  },
  {
    route: ALL_ROUTES.SIGNUP_STEPS.CREATE_PROFILE,
    component: <Signup_D_Steps_CreateProfile />,
  },
  {
    route: ALL_ROUTES.SIGNUP_STEPS.DEMOGRAPHY,
    component: <Signup_D_Steps_Demography />,
  },
  {
    route: ALL_ROUTES.SIGNUP_STEPS.SITUATION,
    component: <Signup_D_Steps_Situation />,
  },
  {
    route: ALL_ROUTES.SIGNUP_STEPS.TELL_US_YOUR_STORY,
    component: <Signup_D_Steps_TellUs />,
  },
  {
    route: ALL_ROUTES.SIGNUP_STEPS.REVIEW_AND_SAVE,
    component: <Signup_D_Steps_Review />,
  },
  {
    route: ALL_ROUTES.SIGNUP_STEPS.FINISH,
    component: <Signup_D_Steps_Finish />,
  },
]

export const Signup_D_Steps = () => {
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
