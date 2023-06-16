import { useState } from "react"
import { useCtx_ShowModal } from "../../../../context/Ctx_ShowModal.js"
import { ORG_ST_About } from "../../../../utils/ORG_ST_About.js"
import { useScrollLock } from "../../../../utils/useScrollLock.js"
import { useWidthWindow1024 } from "../../../../utils/useWidthWindow1024.js"
import { Caption, P } from "../../../ui/heading_body_text/DesktopMobileFonts"
import { H4 } from "../../../ui/heading_body_text/HeaderFonts"
import { STDetail_About_Modal } from "./dekstop/STDetail_About_Modal.js"
import { STDetail_AboutWrapper } from "./styles/STDetail_AboutWrapper"

export const STDetail_About = ({ name, lastName, aboutRef }) => {
  const [aboutTextState, setAboutTextState] = useState(ORG_ST_About(name, lastName))

  const { isMobile } = useWidthWindow1024()

  const [isTruncated, setIsTruncated] = useState(true)
  const [formattedText, setFormattedText] = useState(aboutTextState.substring(0, 220) + "...")

  const [showModal, setShowModal] = useState(false)
  const { lockScroll, unlockScroll } = useScrollLock()
  const { setModalShowedCtx } = useCtx_ShowModal()

  const handleShowModal = () => {
    lockScroll()
    setShowModal(true)
    setModalShowedCtx(true)
  }

  const handleHideModal = () => {
    unlockScroll()
    setShowModal(false)
    setModalShowedCtx(false)
  }

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
            {isTruncated && <span onClick={handleShowModal}>show more</span>}
          </P>
          {showModal && (
            <STDetail_About_Modal
              showModal={showModal}
              handleHideModal={handleHideModal}
              aboutTextState={aboutTextState}
            />
          )}
        </div>
      ) : (
        <P>{aboutTextState}.</P>
      )}
    </STDetail_AboutWrapper>
  )
}
