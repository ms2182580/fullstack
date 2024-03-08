import { Close_Icon_SVG, Signup_D_UploadSvg } from "@/assets/icons"
import {
  Caption,
  P,
} from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { useEffect, useRef } from "react"
import { Signup_D_Steps_TellUs_DialogWrapper } from "./styles/Signup_D_Steps_TellUs_DialogWrapper"

export const Signup_D_Steps_TellUs_Dialog = ({ theRef, handleCloseDialog }) => {
  const refToCloseDialogClickingOutside = useRef(null)

  useHide(refToCloseDialogClickingOutside, handleCloseDialog)

  return (
    <Signup_D_Steps_TellUs_DialogWrapper ref={theRef}>
      <div ref={refToCloseDialogClickingOutside}>
        <Close_Icon_SVG
          onClick={handleCloseDialog}
          onKeyDown={handleCloseDialog}
          tabIndex={0}
        />
        <h6>Upload profile picture</h6>
        <P>
          Upload a previous document to speed up the care plan creation process.
        </P>
        <div>
          <div>
            <Signup_D_UploadSvg />
            <P>
              Drag and Drop or <Caption tabIndex={0}>choose</Caption>
            </P>
          </div>
          <Caption>Supported file types: .png, .jpg, .jpeg</Caption>
          <Caption>5 MB Max</Caption>
        </div>
        <button>Upload</button>
      </div>
    </Signup_D_Steps_TellUs_DialogWrapper>
  )
}

const useHide = (ref, handleStateOutside) => {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        handleStateOutside(event)
      }
    }

    function handleKeydown(event) {
      if (ref.current && event.code === "Escape") {
        handleStateOutside(event)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("keydown", handleKeydown)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleKeydown)
    }
  }, [ref])
}
