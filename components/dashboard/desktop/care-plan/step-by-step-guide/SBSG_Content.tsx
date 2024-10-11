import { cloneElement, Fragment, isValidElement } from "react"
import { ComponentSteps_Type } from "."
import { SBSGContentSkip } from "./sbsg-content-skip"
import { SBSG_ContentWrapper } from "./styles/SBSG_ContentWrapper"

type SBSG_ContentPropsType = {
  componentSteps: ComponentSteps_Type
  activeStep: number
  handleNextStep: (e) => void
  handleNoProfileSelected: (e) => void
  shouldDisplaySkipButton: boolean
}

export const SBSG_Content = (...allProps) => {
  const {
    componentSteps,
    activeStep,
    handleNextStep,
    handleNoProfileSelected,
    shouldDisplaySkipButton,
  }: SBSG_ContentPropsType = allProps[0]

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
                handleNoProfileSelected(e)
                handleNextStep(e)
              }}
              onKeyDown={(e) => {
                handleNoProfileSelected(e)
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
