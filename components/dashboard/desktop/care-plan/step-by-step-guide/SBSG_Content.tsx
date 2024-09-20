import { SBSG_ContentWrapper } from "./styles/SBSG_ContentWrapper"

import { cloneElement, Fragment, isValidElement } from "react"
import { ComponentSteps_Type } from "."

type Props = {
  componentSteps: ComponentSteps_Type
  activeStep: number
  handleNextStep: ({ e, index }) => void
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

        return (
          <Fragment key={index}>
            {isValidElement(component) && cloneElement(component, props)}
            <button onClick={(e) => handleNextStep({ e, index })}>Next</button>
          </Fragment>
        )
      })}
    </SBSG_ContentWrapper>
  )
}
