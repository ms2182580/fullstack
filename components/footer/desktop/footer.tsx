import {
  Facebook3Svg,
  Instagram2Svg,
  LanguageIconSvg,
  LinkedinSvg,
  Twitter2Svg,
} from "@/assets/icons/index"
import { INDEX_Logo } from "@/components/logo"
import { ButtonSmall } from "@/components/ui/buttons/general"
import {
  Caption,
  P,
} from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { Footer_Wrapper } from "./styles/footer-wrapper"

export const Footer = () => {
  return (
    <Footer_Wrapper>
      <div>
        <div>
          <div>
            <INDEX_Logo />
            <P>BETA</P>
          </div>
          <Caption>
            The public benefit company connecting parents with the I/DD
            community.
          </Caption>
        </div>

        <div>
          <ul>
            <h6>Find a resource</h6>
          </ul>
          <ul>
            <h6>Help a family</h6>
          </ul>
          <ul>
            <h6>Support us</h6>
            <li>Donate</li>
            <li>Give feedback</li>
            <ButtonSmall secondary>Sign up</ButtonSmall>
          </ul>
        </div>
      </div>

      <div>
        <div>
          <Caption>© 2024 The INCLUSIVE Group, All rights reserved.</Caption>
          <ul>
            <li tabIndex={0}>
              <LanguageIconSvg /> <Caption>English (US)</Caption>
            </li>
            <li>
              <ul>
                <li>
                  <Twitter2Svg tabIndex={0} />
                </li>

                <li>
                  <Facebook3Svg tabIndex={0} />
                </li>

                <li>
                  <Instagram2Svg tabIndex={0} />
                </li>

                <li>
                  <LinkedinSvg tabIndex={0} />
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </Footer_Wrapper>
  )
}
