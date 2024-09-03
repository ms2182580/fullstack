import { ORG_D_Results_HearthSvg } from "@/assets/icons"
import { Dialog_D, useDialogLogic } from "@/components/ui/dialog/Dialog_D"
import { FunctionComponent, SVGProps, useState } from "react"
import { css, keyframes } from "styled-components"
import { SaveResourceDialog_ChildrenSuccess } from "./SaveResourceDialog_ChildrenSuccess"
import {
  SaveResourceHearthWrapper,
  SaveResourceHearthWrapper_SVGStyles_Type,
} from "./styles/SaveResourceHearthWrapper"

type IsSVGCustom_Type = {
  SVGCustom: FunctionComponent<SVGProps<SVGSVGElement>>
  theSVGStyles: SaveResourceHearthWrapper_SVGStyles_Type
}

type SaveResourceDialog_Type = {
  isSVGCustom?: IsSVGCustom_Type
  nameOfResource: string
}

const keyFrames_modalIsOpen = keyframes`
  0% {
    transform: scale(0.9) translateX(0) translateY(0);
  }
  50% {
    transform: scale(1.1) translateX(-1px) translateY(-1px);
  }
  100% {
    transform: scale(0.9) translateX(0) translateY(0);
  }
`

const theSVGStylesDefault = () => css`
  filter: drop-shadow(3px 3px 8px hsl(3.5, 74.9%, 64.1%));

  animation: 2s ease-in-out infinite alternate ${keyFrames_modalIsOpen};
`

const isSVGCustomDefault: IsSVGCustom_Type = {
  SVGCustom: ORG_D_Results_HearthSvg,
  theSVGStyles: {
    forActive: "#e22",
    forHoverAndFocusVisible: "hsl(3.5, 74.9%, 64.1%)",
    forModalOpen: theSVGStylesDefault,
  },
}

export const SaveResourceDialog = ({
  isSVGCustom = isSVGCustomDefault,
  nameOfResource,
}: SaveResourceDialog_Type) => {
  const {
    SVGCustom = ORG_D_Results_HearthSvg,
    theSVGStyles = isSVGCustomDefault.theSVGStyles,
  }: IsSVGCustom_Type = isSVGCustom

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
        SVGStyles={theSVGStyles}
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
        <SaveResourceDialog_ChildrenSuccess
          nameOfResource={nameOfResource}
          closeDialog={closeDialog}
        />
      </Dialog_D>
    </>
  )
}
