import { EmailORGSvg } from "../../../../../../assets/icons/index.js"
import { P } from "../../../../../ui/heading_body_text/DesktopMobileFonts"
import { ST_M_Detail_CardEmailWrapper } from "./styles/ST_M_Detail_CardEmailWrapper.js"

export const ST_M_Detail_CardEmail = ({ email }) => {
  return (
    <ST_M_Detail_CardEmailWrapper>
      <EmailORGSvg />
      <div>
        <P>{email}</P>
      </div>
    </ST_M_Detail_CardEmailWrapper>
  )
}
