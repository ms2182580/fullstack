import { EmailResultsSvg } from "../../../../../assets/icons/index.js"
import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts"
import { ORG_D_Results_CardEmailWrapper } from "./styles/ORG_D_Results_CardEmailWrapper"

type Props = {
  email?: string
}

export const ORG_D_Results_CardEmail = ({ email = "_" }: Props) => {
  return (
    <>
      {email !== "_" && (
        <>
          <ORG_D_Results_CardEmailWrapper shouldBeDisplayed={email !== "_"}>
            <EmailResultsSvg />
            {/* !FH Add the feature of copy the email with Enter key */}
            <P tabIndex={0}>{email}</P>
          </ORG_D_Results_CardEmailWrapper>
        </>
      )}
    </>
  )
}
