import { timeToAnimate } from "@/components/ui/copiedPopup/styles/CopiedPopupWrapper"
import {
  KeyboardEvent,
  MouseEvent,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react"

export type UseCopyText_State_Props = {
  textCopied: string | null
  showDialog: boolean
  refDialog: HTMLDialogElement | null
}

export const useCopyText = (): {
  textCopied: UseCopyText_State_Props["textCopied"]
  showDialog: UseCopyText_State_Props["showDialog"]
  refDialog: RefObject<HTMLDialogElement>
  handleCopyTextAndShowDialog: (
    e: MouseEvent<HTMLElement> | KeyboardEvent<HTMLElement>
  ) => void
} => {
  const [textCopied, setTextCopied] =
    useState<UseCopyText_State_Props["textCopied"]>(null)

  const handleCopyText = (
    e: MouseEvent<HTMLElement> | KeyboardEvent<HTMLElement>
  ) => {
    if (
      (e.type === "click" ||
        (e.type === "keydown" && (e as KeyboardEvent).code === "Enter")) &&
      e.target instanceof Element &&
      e.target.textContent
    ) {
      navigator.clipboard.writeText(e.target.textContent)
      setTextCopied(e.target.textContent)
    }
  }

  const [showDialog, setShowDialog] =
    useState<UseCopyText_State_Props["showDialog"]>(false)

  const refDialog = useRef<UseCopyText_State_Props["refDialog"]>(null)

  const timeoutIdRef = useRef<NodeJS.Timeout | null>(null)

  const closeDialog = () => {
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current)
    }

    timeoutIdRef.current = setTimeout(() => {
      setShowDialog(false)
    }, timeToAnimate.vanishOnJS)
  }

  useEffect(() => {
    return () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current)
      }
    }
  }, [])

  const handleShowDialog = (
    e: MouseEvent<HTMLElement> | KeyboardEvent<HTMLElement>
  ) => {
    if (
      e.type === "click" ||
      (e.type === "keydown" && (e as KeyboardEvent).code === "Enter")
    ) {
      setShowDialog(true)
      closeDialog()
    }
  }

  /* This is the function that will be called when the user clicks on the text that he want to be copied and, at the same time, it will open the dialog */
  const handleCopyTextAndShowDialog = (e): void => {
    handleShowDialog(e)
    handleCopyText(e)
  }

  return { handleCopyTextAndShowDialog, textCopied, showDialog, refDialog }
}

export const useShouldShowComponent = ({
  showDialog,
  refDialog,
}: {
  showDialog: UseCopyText_State_Props["showDialog"]
  refDialog: RefObject<HTMLDialogElement>
}): void => {
  const [shouldShowComponent, setShouldShowComponent] = useState<boolean>(false)

  useEffect(() => {
    if (showDialog === false) {
      let timeoutId: NodeJS.Timeout | undefined

      timeoutId = setTimeout(() => {
        setShouldShowComponent(false)
      }, timeToAnimate.vanishOnJS)

      return () => {
        if (timeoutId) {
          clearTimeout(timeoutId)
        }
      }
    } else {
      setShouldShowComponent(true)
    }
  }, [showDialog])

  useEffect(() => {
    if (!shouldShowComponent && refDialog?.current) {
      refDialog.current?.close()
    }

    if (shouldShowComponent && refDialog.current) {
      refDialog.current?.show()
    }
  }, [shouldShowComponent])
}
