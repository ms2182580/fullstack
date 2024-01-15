import { useState } from "react"
import { ShareSvg } from "../../../../../assets/icons/index.js"
import { useCtx_ShowModal } from "../../../../../context/Ctx_ShowModal.js"
import { useScrollLock } from "../../../../../utils/useScrollLock.js"
import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts"
import { ORG_D_Detail_ShareModal } from "./ORG_D_Detail_ShareModal.js"
import { ORG_D_Detail_ShareWrapper } from "./styles/ORG_D_Detail_ShareWrapper.js"

export const ORG_D_Detail_Share = ({ picture, name, lastName }) => {
  const [showModal, setShowModal] = useState(false)
  const [showQRCode, setShowQRCode] = useState(false)

  // const componentRef = useRef(null)
  // useOutsideHide(componentRef, setShowModal)

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
    setShowQRCode(false)
  }

  return (
    <>
      <ORG_D_Detail_ShareWrapper
        onClick={handleShowModal}
        onKeyDown={handleShowModal}
        tabIndex={0}
      >
        <ShareSvg />
        <P primary_hover>Share</P>
      </ORG_D_Detail_ShareWrapper>

      {showModal && (
        <ORG_D_Detail_ShareModal
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
