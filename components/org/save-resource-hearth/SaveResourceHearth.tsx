import { ORG_D_Results_HearthSvg } from "@/assets/icons"
import { Dialog_D, useDialogLogic } from "@/components/ui/dialog/Dialog_D"
import { FunctionComponent, SVGProps, useState } from "react"
import { SaveResourceHearthWrapper } from "./styles/SaveResourceHearthWrapper"

type SaveResourceDialog_Type = {
  SVGCustom?: FunctionComponent<SVGProps<SVGSVGElement>>
  nameOfResource: string
}

export const SaveResourceDialog = ({
  SVGCustom = ORG_D_Results_HearthSvg,
  nameOfResource,
}: SaveResourceDialog_Type) => {
  const {
    dialogRef,
    openDialog,
    closeDialog,
    refToCloseDialogClickingOutside,
    useHide,
    checkModalIsOpen,
  } = useDialogLogic()

  const [clickOnSVG, setClickOnSVG] = useState(false)

  const handleClickOnSVG = (e) => {
    if (e.type === "click" || e.key === "Enter") {
      setClickOnSVG((prevState) => !prevState)
    }
  }

  return (
    <>
      <SaveResourceHearthWrapper
        onClick={(e) => {
          handleClickOnSVG(e)
          if (!clickOnSVG) {
            openDialog({ event: e })
          }
        }}
        onKeyDown={(e) => {
          handleClickOnSVG(e)
          if (!clickOnSVG) {
            openDialog({ event: e })
          }
        }}
        clickOnSVG={clickOnSVG}
        checkModalIsOpen={checkModalIsOpen}
        tabIndex={0}
      >
        <SVGCustom />
      </SaveResourceHearthWrapper>

      <Dialog_D
        theRef={dialogRef}
        handleCloseDialog={(e) => closeDialog({ event: e })}
        refToCloseDialogClickingOutside={refToCloseDialogClickingOutside}
        useHide={useHide}
      >
        <div style={{ width: "500px", aspectRatio: "2/1" }}>
          <h2>Sucess!</h2>
          <p>'{nameOfResource}' Saved!</p>
        </div>
      </Dialog_D>
    </>
  )
}
