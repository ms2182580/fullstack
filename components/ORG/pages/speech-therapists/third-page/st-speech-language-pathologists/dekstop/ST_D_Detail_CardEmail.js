import { EmailORGSvg } from "../../../../../../assets/Icons/index.js"
import { P } from "../../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { ST_D_Detail_CardEmailWrapper } from "./styles/ST_D_Detail_CardEmailWrapper.js"

export const ST_D_Detail_CardEmail = ({ email }) => {
  return (
    <ST_D_Detail_CardEmailWrapper>
      <div>
        <EmailORGSvg />
        <P bold>Email:</P>
      </div>

      <P>{email}</P>
    </ST_D_Detail_CardEmailWrapper>
  )
}
