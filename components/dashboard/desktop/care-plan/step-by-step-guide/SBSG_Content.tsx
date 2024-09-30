import { cloneElement, Fragment, isValidElement } from "react"
import { SBSG_ContentWrapper } from "./styles/SBSG_ContentWrapper"

export const SBSG_Content = (...allProps) => {
  const {
    componentSteps,
    activeStep,
    handleNextStep,
    handleNoProfileSelected,
  }: any = allProps[0]

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
    </SBSG_ContentWrapper>
  )
}
