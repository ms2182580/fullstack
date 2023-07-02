import { useState } from "react"
import { ORG_ST_About } from "../../../../../utils/ORG_ST_About_D.js"
import { Caption, P } from "../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { ST_M_Detail_AboutWrapper } from "./styles/ST_M_Detail_AboutWrapper.js"

export const ST_M_Detail_About = ({ name, lastName, theRef, scrollMarginTopState }) => {
  const [aboutTextState, setAboutTextState] = useState(ORG_ST_About(name, lastName))

  return (
    <ST_M_Detail_AboutWrapper
      id="About"
      ref={theRef}
      scrollMarginTopState={scrollMarginTopState}>
      <Caption
        primary_cta
        bolder>
        About
      </Caption>

      <P>{aboutTextState}.</P>
    </ST_M_Detail_AboutWrapper>
  )
}
