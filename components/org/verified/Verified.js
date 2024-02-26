import { VerifiedTicket2Svg } from "../../../assets/icons/index"
import { Caption } from "../../ui/heading_body_text/DesktopMobileFonts"
import { VerifiedWrapper } from "./styles/VerifiedWrapper.js"

export const Verified = () => {
  return (
    <VerifiedWrapper>
      <VerifiedTicket2Svg />
      <Caption>Verified</Caption>
    </VerifiedWrapper>
  )
}
