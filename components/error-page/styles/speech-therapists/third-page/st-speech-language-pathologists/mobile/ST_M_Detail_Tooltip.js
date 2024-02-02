import { useRef, useState } from "react"
import { QuestionTooltip_DefaultSvg } from "../../../../../../../assets/icons/index.js"
import { useOutsideHide } from "../../../../../../../utils/useOutsideHide.js"
import { P } from "../../../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { H3 } from "../../../../../../ui/heading_body_text/HeaderFonts.js"
import { ST_M_Detail_TooltipWrapper } from "./styles/ST_M_Detail_TooltipWrapper.js"

export const ST_M_Detail_Tooltip = ({ isThirdPage = false }) => {
  const [show, setShow] = useState(false)
  const componentRef = useRef(null)

  useOutsideHide(componentRef, setShow)

  const handleShow = () => {
    setShow((prevState) => !prevState)
  }

  return (
    <ST_M_Detail_TooltipWrapper show={show} isThirdPage={isThirdPage}>
      <span onTouchStart={handleShow} onClick={handleShow}>
        <QuestionTooltip_DefaultSvg />
      </span>

      {show ? (
        <div ref={componentRef}>
          <div />
          <span>
            <H3 cta>CCC-SLP</H3>
            <P>
              Certificate of Clinical Competence in Speech Language pathology
            </P>
            <P>
              - Nationally recognized professional from the American Speech-
            </P>
            <P>Language-Hearing Association (ASHA).</P>
          </span>
        </div>
      ) : null}
    </ST_M_Detail_TooltipWrapper>
  )
}
