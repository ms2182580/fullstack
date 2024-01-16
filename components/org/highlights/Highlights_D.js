import { P } from "../../ui/heading_body_text/DesktopMobileFonts"
import { Highlights_DWrapper } from "./styles/Highlights_DWrapper.js"

export const Highlights_D = ({ highlights }) => {
  if (highlights === undefined) {
    return <p>❌Highlights_D prop is undefined</p>
  }

  return (
    <Highlights_DWrapper>
      {Array.isArray(highlights) ? (
        highlights.map((x, index) => (
          <>
            <div key={`${x}_${index}`}>
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
