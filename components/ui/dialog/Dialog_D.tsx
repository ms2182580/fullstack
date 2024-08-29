import { Close_Icon_SVG } from "@/assets/icons"
import { Dialog_DWrapper } from "./styles/Dialog_DWrapper"

export type Dialog_D_Props = {
  theRef: RefObject<HTMLDialogElement>
  handleCloseDialog: (event: Event) => void
  refToCloseDialogClickingOutside: RefObject<HTMLDivElement>
  useHide: (refToCloseDialogClickingOutside, handleCloseDialog) => void
  children: ReactElement

  shouldOpenModalAlone?: boolean
  shouldOpenModalAloneDelay?: number

  shouldCloseModalAlone?: boolean
  shouldCloseModalAloneDelay?: number

  setCheckModalIsOpen?: (e: boolean) => void
}

export const Dialog_D = ({
  theRef,
  handleCloseDialog,
  refToCloseDialogClickingOutside,
  useHide,
  children,

  shouldOpenModalAlone = false,
  shouldOpenModalAloneDelay = 0,

  shouldCloseModalAlone = false,
  shouldCloseModalAloneDelay = 1200,
  setCheckModalIsOpen,
}: Dialog_D_Props): ReactElement => {
  useHide(refToCloseDialogClickingOutside, handleCloseDialog)

  useEffect(() => {
    let timeoutId: any = null

    if (theRef.current && shouldOpenModalAlone && setCheckModalIsOpen) {
      timeoutId = setTimeout(() => {
        theRef.current?.showModal()
        setCheckModalIsOpen(true)
      }, shouldOpenModalAloneDelay)
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [])

  useEffect(() => {
    let timeoutId: any = null

    if (theRef.current && shouldCloseModalAlone && setCheckModalIsOpen) {
      timeoutId = setTimeout(() => {
        theRef.current?.close()
        setCheckModalIsOpen(false)
      }, shouldCloseModalAloneDelay)
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [])

  return (
    <Dialog_DWrapper ref={theRef}>
      <span ref={refToCloseDialogClickingOutside}>
        <Close_Icon_SVG
          onClick={handleCloseDialog}
          onKeyDown={handleCloseDialog}
          tabIndex={0}
        />
        {children}
      </span>
    </Dialog_DWrapper>
  )
}

import {
  Dispatch,
  KeyboardEvent,
  MouseEvent,
  ReactElement,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react"

/* MouseEvent<HTMLSpanElement, MouseEvent>
    KeyboardEvent<HTMLSpanElement>
    
    */

type UseDialogLogic_Return = {
  dialogRef: RefObject<HTMLDialogElement>
  openDialog: ({
    event,
  }: {
    event: MouseEvent | KeyboardEvent<HTMLElement>
  }) => void
  closeDialog: ({ event }: { event: Event }) => void
  refToCloseDialogClickingOutside: RefObject<HTMLDivElement>
  useHide: (ref: RefObject<HTMLElement>, handleStateOutside: () => void) => void
  setCheckModalIsOpen: Dispatch<any>
  checkModalIsOpen: Boolean | any
}

export const useDialogLogic = (): UseDialogLogic_Return => {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const refToCloseDialogClickingOutside = useRef<HTMLDivElement>(null)
  const [checkModalIsOpen, setCheckModalIsOpen] = useState<Boolean | any>(false)

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
      e?.type === "mousedown" ||
      e?.type === "click" ||
      (e?.code === "Enter" && e?.key === "Enter" && e?.type === "keydown") ||
      e?.code === "Escape"
    ) {
      e.preventDefault()
      setCheckModalIsOpen(false)
      dialogRef?.current?.close()
    }
  }

  const useHide = (ref, handleStateOutside) => {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref?.current?.contains(event.target)) {
          setCheckModalIsOpen(false)
          handleStateOutside(event)
        }
      }

      function handleKeydownEscape(event) {
        if (ref.current && event.key === "Escape") {
          setCheckModalIsOpen(false)
          handleStateOutside(event)
        }
      }

      document.addEventListener("mousedown", handleClickOutside)
      document.addEventListener("keydown", handleKeydownEscape)

      return () => {
        document.removeEventListener("mousedown", handleClickOutside)
        document.removeEventListener("keydown", handleKeydownEscape)
      }
    }, [refToCloseDialogClickingOutside])
  }

  return {
    dialogRef,
    openDialog,
    closeDialog,
    refToCloseDialogClickingOutside,
    useHide,
    setCheckModalIsOpen,
    checkModalIsOpen,
  }
}
