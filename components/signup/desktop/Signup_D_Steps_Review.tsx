import {
  Signup_ReviewAddProfileSvg,
  Signup_ReviewPencilIcon,
  Signup_ReviewSvg,
} from "@/assets/icons"
import { Dialog_D, useDialogLogic } from "@/components/ui/dialog/Dialog_D"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { Signup_D_Steps_Review_Dialog } from "./Signup_D_Steps_Review_Dialog"
import { Signup_D_Steps_ReviewWrapper } from "./styles/Signup_D_Steps_ReviewWrapper"

export const Signup_D_Steps_Review = () => {
  const {
    dialogRef,
    closeDialog,
    refToCloseDialogClickingOutside,
    useHide,
    setCheckModalIsOpen,
    checkModalIsOpen,
  } = useDialogLogic()

  return (
    <>
      <Signup_D_Steps_ReviewWrapper>
        <div>
          <span>
            <Signup_ReviewSvg />
            <h6>Kohlil Doe</h6>
          </span>
          <span>
            <P>Edit</P>
            <Signup_ReviewPencilIcon />
          </span>
        </div>
        <div>
          <span>
            <Signup_ReviewAddProfileSvg />
            <h6>Add another profile</h6>
          </span>
        </div>
      </Signup_D_Steps_ReviewWrapper>

      <Dialog_D
        theRef={dialogRef}
        handleCloseDialog={(e) => closeDialog({ event: e })}
        refToCloseDialogClickingOutside={refToCloseDialogClickingOutside}
        useHide={useHide}
        shouldOpenModalAlone={true}
        setCheckModalIsOpen={setCheckModalIsOpen}
        shouldCloseModalAlone={true}
        shouldCloseModalAloneDelay={3000}
      >
        <Signup_D_Steps_Review_Dialog />
      </Dialog_D>
    </>
  )
}
