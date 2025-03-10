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

//useDialogLogic ↓
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

type UseDialogLogic_Return = {
  dialogRef: RefObject<HTMLDialogElement>
  openDialog: (event: MouseEvent | KeyboardEvent<HTMLElement>) => void
  closeDialog: (event: Event) => void
  refToCloseDialogClickingOutside: RefObject<HTMLDivElement>
  useHide: (ref: RefObject<HTMLElement>, handleCloseDialog: () => void) => void
  setCheckModalIsOpen: Dispatch<any>
  checkModalIsOpen: boolean | any
}

export const useDialogLogic = (): UseDialogLogic_Return => {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const refToCloseDialogClickingOutside = useRef<HTMLDivElement>(null)
  const [checkModalIsOpen, setCheckModalIsOpen] = useState<boolean | any>(false)

  const openDialog = (e) => {
    if (
      e.type === "click" ||
      (e.code === "Enter" && e.key === "Enter" && e.type === "keydown")
    ) {
      e.preventDefault()
      setCheckModalIsOpen(true)
      dialogRef?.current?.showModal()
    }
  }

  const closeDialog = (e) => {
    if (
      e?.type === "mousedown" ||
      e?.type === "click" ||
      (e?.code === "Enter" && e?.key === "Enter" && e?.type === "keydown")
    ) {
      setCheckModalIsOpen(false)
      dialogRef?.current?.close()
    }
  }

  const useHide = (ref, handleCloseDialog) => {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref?.current?.contains(event.target)) {
          setCheckModalIsOpen(false)
          handleCloseDialog(event)
        }
      }

      function handleKeydownEscape(event) {
        if (ref.current && ref.current && event.key === "Escape") {
          setCheckModalIsOpen(false)
          handleCloseDialog(event)
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
