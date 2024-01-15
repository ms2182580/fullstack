import { ORG_HighlightPlusSvg } from "../../../assets/icons/index"
import { P } from "../../ui/heading_body_text/DesktopMobileFonts"
import { Highlights_2_DWrapper } from "./styles/Highlights_2_DWrapper.js"

export const Highlights_2_D = ({ highlights, withIcon = true }) => {
  if (highlights === undefined) {
    return <p>❌Highlights_2_D prop is undefined</p>
  }

  return (
    <Highlights_2_DWrapper>
      {Array.isArray(highlights) ? (
        highlights.map((x) => (
          <>
            <div key={x}>
              {withIcon ? (
                <>
                  <ORG_HighlightPlusSvg />
                </>
              ) : null}

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
