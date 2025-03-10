import { PhoneSvg } from "../../../../../../assets/icons/index"
import { P } from "../../../../../ui/heading_body_text/DesktopMobileFonts"
import { ST_M_Detail_CardPhoneWrapper } from "./styles/ST_M_Detail_CardPhoneWrapper.js"

export const ST_M_Detail_CardPhone = ({ phoneNumber }) => {
  return (
    <ST_M_Detail_CardPhoneWrapper>
      <PhoneSvg />
      <div>
        <P>{phoneNumber}</P>
      </div>
    </ST_M_Detail_CardPhoneWrapper>
  )
}
