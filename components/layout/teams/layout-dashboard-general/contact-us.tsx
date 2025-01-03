import SVGArrow from "@/assets/icons/arrow_up.svg"
import { Dialog_D, useDialogLogic } from "@/components/ui/dialog/Dialog_D"
import { ContactUsForm } from "./contact-us-form"
import { ContactUsWrapper } from "./styles/contact-us-wrapper"

export const ContactUs = () => {
  const {
    dialogRef,
    openDialog,
    closeDialog,
    refToCloseDialogClickingOutside,
    useHide,
    checkModalIsOpen,
  } = useDialogLogic()

  return (
    <ContactUsWrapper>
      <p onClick={openDialog} onKeyDown={openDialog} tabIndex={0}>
        Contact us <SVGArrow />
      </p>

      <Dialog_D
        theRef={dialogRef}
        handleCloseDialog={closeDialog}
        refToCloseDialogClickingOutside={refToCloseDialogClickingOutside}
        useHide={useHide}
      >
        <ContactUsForm />
      </Dialog_D>
    </ContactUsWrapper>
  )
}
