import { useState } from "react"
import { useCtx_ShowModal } from "../../../../../context/Ctx_ShowModal.js"
import { useScrollLock } from "../../../../../utils/useScrollLock.js"
import { Caption } from "../../../../ui/heading_body_text/DesktopMobileFonts"
import { ORG_D_Detail_MainCardLeftPhotosModal } from "./ORG_D_Detail_MainCardLeftPhotosModal.js"
import { ORG_D_Detail_MainCardLeftPhotosWrapper } from "./styles/ORG_D_Detail_MainCardLeftPhotosWrapper.js"

export const ORG_D_Detail_MainCardLeftPhotos = ({ photo, name, lastName }) => {
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
    <>
      <ORG_D_Detail_MainCardLeftPhotosWrapper
        onClick={handleShowModal}
        onKeyDown={handleShowModal}
        tabIndex={0}
      >
        <Caption hyperlink_normal>6 photos</Caption>
      </ORG_D_Detail_MainCardLeftPhotosWrapper>

      {showModal && (
        <ORG_D_Detail_MainCardLeftPhotosModal
          showModal={showModal}
          handleHideModal={handleHideModal}
          photo={photo}
          name={name}
          lastName={lastName}
        />
      )}
    </>
  )
}
