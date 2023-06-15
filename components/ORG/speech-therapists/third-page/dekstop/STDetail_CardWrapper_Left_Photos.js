import { useState } from "react"
import { useCtx_ShowModal } from "../../../../../context/Ctx_ShowModal.js"
import { useScrollLock } from "../../../../../utils/useScrollLock.js"
import { Caption } from "../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { STDetail_CardWrapper_Left_Photos_Modal } from "./STDetail_CardWrapper_Left_Photos_Modal.js"
import { STDetail_CardWrapper_Left_PhotosWrapper } from "./styles/STDetail_CardWrapper_Left_PhotosWrapper.js"

export const STDetail_CardWrapper_Left_Photos = ({ photo, name, lastName }) => {
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
      <STDetail_CardWrapper_Left_PhotosWrapper onClick={handleShowModal}>
        <Caption hyperlink_normal>6 photos</Caption>
      </STDetail_CardWrapper_Left_PhotosWrapper>
      {showModal && (
        <STDetail_CardWrapper_Left_Photos_Modal
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
