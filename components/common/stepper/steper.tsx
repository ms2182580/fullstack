import { BackArrow_Icon_SVG, Help_Icon_SVG } from "@/assets/icons"
import React, { useState } from "react"
import styled from "styled-components"
import {
  Footer_Wrapper,
  ProgressBar,
  ProgressBarWrapper,
  StepTab,
  Stepper_Wrapper,
  Steps_Count,
  Tabs_Wrapper,
} from "./stepper.style"
import { BtnSmall } from "../../ui/buttons/general/styles/ButtonStyled"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"

interface Step {
  title: string
  content: React.ReactNode
}

interface StepperProps {
  steps: Step[]
}
const Stepper: React.FC<StepperProps> = ({ steps }) => {
  const [activeStep, setActiveStep] = useState(0)

  const handleStepClick = (stepIndex: number) => {
    if (stepIndex <= activeStep) {
      setActiveStep(stepIndex)
    }
  }

  const handleNextStep = () => {
    setActiveStep((prevStep) => prevStep + 1)
  }
  const handleBackStep = () => {
    setActiveStep((prevStep) => prevStep - 1)
  }

  return (
    <Stepper_Wrapper>
      {activeStep >= 1 && (
        <div className="back_icon" onClick={handleBackStep}>
          {" "}
          <BackArrow_Icon_SVG />
        </div>
      )}

      <ProgressBarWrapper>
        <ProgressBar activeStep={activeStep} stepsLength={steps.length} />
      </ProgressBarWrapper>
      <Steps_Count>
        Step {activeStep + 1} out of {steps.length}
      </Steps_Count>
      <div>{steps[activeStep].content}</div>
      {activeStep < steps.length - 1 && (
        <div className="stepper_footer">
          <BtnSmall width="100%" onClick={handleNextStep}>
            Next
          </BtnSmall>
          <Footer_Wrapper>
            <div onClick={handleNextStep}>Skip</div>
            <Help_Icon_SVG />
          </Footer_Wrapper>
        </div>
      )}
    </Stepper_Wrapper>
  )
}

export default Stepper
