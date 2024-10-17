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
  stateProfileSelectedSBSG1: any
  handleProfileSelectedSBSG1: any
  handleNoProfileSelectedSBSG1: any
}

export const SBSG_Content = (...allProps) => {
  const {
    componentSteps,
    activeStep,
    handleNextStep,
    shouldDisplaySkipButton,
  }: SBSG_ContentPropsType = allProps[0]

  const { stateProfileSelectedSBSG1, handleNoProfileSelectedSBSG1 } =
    useCtxDataCreatePlan().SBSG1

  const handleUseNoProfileSelectedSBSG1 = ({ e, componentStepIndex }) => {
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
          ...allProps[0],
        }

        return (
          <Fragment key={index}>
            {isValidElement(component) &&
              cloneElement(component, propsToComponent)}
            <button
              onClick={(e) => {
                handleUseNoProfileSelectedSBSG1({
                  e,
                  componentStepIndex: index,
                })
                handleNextStep(e)
              }}
              onKeyDown={(e) => {
                handleUseNoProfileSelectedSBSG1({
                  e,
                  componentStepIndex: index,
                })
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
