import { useCtxDataCreatePlan } from "@/context/dashboard/care_plan/ctx-create-plan-data"
import { cloneElement, Fragment, isValidElement } from "react"
import { ComponentSteps_Type } from "."
import { SBSGContentSkip } from "./sbsg-content-skip"
import { SBSG_ContentWrapper } from "./styles/SBSG_ContentWrapper"

type SBSG_ContentPropsType = {
  componentSteps: ComponentSteps_Type
  activeStep: number
  handleNextStep: (e) => void
  shouldDisplaySkipButton: boolean
}

export const SBSG_Content = ({
  componentSteps,
  activeStep,
  handleNextStep,
  shouldDisplaySkipButton,
}: SBSG_ContentPropsType) => {
  const { stateProfileSelectedSBSG1, handleNoProfileSelectedSBSG1 } =
    useCtxDataCreatePlan().SBSG1

  const handleUseNoProfileSelectedSBSG1 = (e) => {
    if (
      (e.type === "click" || e.key === "Enter") &&
      stateProfileSelectedSBSG1 === null
    ) {
      handleNoProfileSelectedSBSG1()
    }
  }

  return (
    <SBSG_ContentWrapper>
      {componentSteps.map(({ component, props }, index) => {
        if (index !== activeStep) return null

        const propsToComponent = {
          ...props,
        }

        return (
          <Fragment key={index}>
            {isValidElement(component) &&
              cloneElement(component, propsToComponent)}
            <button
              onClick={(e) => {
                handleUseNoProfileSelectedSBSG1(e)
                handleNextStep(e)
              }}
              onKeyDown={(e) => {
                handleUseNoProfileSelectedSBSG1(e)
                handleNextStep(e)
              }}
            >
              Next
            </button>
          </Fragment>
        )
      })}
      {shouldDisplaySkipButton && <SBSGContentSkip />}
    </SBSG_ContentWrapper>
  )
}
