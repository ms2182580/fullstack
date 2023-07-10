import { useState } from "react"
import { useCtx_ShowModal } from "../../../../../context/Ctx_ShowModal.js"
import { ORG_ST_About } from "../../../../../utils/ORG_ST_About_D.js"
import { useScrollLock } from "../../../../../utils/useScrollLock.js"
import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { H4 } from "../../../../ui/heading_body_text/HeaderFonts.js"
import { ST_D_Detail_About_Modal } from "./ST_D_Detail_About_Modal.js"
import { ST_D_Detail_AboutWrapper } from "./styles/ST_D_Detail_AboutWrapper.js"

export const ST_D_Detail_About = ({ name, lastName, aboutRef }) => {
  const [aboutTextState, setAboutTextState] = useState(ORG_ST_About(name, lastName))

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
    <ST_D_Detail_AboutWrapper
      id="About"
      ref={aboutRef}>
      <H4 hover>About</H4>_
      <div>
        <P>
          {isTruncated ? formattedText : aboutTextState}
          {isTruncated && <span onClick={handleShowModal}>show more</span>}
        </P>
        {showModal && (
          <ST_D_Detail_About_Modal
            showModal={showModal}
            handleHideModal={handleHideModal}
            aboutTextState={aboutTextState}
          />
        )}
      </div>
    </ST_D_Detail_AboutWrapper>
  )
}
