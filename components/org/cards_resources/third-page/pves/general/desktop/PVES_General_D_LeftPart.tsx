import { TooltipExclamationSvg } from "@/assets/icons"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { H4 } from "@/components/ui/heading_body_text/HeaderFonts"
import { useState } from "react"
import { PVES_General_D_LeftPartWrapper, TooltipDisplay } from "./styles/PVES_General_D_LeftPartWrapper"

export const PVES_General_D_LeftPart = ({ allData }) => {
  const [showTooltipText, setShowTooltipText] = useState(false)

  let handleShowTooltipText = () => {
    setShowTooltipText(true)
  }
  let handleHideTooltipText = () => {
    setShowTooltipText(false)
  }

  return (
    <PVES_General_D_LeftPartWrapper>
      <div>
        <button>
          Apply now{" "}
          <span
            onMouseEnter={handleShowTooltipText}
            onMouseLeave={handleHideTooltipText}
            tabIndex={0}
            onFocus={handleShowTooltipText}
            onBlur={handleHideTooltipText}>
            <TooltipExclamationSvg />

            {showTooltipText ? (
              <>
                <ul className={TooltipDisplay.TOOLTIP_DISPLAY}>
                  {allData.tooltipApplyNow.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </>
            ) : null}
          </span>
        </button>
        <a href="#">
          See company on <span>LinkedIn</span>
        </a>
        <a href="#">
          Contact employer via <span>Indeed</span>
        </a>
      </div>

      <H4>{allData.workType.key}</H4>
      <P>{allData.workType.value}</P>

      <H4>{allData.salaryRange.key}</H4>
      <P>{allData.salaryRange.value}</P>

      <H4>{allData.ADA.key}</H4>
      <P>{allData.ADA.value}</P>
    </PVES_General_D_LeftPartWrapper>
  )
}
