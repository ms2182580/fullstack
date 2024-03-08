import { Close_Icon_SVG } from "@/assets/icons"
import { Dialog_DWrapper } from "./styles/Dialog_DWrapper"

export const Dialog_D = ({
  theRef,
  handleCloseDialog,
  refToCloseDialogClickingOutside,
  useHide,
  children,
}) => {
  useHide(refToCloseDialogClickingOutside, handleCloseDialog)

  return (
    <Dialog_DWrapper ref={theRef}>
      <div ref={refToCloseDialogClickingOutside}>
        <Close_Icon_SVG
          onClick={handleCloseDialog}
          onKeyDown={handleCloseDialog}
          tabIndex={0}
        />
        {children}
      </div>
    </Dialog_DWrapper>
  )
}
