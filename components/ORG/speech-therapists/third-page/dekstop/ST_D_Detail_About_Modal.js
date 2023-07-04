import { useEffect, useRef } from "react"
import ReactPlayer from "react-player"
import { XSvg } from "../../../../../assets/Icons/index.js"
import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { H4 } from "../../../../ui/heading_body_text/HeaderFonts.js"
import { ST_D_Detail_About_ModalWrapper } from "./styles/ST_D_Detail_About_ModalWrapper.js"

export const ST_D_Detail_About_Modal = ({ showModal, handleHideModal, aboutTextState }) => {
  const componentRef = useRef(null)
  useEffect(() => {
    function handleClickOutside(event) {
      if (componentRef.current && !componentRef.current.contains(event.target)) {
        handleHideModal()
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [componentRef])


  return (
    <ST_D_Detail_About_ModalWrapper
      ref={componentRef}
      showModal={showModal}>
      <span onClick={() => handleHideModal()}>
        <XSvg />
      </span>

      <div>
        <H4 hover>About</H4>
        <P>{aboutTextState}</P>
      </div>

      <div>
        <H4 hover>Media</H4>

        <ReactPlayer
          width="100%"
          height="80%"
          controls
          url="https://www.youtube.com/watch?v=FK9j7D3hrE0"
        />

      </div>
    </ST_D_Detail_About_ModalWrapper>
  )
}
