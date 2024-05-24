import {
  Direction_Icon_SVG,
  Email2Svg,
  Phone_Icon_SVG,
  Website2Svg,
} from "@/assets/icons"
import { ORG_D_Detail_ContactWrapper } from "./styles/ORG_D_Detail_ContactWrapper"

import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { H2 } from "@/components/ui/heading_body_text/HeaderFonts"
import { ORG_D_Map2 } from "./ORG_D_Map2"

export const ORG_D_Detail_Contact = () => {
  return (
    <ORG_D_Detail_ContactWrapper>
      <H2>Contact the Organization</H2>
      <div>
        <ul>
          <li>
            <span>(123) 456-7890 </span>
            <span>
              <Phone_Icon_SVG />
            </span>
          </li>
          <li>
            <span>www.website.com</span>
            <span>
              <Website2Svg />
            </span>
          </li>
          <li>
            <span>info@email.com</span>
            <span>
              <Email2Svg />
            </span>
          </li>
          <li>
            <P>get direction</P>
            <span>
              <Direction_Icon_SVG />
            </span>
            <P>50 Lexington Ave New York, NY 01011</P>
          </li>
        </ul>

        <div>
          <ORG_D_Map2 />
        </div>
      </div>
    </ORG_D_Detail_ContactWrapper>
  )
}
