import { INDEX_Logo } from "@/components/logo/INDEX_Logo"
import { H4 } from "@/components/ui/heading_body_text/HeaderFonts"
import { ALL_ROUTES } from "@/utils/ALL_ROUTES"
import Link from "next/link.js"
import {
  Facebook3Svg,
  Instagram2Svg,
  LanguageIconSvg,
  LinkedinSvg,
  Twitter2Svg,
} from "../../../assets/icons/index.js"
import { Caption } from "../../ui/heading_body_text/DesktopMobileFonts"
import { Footer_DWrapper } from "./styles/Footer_DWrapper"

export const Footer_D = () => {
  return (
    <Footer_DWrapper>
      <header>
        <H4>Join today and get started with your free forever account!</H4>
        <Link href={`${ALL_ROUTES.SIGNUP}`}>Sign Up</Link>
      </header>

      <div>
        <div>
          <INDEX_Logo />
          <Caption>
            The public benefit company connecting parents with the I/DD
            community.
          </Caption>
        </div>

        <div>
          <ul>
            <h6>About us</h6>
            <li>Inclusive’s story</li>
            <li>Contact us</li>
          </ul>
          <ul>
            <h6>Resource Directory</h6>
            <li>Find resources</li>
          </ul>
          <ul>
            <h6>Support us</h6>
            <li>Donate</li>
            <li>Give feedback</li>
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
    </Footer_DWrapper>
  )
}
