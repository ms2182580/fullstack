import { ArrowRightSvg, LeftArrowSvg } from "@/assets/icons"
import MicSVG from "@/assets/icons/org/third-page/mic.svg"
import PaperPlaneRightSVG from "@/assets/icons/org/third-page/paper-plane.svg"
import PaperclipSVG from "@/assets/icons/org/third-page/paperclip.svg"
import ThunderSVG from "@/assets/icons/org/third-page/thunder.svg"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { H3, H4 } from "@/components/ui/heading_body_text/HeaderFonts"
import { useScrollHorizontal } from "@/utils/useScrollHorizontal"
import { useRef, useState } from "react"
import { ORG_D_Detail_LastSectionDialogWrapper } from "../../second-page/desktop/styles/ORG_D_Detail_MoreResourcesDialogWrapper"

const optionsAI = [
  "Calculate Jeremy’s salary",
  "Get tax reduction to hire Jeremy",
  "Hire Jeremy at no cost",
]
export const ORG_D_Detail_LastSectionDialog = () => {
  const [stateTextarea, setStateTextarea] = useState("")

  const handleStateTextarea = (e) => {
    setStateTextarea(e.target.value)
  }

  const refULElements = useRef<HTMLUListElement | null>(null)

  const { moveToLeft, moveToRight, stateToCss, setListRef } =
    useScrollHorizontal(refULElements)

  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const handleFocusOnInput = () => {
    if (textareaRef.current) textareaRef.current?.focus()
  }

  return (
    <ORG_D_Detail_LastSectionDialogWrapper
      shouldDisplayLeftArrow={stateToCss.scrollRight}
      shouldArrowRightBeDisabled={stateToCss.reachFinal}
    >
      <header>
        <H3>Details</H3>
      </header>

      <article>
        <H4>Ask any question about this listing</H4>
        <div>
          <span>
            <PaperclipSVG />
            <MicSVG />
          </span>
          <textarea
            placeholder="Learn  about this position and this employer"
            value={stateTextarea}
            onChange={handleStateTextarea}
            ref={textareaRef}
            onClick={handleFocusOnInput}
          />
          <span>
            <PaperPlaneRightSVG />
          </span>
        </div>

        <div>
          <div>
            <div onClick={moveToLeft}>
              <LeftArrowSvg />
            </div>
            <div />
          </div>

          <ul
            ref={(el: any) => {
              setListRef(el)
              refULElements.current = el
            }}
          >
            {optionsAI.map((x) => (
              <li key={x}>
                <span>
                  <ThunderSVG />
                </span>
                <P>{x}</P>
              </li>
            ))}
          </ul>

          <div>
            <div onClick={moveToRight}>
              <ArrowRightSvg />
            </div>
          </div>
        </div>
      </article>
    </ORG_D_Detail_LastSectionDialogWrapper>
  )
}
