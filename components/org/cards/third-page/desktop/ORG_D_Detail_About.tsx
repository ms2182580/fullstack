import { Dialog_D, useDialogLogic } from "@/components/ui/dialog/Dialog_D"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { ORG_ST_About } from "@/utils/ORG_ST_About_D.js"
import { useState } from "react"
import { ORG_D_Detail_About_Modal } from "./ORG_D_Detail_About_Modal.js"
import { ORG_D_Detail_AboutWrapper } from "./styles/ORG_D_Detail_AboutWrapper"

export const ORG_D_Detail_About = ({ name, lastName, aboutRef = null }) => {
  const aboutTextState = ORG_ST_About(name, lastName)

  const [isTruncated, setIsTruncated] = useState(true)
  const [formattedText, setFormattedText] = useState(
    aboutTextState.substring(0, 220) + "..."
  )

  const [showModal, setShowModal] = useState(false)
  // const { lockScroll, unlockScroll } = useScrollLock()
  // const { setModalShowedCtx } = useCtx_ShowModal()

  // const handleShowModal = (e) => {
  //   if (e.type === "click" || e.key === "Enter") {
  //     lockScroll()
  //     setShowModal(true)
  //     setModalShowedCtx(true)
  //   }
  // }

  // const handleHideModal = () => {
  //   unlockScroll()
  //   setShowModal(false)
  //   setModalShowedCtx(false)
  // }

  const {
    dialogRef,
    openDialog,
    closeDialog,
    refToCloseDialogClickingOutside,
    useHide,
    checkModalIsOpen,
  } = useDialogLogic()

  return (
    <ORG_D_Detail_AboutWrapper ref={aboutRef}>
      <div>
        <P>
          {isTruncated ? formattedText : aboutTextState}
          {isTruncated && (
            <span
              onClick={(e) => openDialog({ event: e })}
              onKeyDown={(e) => openDialog({ event: e })}
              tabIndex={0}
            >
              show more
            </span>
          )}
        </P>

        <Dialog_D
          theRef={dialogRef}
          handleCloseDialog={(e) => closeDialog({ event: e })}
          refToCloseDialogClickingOutside={refToCloseDialogClickingOutside}
          useHide={useHide}
        >
          <ORG_D_Detail_About_Modal
            // showModal={showModal}
            // handleHideModal={handleHideModal}
            aboutTextState={aboutTextState}
          />
        </Dialog_D>
      </div>
    </ORG_D_Detail_AboutWrapper>
  )
}
