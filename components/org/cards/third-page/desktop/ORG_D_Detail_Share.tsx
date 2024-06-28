import { ShareSvg_2 } from "@/assets/icons/index"
import { Dialog_D, useDialogLogic } from "@/components/ui/dialog/Dialog_D"
import { ORG_D_Detail_ShareModal } from "./ORG_D_Detail_ShareModal"
import { ORG_D_Detail_ShareWrapper } from "./styles/ORG_D_Detail_ShareWrapper"

export const ORG_D_Detail_Share = ({ picture, name, lastName }) => {
  const {
    dialogRef,
    openDialog,
    closeDialog,
    refToCloseDialogClickingOutside,
    useHide,
    checkModalIsOpen,
  } = useDialogLogic()

  return (
    <>
      <ORG_D_Detail_ShareWrapper
        onClick={(e) => openDialog({ event: e })}
        onKeyDown={(e) => openDialog({ event: e })}
        tabIndex={0}
      >
        <ShareSvg_2 />
      </ORG_D_Detail_ShareWrapper>

      <Dialog_D
        theRef={dialogRef}
        handleCloseDialog={(e) => closeDialog({ event: e })}
        refToCloseDialogClickingOutside={refToCloseDialogClickingOutside}
        useHide={useHide}
      >
        <ORG_D_Detail_ShareModal
          picture={picture}
          name={name}
          lastName={lastName}
        />
      </Dialog_D>
    </>
  )
}
