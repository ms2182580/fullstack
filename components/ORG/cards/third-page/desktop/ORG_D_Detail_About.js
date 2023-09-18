import { useState } from "react"
import { useCtx_ShowModal } from "../../../../../context/Ctx_ShowModal.js"
import { ORG_ST_About } from "../../../../../utils/ORG_ST_About_D.js"
import { useScrollLock } from "../../../../../utils/useScrollLock.js"
import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { H4 } from "../../../../ui/heading_body_text/HeaderFonts.js"
import { ORG_D_Detail_About_Modal } from "./ORG_D_Detail_About_Modal.js"
import { ORG_D_Detail_AboutWrapper } from "./styles/ORG_D_Detail_AboutWrapper.js"

export const ORG_D_Detail_About = ({ name, lastName, aboutRef }) => {
  const [aboutTextState, setAboutTextState] = useState(ORG_ST_About(name, lastName))

  const [isTruncated, setIsTruncated] = useState(true)
  const [formattedText, setFormattedText] = useState(aboutTextState.substring(0, 220) + "...")

  const [showModal, setShowModal] = useState(false)
  const { lockScroll, unlockScroll } = useScrollLock()
  const { setModalShowedCtx } = useCtx_ShowModal()

  const handleShowModal = (e) => {
    if (e.type === "click" || e.key === "Enter") {
      lockScroll()
      setShowModal(true)
      setModalShowedCtx(true)
    }
  }

  const handleHideModal = () => {
    unlockScroll()
    setShowModal(false)
    setModalShowedCtx(false)
  }

  return (
    <ORG_D_Detail_AboutWrapper
      id="About"
      ref={aboutRef}>
      <H4>About</H4>
      <div>
        <P>
          {isTruncated ? formattedText : aboutTextState}
          {isTruncated && (
            <span
              onClick={handleShowModal}
              onKeyDown={handleShowModal}
              tabIndex={0}>
              show more
            </span>
          )}
        </P>
        {showModal && (
          <ORG_D_Detail_About_Modal
            showModal={showModal}
            handleHideModal={handleHideModal}
            aboutTextState={aboutTextState}
          />
        )}
      </div>
    </ORG_D_Detail_AboutWrapper>
  )
}
