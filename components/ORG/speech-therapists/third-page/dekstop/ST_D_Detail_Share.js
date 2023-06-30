import { useState } from "react"
import { ShareSvg } from "../../../../../assets/Icons/index.js"
import { useCtx_ShowModal } from "../../../../../context/Ctx_ShowModal.js"
import { useScrollLock } from "../../../../../utils/useScrollLock.js"

import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { ST_D_Detail_ShareModal } from "./ST_D_Detail_ShareModal.js"
import { ST_D_Detail_ShareWrapper } from "./styles/ST_D_Detail_ShareWrapper.js"

export const ST_D_Detail_Share = ({ picture, name, lastName }) => {
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
      <ST_D_Detail_ShareWrapper onClick={handleShowModal}>
        <ShareSvg tabIndex={0} />
        <P primary_hover>Share</P>
      </ST_D_Detail_ShareWrapper>

      {showModal && (
        <ST_D_Detail_ShareModal
          showModal={showModal}
          handleHideModal={handleHideModal}
          picture={picture}
          name={name}
          lastName={lastName}
          showQRCode={showQRCode}
          setShowQRCode={setShowQRCode}
        />
      )}

    </>
  )
}
