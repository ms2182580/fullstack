import { FooterSocialmediaWrapper } from "./styles/FooterSocialmedia.js"
import { Facebook2Svg, InstagramSvg, TwitterSvg, YoutubeSvg } from "../../assets/Icons/index.js"
import { Caption } from "../ui/heading_body_text/DesktopMobileFonts.js"

export const FooterSocialmedia = () => {
  return (
    <FooterSocialmediaWrapper>
      <div>
        <TwitterSvg tabIndex={0} />
        <InstagramSvg tabIndex={0} />
        <Facebook2Svg tabIndex={0} />
        <YoutubeSvg tabIndex={0} />
      </div>
      <div>
        <Caption>© 2022 The Inclusive Group, All rights reserved</Caption>
      </div>
    </FooterSocialmediaWrapper>
  )
}
