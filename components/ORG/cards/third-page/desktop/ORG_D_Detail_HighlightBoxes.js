import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { ORG_D_Detail_HighlightBoxesWrapper } from "./styles/ORG_D_Detail_HighlightBoxesWrapper.js"

export const ORG_D_Detail_HighlightBoxes = ({ meetingFormat }) => {
  if (meetingFormat === undefined) {
    return
  }

  return (
    <ORG_D_Detail_HighlightBoxesWrapper>
      {meetingFormat.map((x) => (
        <div key={x}>
          <P>{x}</P>
        </div>
      ))}
    </ORG_D_Detail_HighlightBoxesWrapper>
  )
}
