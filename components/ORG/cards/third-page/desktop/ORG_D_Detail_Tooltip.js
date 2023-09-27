import { useRef, useState } from "react"
import { QuestionTooltip_STSvg } from "../../../../../assets/Icons/index.js"
import { useOutsideHide } from "../../../../../utils/useOutsideHide"
import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts"
import { H3 } from "../../../../ui/heading_body_text/HeaderFonts"
import { ORG_D_Detail_TooltipWrapper } from "./styles/ORG_D_Detail_TooltipWrapper.js"

/* 
!FH
This can help to make a better tooltip
https://css-tip.com/tooltip-mask/ */

export const ORG_D_Detail_Tooltip = () => {
  const [show, setShow] = useState(false)
  const componentRef = useRef(null)

  useOutsideHide(componentRef, setShow)

  const handleShow = (e) => {
    if (e.type === "click" || e.key === "Enter") {
      setShow((prevState) => !prevState)
    }
  }

  let checkIfLoseFocus = () => {
    setShow(false)
  }

  return (
    <ORG_D_Detail_TooltipWrapper
      ref={componentRef}
      onClick={handleShow}
      onKeyDown={handleShow}
      tabIndex={0}
      onBlur={checkIfLoseFocus}
    >
      <span>
        <QuestionTooltip_STSvg />
      </span>

      {show ? (
        <div>
          <div />
          <span>
            <H3 cta>CCC-SLP</H3>
            <P>Certificate of Clinical Competence in Speech Language pathology</P>
            <P>- Nationally recognized professional from the American Speech-</P>
            <P>Language-Hearing Association (ASHA).</P>
          </span>
        </div>
      ) : null}
    </ORG_D_Detail_TooltipWrapper>
  )
}
