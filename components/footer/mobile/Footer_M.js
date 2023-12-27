import { Facebook3Svg, Instagram2Svg, LanguageIconSvg, LinkedinSvg, Twitter2Svg } from "../../../assets/icons/index.js"
import { Caption } from "../../ui/heading_body_text/DesktopMobileFonts.js"
import { H2 } from "../../ui/heading_body_text/HeaderFonts.js"
import { Footer_MWrapper } from "./styles/Footer_MWrapper.js"

export const Footer_M = () => {
  return (
    <Footer_MWrapper>
      <div>
        <H2
          bold
          logo>
          INCLUSIVE
        </H2>
        <Caption>The public benefit company connecting parents with the I/DD community.</Caption>
      </div>
      <div>
        <Caption>© 2023 The INCLUSIVE Group, All rights reserved.</Caption>

        <span>
          <div>
            <LanguageIconSvg /> <Caption>English (US)</Caption>
          </div>
          <div>
            <Twitter2Svg /> <Facebook3Svg /> <Instagram2Svg /> <LinkedinSvg />{" "}
          </div>
        </span>
      </div>
    </Footer_MWrapper>
  )
}
