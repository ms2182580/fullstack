import { useDialogLogic } from "@/components/ui/dialog/Dialog_D"
import { SaveResourceHearthWrapper } from "./styles/SaveResourceHearthWrapper"

export const SaveResourceHearth = () => {
  const {
    dialogRef,
    openDialog,
    closeDialog,
    refToCloseDialogClickingOutside,
    useHide,
    checkModalIsOpen,
  } = useDialogLogic()

  return (
    <SaveResourceHearthWrapper>SaveResourceHearth</SaveResourceHearthWrapper>
  )
}
