import {
  QuestionTooltip_AASvg,
  QuestionTooltip_DefaultSvg,
} from "@/assets/icons/index.js"
import {
  Tooltip_KEYS,
  Tooltip_VALUES,
  TypeOfTooltipSVG_LIKE,
} from "@/utils/org/third-page/tooltip"
import { useRef, useState } from "react"
import { useOutsideHide } from "../../../../../utils/useOutsideHide.js"
import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts"
import { H3 } from "../../../../ui/heading_body_text/HeaderFonts"
import { ORG_D_Detail_TooltipWrapper } from "./styles/ORG_D_Detail_TooltipWrapper"

/* 
!FH
This can help to make a better tooltip
https://css-tip.com/tooltip-mask/ */

export const ORG_D_Detail_Tooltip = ({ allProps }) => {
  let isCustom = allProps[Tooltip_KEYS.WHAT_DISPLAY] === Tooltip_VALUES.CUSTOM
  let isDefault = allProps[Tooltip_KEYS.WHAT_DISPLAY] === Tooltip_VALUES.DEFAULT

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
      {allProps[Tooltip_KEYS.WHAT_DISPLAY] !== Tooltip_VALUES.NO_DISPLAY && (
        <>
          {isCustom &&
          allProps[Tooltip_KEYS.CUSTOM_DATA][Tooltip_KEYS.SVG] ===
            TypeOfTooltipSVG_LIKE.ATTORNEY ? (
            <span>
              <QuestionTooltip_AASvg />
            </span>
          ) : (
            <span>
              <QuestionTooltip_DefaultSvg />
            </span>
          )}
        </>
      )}

      {show ? (
        <div>
          <div />
          <span>
            {isDefault || allProps === "DEFAULT" ? (
              <>
                <H3>CCC-SLP</H3>
                <P>
                  Certificate of Clinical Competence in Speech Language
                  pathology
                </P>
                <P>
                  - Nationally recognized professional from the American Speech-
                </P>
                <P>Language-Hearing Association (ASHA).</P>
              </>
            ) : (
              <>
                <H3>
                  {allProps[Tooltip_KEYS.CUSTOM_DATA][Tooltip_KEYS.TEXT].title}
                </H3>
                {allProps[Tooltip_KEYS.CUSTOM_DATA][
                  Tooltip_KEYS.TEXT
                ].paragraphs.map((x) => {
                  return (
                    <>
                      <P key={x}>{x}</P>
                    </>
                  )
                })}
              </>
            )}
          </span>
        </div>
      ) : null}
    </ORG_D_Detail_TooltipWrapper>
  )
}
