import { EmailResultsSvg } from "@/assets/icons"
import { CopiedPopup } from "@/components/ui/copiedPopup/copiedPopup"
import { useCopyText } from "@/utils/useCopiedpopupHooks"
import { ORG_D_Results_CardEmailWrapper } from "./styles/ORG_D_Results_CardEmailWrapper"

type Props = {
  email?: string
}

export const ORG_D_Results_CardEmail = ({ email = "_" }: Props) => {
  const { handleCopyTextAndShowDialog, textCopied, showDialog, refDialog } =
    useCopyText()

  return (
    <>
      {email !== "_" && (
        <>
          <ORG_D_Results_CardEmailWrapper shouldBeDisplayed={email !== "_"}>
            <EmailResultsSvg />
            <p
              tabIndex={0}
              onClick={handleCopyTextAndShowDialog}
              onKeyDown={handleCopyTextAndShowDialog}
            >
              {email}
            </p>
            <CopiedPopup
              textCopied={textCopied}
              showDialog={showDialog}
              refDialog={refDialog}
            />
          </ORG_D_Results_CardEmailWrapper>
        </>
      )}
    </>
  )
}
