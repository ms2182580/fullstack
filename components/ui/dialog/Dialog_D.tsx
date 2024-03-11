import { Close_Icon_SVG } from "@/assets/icons"
import { Dialog_DWrapper } from "./styles/Dialog_DWrapper"

export type Dialog_D_Props = {
  theRef: RefObject<HTMLDialogElement>
  handleCloseDialog: (event: Event) => void
  refToCloseDialogClickingOutside: RefObject<HTMLDivElement>
  useHide: (refToCloseDialogClickingOutside, handleCloseDialog) => void
  children: ReactElement
}

export const Dialog_D = ({
  theRef,
  handleCloseDialog,
  refToCloseDialogClickingOutside,
  useHide,
  children,
}: Dialog_D_Props): ReactElement => {
  useHide(refToCloseDialogClickingOutside, handleCloseDialog)

  return (
    <Dialog_DWrapper ref={theRef}>
      <div ref={refToCloseDialogClickingOutside}>
        <Close_Icon_SVG
          onClick={handleCloseDialog}
          onKeyDown={handleCloseDialog}
          tabIndex={0}
        />
        {children}
      </div>
    </Dialog_DWrapper>
  )
}

import { ReactElement, RefObject, useEffect, useRef, useState } from "react"

export const useDialogLogic = () => {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const refToCloseDialogClickingOutside = useRef<HTMLDivElement>(null)
  const [checkModalIsOpen, setCheckModalIsOpen] = useState(false)

  const openDialog = ({ event: e }) => {
    if (
      e.type === "click" ||
      (e.code === "Enter" && e.key === "Enter" && e.type === "keydown")
    ) {
      e.preventDefault()
      dialogRef?.current?.showModal()
      setCheckModalIsOpen(true)
    }
  }

  const closeDialog = ({ event: e }) => {
    if (
      e.type === "mousedown" ||
      e.type === "click" ||
      (e.code === "Enter" && e.key === "Enter" && e.type === "keydown") ||
      e.code === "Escape"
    ) {
      dialogRef?.current?.close()
      setCheckModalIsOpen(false)
    }
  }

  const useHide = (ref, handleStateOutside) => {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref?.current?.contains(event.target)) {
          handleStateOutside(event)
        }
      }

      document.addEventListener("mousedown", handleClickOutside)

      return () => {
        document.removeEventListener("mousedown", handleClickOutside)
      }
    }, [refToCloseDialogClickingOutside])
  }

  return {
    dialogRef,
    openDialog,
    closeDialog,
    refToCloseDialogClickingOutside,
    useHide,
    checkModalIsOpen,
  }
}
