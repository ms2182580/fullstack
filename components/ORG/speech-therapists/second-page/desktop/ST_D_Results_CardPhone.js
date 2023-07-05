import { PhoneSvg } from "../../../../../assets/Icons"
import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts"
import { ST_D_Results_CardPhoneWrapper } from "./styles/ST_D_Results_CardPhoneWrapper.js"

export const ST_D_Results_CardPhone = ({ phoneNumber }) => {
  return (
    <ST_D_Results_CardPhoneWrapper>
      <PhoneSvg />
      <P bold>Phone:</P>
      <P>{phoneNumber}</P>
    </ST_D_Results_CardPhoneWrapper>
  )
}
