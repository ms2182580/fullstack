import { Dialog_D, useDialogLogic } from "@/components/ui/dialog/Dialog_D"
import { Caption } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { ORG_D_Detail_MainCardPhotosModal } from "./ORG_D_Detail_MainCardPhotosModal"
import { ORG_D_Detail_MainCardLeftPhotosWrapper } from "./styles/ORG_D_Detail_MainCardLeftPhotosWrapper"

export const ORG_D_Detail_MainCardPhotos = ({
  photo,
  name,
  lastName,
  amountOfPhotos,
}) => {
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
      <ORG_D_Detail_MainCardLeftPhotosWrapper
        onClick={(e) => openDialog({ event: e })}
        onKeyDown={(e) => openDialog({ event: e })}
        tabIndex={0}
      >
        <Caption>{amountOfPhotos} photos</Caption>
      </ORG_D_Detail_MainCardLeftPhotosWrapper>

      <Dialog_D
        theRef={dialogRef}
        handleCloseDialog={(e) => closeDialog({ event: e })}
        refToCloseDialogClickingOutside={refToCloseDialogClickingOutside}
        useHide={useHide}
      >
        <ORG_D_Detail_MainCardPhotosModal
          photo={photo}
          name={name}
          lastName={lastName}
        />
      </Dialog_D>
    </>
  )
}
