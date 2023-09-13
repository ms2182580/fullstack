import { PhoneSvg } from "../../../../../assets/Icons/index.js"
import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { ORG_D_Detail_CardPhoneWrapper } from "./styles/ORG_D_Detail_CardPhoneWrapper.js"

export const ORG_D_Detail_CardPhone = ({ phoneNumber }) => {
  return (
    <ORG_D_Detail_CardPhoneWrapper>
      <PhoneSvg />
      <P bold>Phone:</P>
      <P>{phoneNumber}</P>
    </ORG_D_Detail_CardPhoneWrapper>
  )
}
