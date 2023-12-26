import { Facebook2Svg, InstagramSvg, TwitterSvg, YoutubeSvg } from "../../assets/icons/index.js"
import { Caption } from "../ui/heading_body_text/DesktopMobileFonts.js"
import { FooterSocialmediaWrapper } from "./styles/FooterSocialmedia.js"

export const FooterSocialmedia = ({ shouldTab }) => {
  return (
    <FooterSocialmediaWrapper>
      <div>
        <TwitterSvg tabIndex={shouldTab} />
        <InstagramSvg tabIndex={shouldTab} />
        <Facebook2Svg tabIndex={shouldTab} />
        <YoutubeSvg tabIndex={shouldTab} />
      </div>
      <div>
        <Caption>© 2022 The Inclusive Group, All rights reserved</Caption>
      </div>
    </FooterSocialmediaWrapper>
  )
}
