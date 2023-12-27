import { VerifiedTicket2Svg } from "../../../assets/icons2/index.js"
import { Caption } from "../../ui/heading_body_text/DesktopMobileFonts.js"
import { VerifiedWrapper } from "./styles/VerifiedWrapper.js"

export const Verified = () => {
  return (
    <VerifiedWrapper>
      <VerifiedTicket2Svg />
      <Caption>Verified</Caption>
    </VerifiedWrapper>
  )
}
