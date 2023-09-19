import { PhoneSvg } from "../../../../../../assets/Icons/index.js"
import { P } from "../../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { ST_D_Detail_CardPhoneWrapper } from "./styles/ST_D_Detail_CardPhoneWrapper.js"

export const ST_D_Detail_CardPhone = ({ phoneNumber }) => {
  return (
    <ST_D_Detail_CardPhoneWrapper>
      <PhoneSvg />
      <P bold>Phone:</P>
      <P>{phoneNumber}</P>
    </ST_D_Detail_CardPhoneWrapper>
  )
}
