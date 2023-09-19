import { useState } from "react"
import { useCtx_ShowModal } from "../../../../../../context/Ctx_ShowModal.js"
import { useScrollLock } from "../../../../../../utils/useScrollLock.js"
import { Caption } from "../../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { ST_D_Detail_MainCardLeftPhotosModal } from "./ST_D_Detail_MainCardLeftPhotosModal.js"
import { ST_D_Detail_MainCardLeftPhotosWrapper } from "./styles/ST_D_Detail_MainCardLeftPhotosWrapper.js"

export const ST_D_Detail_MainCardLeftPhotos = ({ photo, name, lastName }) => {
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
    <>
      <ST_D_Detail_MainCardLeftPhotosWrapper onClick={handleShowModal}>
        <Caption hyperlink_normal>6 photos</Caption>
      </ST_D_Detail_MainCardLeftPhotosWrapper>
      {showModal && (
        <ST_D_Detail_MainCardLeftPhotosModal
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
