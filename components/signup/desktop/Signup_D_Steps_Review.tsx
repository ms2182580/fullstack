import {
  Signup_ReviewAddProfileSvg,
  Signup_ReviewPencilIcon,
  Signup_ReviewSvg,
} from "@/assets/icons"
import { useDialogLogic } from "@/components/ui/dialog/Dialog_D"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { useEffect, useRef, useState } from "react"
import { Signup_D_Steps_ReviewWrapper } from "./styles/Signup_D_Steps_ReviewWrapper"

/* 
!FH0
Create modal here!
*/
export const Signup_D_Steps_Review = () => {
  const {
    dialogRef,
    openDialog,
    closeDialog,
    refToCloseDialogClickingOutside,
    useHide,
  } = useDialogLogic()

  // useEffect(() => {
  //   openDialog()

  //   window.addEventListener("o")
  // }, [])

  const [isOpen, setIsOpen] = useState(false)
  console.log("isOpen:", isOpen)
  const refDialog = useRef<HTMLDialogElement>(null)

  const openModal = () => setIsOpen(true)
  const closeModal = () => {
    if (refDialog.current) {
      refDialog.current.close()
    }
    setIsOpen(false)
  }

  // useEffect(() => {
  //   if (refDialog.current && isOpen) {
  //     refDialog.current.showModal()
  //   }
  // }, [refDialog, isOpen])

  useEffect(() => {
    if (refDialog.current && isOpen) {
      refDialog.current.showModal()
    }

    openModal()
  }, [])

  return (
    <>
      <Signup_D_Steps_ReviewWrapper isOpen={isOpen}>
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
      {/* <Dialog_D
        theRef={dialogRef}
        handleCloseDialog={closeDialog}
        refToCloseDialogClickingOutside={refToCloseDialogClickingOutside}
        useHide={useHide}
      >
        <>
          <h2>Modal here</h2>
          <p>Some paragraph and so on</p>
        </>
      </Dialog_D> */}

      <dialog ref={refDialog} open={isOpen}>
        <div>
          <>
            <h2>Modal here</h2>
            <p>Some paragraph and so on</p>
            <button onClick={closeModal}>Close it</button>
          </>
        </div>
      </dialog>
    </>
  )
}
