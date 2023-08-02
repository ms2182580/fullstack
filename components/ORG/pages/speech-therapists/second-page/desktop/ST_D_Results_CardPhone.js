// import { PhoneSvg } from "../../../../../assets/Icons"
// import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts"
import { PhoneSvg } from "../../../../../../assets/Icons/index.js"
import { P } from "../../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { ST_D_Results_CardPhoneWrapper } from "./styles/ST_D_Results_CardPhoneWrapper.js"

export const ST_D_Results_CardPhone = ({ phoneNumber }) => {
  return (
    <ST_D_Results_CardPhoneWrapper>
      <PhoneSvg />
      <P>{phoneNumber}</P>
    </ST_D_Results_CardPhoneWrapper>
  )
}
