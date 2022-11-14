import { Caption } from "../../ui/heading_body_text/DesktopMobileFonts.js"
import {VerifiedWrapper} from "./styles/VerifiedWrapper.js"
import { VerifiedTicketSvg } from "../../../assets/Icons/index.js"


export const Verified = () => {
  return (
    <VerifiedWrapper>
      <VerifiedTicketSvg/>
      <Caption>Verified</Caption>
    </VerifiedWrapper>
  )
}
