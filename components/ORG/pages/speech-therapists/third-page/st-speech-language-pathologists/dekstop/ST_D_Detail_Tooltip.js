import { useOutsideHide } from '../../../../../../utils/useOutsideHide'

import { useRef, useState } from "react"
import { QuestionTooltip_STSvg } from '../../../../../../assets/Icons/index.js'
import { P } from '../../../../../ui/heading_body_text/DesktopMobileFonts'
import { H3 } from '../../../../../ui/heading_body_text/HeaderFonts'
import { ST_D_Detail_TooltipWrapper } from "./styles/ST_D_Detail_TooltipWrapper.js"

export const ST_D_Detail_Tooltip = () => {
  const [show, setShow] = useState(false)
  const componentRef = useRef(null)

  useOutsideHide(componentRef, setShow)

  const handleShow = () => {
    setShow((prevState) => !prevState)
  }

  return (
    <ST_D_Detail_TooltipWrapper
      ref={componentRef}
      onClick={handleShow}>
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
    </ST_D_Detail_TooltipWrapper>
  )
}
