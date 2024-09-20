import { SBSG_ContentWrapper } from "./styles/SBSG_ContentWrapper"

import { cloneElement, Fragment, isValidElement } from "react"
import { ComponentSteps_Type } from "."

type Props = {
  componentSteps: ComponentSteps_Type
  activeStep: number
  handleNextStep: (e) => void
}

export const SBSG_Content = ({
  componentSteps,
  activeStep,
  handleNextStep,
}: Props) => {
  return (
    <SBSG_ContentWrapper>
      {componentSteps.map(({ component, props }, index) => {
        if (index !== activeStep) return null

        const propsWithHandler = { ...props, handleNextStep }

        return (
          <Fragment key={index}>
            {isValidElement(component) &&
              cloneElement(component, propsWithHandler)}
            <button onClick={handleNextStep} onKeyDown={handleNextStep}>
              Next
            </button>
          </Fragment>
        )
      })}
    </SBSG_ContentWrapper>
  )
}
