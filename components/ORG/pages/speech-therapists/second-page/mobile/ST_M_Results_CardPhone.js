import { PhoneSvg } from "../../../../../assets/Icons/index.js"
import { Caption } from "../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { ST_M_Results_CardPhoneWrapper } from "./styles/ST_M_Results_CardPhoneWrapper.js"

export const ST_M_Results_CardPhone = ({ phoneNumber }) => {
  return (
    <ST_M_Results_CardPhoneWrapper >
      <div>
        <PhoneSvg />
        <Caption bold>Phone:</Caption>
      </div>

      <div>
        <Caption>{phoneNumber}</Caption>
      </div>
    </ST_M_Results_CardPhoneWrapper>
  )
}
