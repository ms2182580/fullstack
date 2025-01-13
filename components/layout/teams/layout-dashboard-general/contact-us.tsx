import SVGArrow from "@/assets/icons/arrow_up.svg"
import { Dialog_D, useDialogLogic } from "@/components/ui/dialog/Dialog_D"
import { useGetHashFromRoute } from "@/utils/use-get-hash-from-route"
import { ContactUsForm } from "./contact-us-form"
import { ContactUsWrapper } from "./styles/contact-us-wrapper"

const aceptedHashes = ["contact-us", "contactus", "contact"]

export const ContactUs = () => {
  const {
    dialogRef,
    openDialog,
    closeDialog,
    refToCloseDialogClickingOutside,
    useHide,
    setCheckModalIsOpen,
    checkModalIsOpen,
  } = useDialogLogic()

  const { foundedHash } = useGetHashFromRoute({
    hashToCheck: window.location.hash,
    acceptedHash: aceptedHashes,
  })

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
        setCheckModalIsOpen={setCheckModalIsOpen}
        shouldOpenModalAlone={foundedHash}
        doNotCloseWithEscapeKey={true}
      >
        <ContactUsForm />
      </Dialog_D>
    </ContactUsWrapper>
  )
}
