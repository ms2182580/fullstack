import { PhoneSvg } from "../../../../../assets/icons/index"
import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts"
import { ORG_D_Detail_CardPhoneWrapper } from "./styles/ORG_D_Detail_CardPhoneWrapper"

type Props = {
  phoneNumber: string
  isBackend?: boolean
}

export const ORG_D_Detail_CardPhone = ({
  phoneNumber,
  isBackend = false,
}: Props) => {
  return (
    <ORG_D_Detail_CardPhoneWrapper>
      <PhoneSvg />
      <P>Phone:</P>
      <P tabIndex={0}>{phoneNumber}</P>
    </ORG_D_Detail_CardPhoneWrapper>
  )
}
