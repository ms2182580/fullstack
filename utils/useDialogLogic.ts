import { useEffect, useRef } from "react"

export const useDialogLogic = () => {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const refToCloseDialogClickingOutside = useRef(null)

  const openDialog = (e) => {
    if (
      e.type === "click" ||
      (e.code === "Enter" && e.key === "Enter" && e.type === "keydown")
    ) {
      e.preventDefault()
      dialogRef?.current?.showModal()
    }
  }

  const closeDialog = (e) => {
    if (
      e.type === "mousedown" ||
      e.type === "click" ||
      (e.code === "Enter" && e.key === "Enter" && e.type === "keydown")
    ) {
      dialogRef?.current?.close()
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
  }
}
