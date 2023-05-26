import { useState } from "react"
import { ORG_ST_About } from "../../../../utils/ORG_ST_About.js"
import { useWidthWindow } from "../../../../utils/useWidthWindow.js"
import { Caption, P } from "../../../ui/heading_body_text/DesktopMobileFonts"
import { H4 } from "../../../ui/heading_body_text/HeaderFonts"
import { STDetail_AboutWrapper } from "./styles/STDetail_AboutWrapper"

export const STDetail_About = ({ name, lastName, aboutRef }) => {
  const [aboutTextState, setAboutTextState] = useState(ORG_ST_About(name, lastName))

  const { isMobile } = useWidthWindow()

  const [isTruncated, setIsTruncated] = useState(true)
  const [formattedText, setFormattedText] = useState(aboutTextState.substring(0, 220) + "...")

  // const formatText = isMobile === false && isTruncated ? aboutTextState.substring(0, 220) : null
  // console.log("formatText:", formatText)

  return (
    <STDetail_AboutWrapper
      isMobile={isMobile}
      id="About"
      ref={aboutRef}>
      {isMobile === false ? (
        <>
          <H4 hover>About</H4>
        </>
      ) : (
        <>
          <Caption
            primary_cta
            bolder>
            About
          </Caption>
        </>
      )}

      {isMobile === false ? (
        <div>
          <P>
            {isTruncated ? formattedText : aboutTextState}
            {isTruncated && <span onClick={() => setIsTruncated(false)}>show more</span>}
          </P>
        </div>
      ) : (
        <P>{aboutTextState}.</P>
      )}
    </STDetail_AboutWrapper>
  )
}
