import { PhoneResultsSvg } from "../../../../../assets/icons/index"
import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts"
import { ORG_D_Results_CardPhoneWrapper } from "./styles/ORG_D_Results_CardPhoneWrapper"

type Props = {
  phoneNumber: string
}

export const ORG_D_Results_Cardphone = ({ phoneNumber = "_" }: Props) => {
  return (
    <ORG_D_Results_CardPhoneWrapper>
      <PhoneResultsSvg />
      {/* !FH Add the feature of copy the phoneNumber with Enter key */}
      <P tabIndex={0}>{phoneNumber}</P>
    </ORG_D_Results_CardPhoneWrapper>
  )
}
