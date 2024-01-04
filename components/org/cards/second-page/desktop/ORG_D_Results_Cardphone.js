import { PhoneResultsSvg } from "../../../../../assets/icons/index.js"
import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { ORG_D_Results_CardPhoneWrapper } from "./styles/ORG_D_Results_CardPhoneWrapper.js"

export const ORG_D_Results_Cardphone = ({ phoneNumber }) => {
  return (
    <ORG_D_Results_CardPhoneWrapper>
      <PhoneResultsSvg />
      <P>{phoneNumber}</P>
    </ORG_D_Results_CardPhoneWrapper>
  )
}
