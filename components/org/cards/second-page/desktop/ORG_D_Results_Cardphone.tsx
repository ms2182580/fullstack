import { CopiedPopup } from "@/components/ui/copiedPopup/copiedPopup"
import { useCopyText } from "@/utils/useCopiedpopupHooks"
import { PhoneResultsSvg } from "../../../../../assets/icons/index"
import { ORG_D_Results_CardPhoneWrapper } from "./styles/ORG_D_Results_CardPhoneWrapper"

type Props = {
  phoneNumber: string
}

export const ORG_D_Results_Cardphone = ({ phoneNumber = "_" }: Props) => {
  const { handleCopyTextAndShowDialog, textCopied, showDialog, refDialog } =
    useCopyText()

  return (
    <>
      <ORG_D_Results_CardPhoneWrapper>
        <PhoneResultsSvg />
        {/* !FH Add the feature of copy the phoneNumber with Enter key */}
        <p
          tabIndex={0}
          onClick={handleCopyTextAndShowDialog}
          onKeyDown={handleCopyTextAndShowDialog}
        >
          {phoneNumber}
        </p>
        <CopiedPopup
          textCopied={textCopied}
          showDialog={showDialog}
          refDialog={refDialog}
        />
      </ORG_D_Results_CardPhoneWrapper>
    </>
  )
}
