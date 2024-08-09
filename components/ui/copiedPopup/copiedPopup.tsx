import {
  UseCopyText_State_Props,
  useShouldShowComponent,
} from "@/utils/useCopiedpopupHooks"
import { RefObject } from "react"
import { CopiedPopupWrapper } from "./styles/CopiedPopupWrapper"

type Props = {
  textCopied: UseCopyText_State_Props["textCopied"]
  showDialog: UseCopyText_State_Props["showDialog"]
  refDialog: RefObject<HTMLDialogElement>
}

export const CopiedPopup = ({ textCopied, showDialog, refDialog }: Props) => {
  useShouldShowComponent({ showDialog, refDialog })

  return (
    <CopiedPopupWrapper showDialog={showDialog} ref={refDialog}>
      <div>
        <p>Copied on clipboard!</p>
        <p>{textCopied}</p>
      </div>
    </CopiedPopupWrapper>
  )
}
