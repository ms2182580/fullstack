import { P } from "../../ui/heading_body_text/DesktopMobileFonts.js"
import { Highlights_DWrapper } from "./styles/Highlights_DWrapper.js"

export const Highlights_D = ({ highlights }) => {
  if (highlights === undefined) {
    return (
      <p>❌Highlight prop is undefined</p>
    )
  }

  return (
    <Highlights_DWrapper>
      {Array.isArray(highlights) ? (
        highlights.map((x) => (
          <>
            <div key={x}>
              <P>{x}</P>
            </div>
          </>
        ))
      ) : typeof highlights === "string" ? (
        <>
          <div>
            <P>{highlights}</P>
          </div>
        </>
      ) : null}
    </Highlights_DWrapper>
  )
}
