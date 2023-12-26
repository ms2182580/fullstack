import { EmailORGSvg } from "../../../../../assets/icons/index.js"
import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { ORG_D_Detail_CardEmailWrapper } from "./styles/ORG_D_Detail_CardEmailWrapper.js"

export const ORG_D_Detail_CardEmail = ({ email }) => {
  return (
    <ORG_D_Detail_CardEmailWrapper>
      <div>
        <EmailORGSvg />
        <P bold>Email:</P>
      </div>

      <P tabIndex={0}>{email}</P>
    </ORG_D_Detail_CardEmailWrapper>
  )
}
