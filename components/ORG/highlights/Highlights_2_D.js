import { ORG_HighlightPlusSvg } from "../../../assets/Icons/index"
import { P } from "../../ui/heading_body_text/DesktopMobileFonts.js"
import { Highlights_2_DWrapper } from "./styles/Highlights_2_DWrapper.js"

export const Highlights_2_D = ({ highlights }) => {
  if (highlights === undefined) {
    return <p>❌Highlight prop is undefined</p>
  }

  return (
    <Highlights_2_DWrapper>
      {Array.isArray(highlights) ? (
        highlights.map((x) => (
          <>
            <div key={x}>
              <ORG_HighlightPlusSvg />

              <P>{x}</P>
            </div>
          </>
        ))
      ) : typeof highlights === "string" ? (
        <>
          <div>
            <ORG_HighlightPlusSvg />
            <P>{highlights}</P>
          </div>
        </>
      ) : null}
    </Highlights_2_DWrapper>
  )
}
