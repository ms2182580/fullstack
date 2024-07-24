import { ArrowRightSvg, LeftArrowSvg } from "@/assets/icons"
import MagicWandSVG from "@/assets/icons/org/third-page/magic-wand.svg"
import ThunderSVG from "@/assets/icons/org/third-page/thunder.svg"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { H2 } from "@/components/ui/heading_body_text/HeaderFonts"
import { NamesCategories_KEY } from "@/utils/org/categories/general/ALL_DATA"
import { useScrollHorizontal } from "@/utils/useScrollHorizontal"
import { useMemo, useRef } from "react"
import { ORG_D_Detail_AIChatWrapper } from "./styles/ORG_D_Detail_AIChatWrapper"

const optionsAI = [
  "Calculate salary",
  "See application",
  "Get contact information",
]

export const ORG_D_Detail_AIChat = ({ whichCategory }) => {
  const isVocational = useMemo(() => {
    return whichCategory === NamesCategories_KEY["VOCATIONAL RESOURCES"]
  }, [whichCategory])

  const refULElements = useRef<HTMLUListElement | null>(null)

  const { moveToLeft, moveToRight, stateToCss, setListRef } =
    useScrollHorizontal(refULElements)

  return (
    <ORG_D_Detail_AIChatWrapper>
      <H2>AI Chat</H2>
      <article>
        <P>Have questions about community classes?</P>
        <textarea placeholder="Ask me anything about services." />
        {isVocational && (
          <div>
            <div
              className={`${
                stateToCss.scrollRight ? "navBarLeftArrowShouldDisplay" : ""
              }`}
            >
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

            <div
              className={`${
                stateToCss.reachFinal ? "navBarRightArrowShouldDisable" : ""
              }`}
            >
              <div
                onClick={moveToRight}
                className={`${
                  stateToCss.reachFinal ? "navBarRightArrowShouldDisable" : ""
                }`}
              >
                <ArrowRightSvg />
              </div>
              <div />
            </div>
          </div>
        )}

        <button>{isVocational && <MagicWandSVG />} Ask</button>
      </article>
    </ORG_D_Detail_AIChatWrapper>
  )
}
