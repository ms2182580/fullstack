import { EmailORGSvg } from "../../../../../../../assets/icons/index"
import { Caption } from "../../../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { ST_M_Results_CardEmailWrapper } from "./styles/ST_M_Results_CardEmailWrapper.js"

export const ST_M_Results_CardEmail = ({ email }) => {
  return (
    <ST_M_Results_CardEmailWrapper>
      <div>
        <EmailORGSvg />
        <Caption bold>Email:</Caption>
      </div>

      <Caption>{email}</Caption>
    </ST_M_Results_CardEmailWrapper>
  )
}
