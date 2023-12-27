import { ShareSvg } from "../../../assets/icons2"
import { P } from "../../ui/heading_body_text/DesktopMobileFonts"
import { ShareWrapper } from "./styles/ShareWrapper.js"

export const Share = ({ isThirdPage = false }) => {
  return (
    <ShareWrapper isThirdPage={isThirdPage}>
      <ShareSvg />
      <P primary_hover>Share</P>
    </ShareWrapper>
  )
}
