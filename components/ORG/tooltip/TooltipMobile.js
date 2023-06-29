import { TooltipMobileWrapper } from "./styles/TooltipMobileWrapper.js"

import { useRef, useState } from "react"
import { QuestionTooltip_STSvg } from "../../../assets/Icons/index.js"
import { useOutsideHide } from "../../../utils/useOutsideHide.js"
import { P } from "../../ui/heading_body_text/DesktopMobileFonts.js"
import { H3 } from "../../ui/heading_body_text/HeaderFonts.js"

export const TooltipMobile = () => {
  const [show, setShow] = useState(false)
  const componentRef = useRef(null)

  useOutsideHide(componentRef, setShow)

  const handleShow = () => {
    setShow((prevState) => !prevState)
  }

  return (
    <TooltipMobileWrapper show={show}>
      <span
        onTouchStart={handleShow}
        onClick={handleShow}>
        <QuestionTooltip_STSvg />
      </span>

      {show ? (
        <div ref={componentRef}>
          <div />
          <span>
            <H3 cta>CCC-SLP</H3>
            <P>Certificate of Clinical Competence in Speech Language pathology</P>
            <P>- Nationally recognized professional from the American Speech-</P>
            <P>Language-Hearing Association (ASHA).</P>
          </span>
        </div>
      ) : null}

      {/* {show ? <>Showing something✅</> : <>❌</>} */}
    </TooltipMobileWrapper>
  )
}
