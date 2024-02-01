import React from "react"
import { First_Step_Wrapper } from "./first-step.style"
import { H2, H3 } from "@/components/ui/heading_body_text/HeaderFonts"
import { BtnSmall } from "@/components/ui/buttons/general/styles/ButtonStyled"

export const FirstStep = () => {
  return (
    <First_Step_Wrapper>
      <div className="step_header">
        <div>
          <H2>Create care plan</H2>
          <H3>Services </H3>
        </div>
        <BtnSmall secondary>Ask</BtnSmall>
      </div>
    </First_Step_Wrapper>
  )
}
