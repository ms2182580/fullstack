import { useState } from "react"
import { ShareSvg } from "../../../../../assets/Icons/index.js"
import { useCtx_ShowModal } from "../../../../../context/Ctx_ShowModal.js"
import { useScrollLock } from "../../../../../utils/useScrollLock.js"

import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { STDetail_Share_Modal } from "./STDetail_Share_Modal.js"
import { STDetail_ShareWrapper } from "./styles/STDetail_ShareWrapper.js"

export const STDetail_Share = ({ picture, name, lastName }) => {
  const [showModal, setShowModal] = useState(false)
  const [showQRCode, setShowQRCode] = useState(false)

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
    setShowQRCode(false)
  }

  return (
    <>
      <STDetail_ShareWrapper onClick={handleShowModal}>
        <ShareSvg tabIndex={0} />
        <P primary_hover>Share</P>
      </STDetail_ShareWrapper>

      {showModal && (
        <STDetail_Share_Modal
          setShowModal={setShowModal}
          showModal={showModal}
          handleShowModal={handleShowModal}
          handleHideModal={handleHideModal}
          picture={picture}
          name={name}
          lastName={lastName}
          showQRCode={showQRCode}
          setShowQRCode={setShowQRCode}
        />
      )}

      {/* <STDetail_Share_Modal
        setShowModal={setShowModal}
        showModal={showModal}
        handleShowModal={handleShowModal}
        handleHideModal={handleHideModal}
        picture={picture}
        name={name}
        lastName={lastName}
        showQRCode={showQRCode}
        setShowQRCode={setShowQRCode}
      /> */}
    </>
  )
}
