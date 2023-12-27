import { EmailResultsSvg } from "../../../../../assets/icons/index.js"
import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { ORG_D_Results_CardEmailWrapper } from "./styles/ORG_D_Results_CardEmailWrapper.js"

export const ORG_D_Results_CardEmail = ({ email }) => {
  return (
    <ORG_D_Results_CardEmailWrapper>
      <EmailResultsSvg />

      <P>{email}</P>
    </ORG_D_Results_CardEmailWrapper>
  )
}
